import * as audioFilter from "./helpers/audioFilter";

export default class Audio {
    constructor(audioPath) {
        this.audio = null;
        this.noiseGainNode = null;
        this.whiteNoise = null;

        this.$audio = document.querySelector('.player__audio-container');

        this.createAudio(audioPath);
        this.createNoiseAudio();
    }
    play() {
        this.audio.play();
        this.playNoise();
    }
    pause() {
        this.audio.pause();

        // постоянный эффект шума
        // this.stopNoise(); 
    }

    playNoise() {
        this.whiteNoise.connect(this.noiseGainNode);
    }
    stopNoise() {
        this.whiteNoise.disconnect();
    }

    // создание элемента музыки тапера
    createAudio(path) {
        let audio = document.createElement("audio");
        audio.src = path;

        this.audio = audio;
        this.$audio.appendChild(this.audio);
        
        audioFilter.lowpass(this.audio, 500)
    }

    // создание белого шума
    createNoiseAudio() {
        const noise = audioFilter.volume(this.whiteNoise, 0.01);
        this.noiseGainNode = noise.noiseGainNode;
        this.whiteNoise = noise.source;
        this.whiteNoise.addEventListener('audioprocess', Audio.onAudioProcess.bind(this));
    }

    static onAudioProcess(e) {
        const bufferSize = this.whiteNoise.bufferSize;
        let output = e.outputBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
    }
}
