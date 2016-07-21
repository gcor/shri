import * as loader from './helpers/loader'
import Video from "./video";
import Audio from "./audio";

export default class Player {
    constructor(video, subtitles, audio) {
        this.video = new Video(video, subtitles);
        this.audio = new Audio(audio);
        this.playing = false;

        this.$playback = document.querySelector('.controls__state');
        this.$timenow = document.querySelector('.controls__now');
        this.$progress = document.querySelector('.controls__progress');

        this.$progress.addEventListener('click', Player.onProgressClick.bind(this));
        this.$playback.addEventListener('click', Player.onPlayPauseVideo.bind(this));
        this.video.canvas.addEventListener('click', Player.onPlayPauseVideo.bind(this));
    }

    play() {
        this.playing = true;
        this.video.play();
        this.audio.play();
    }

    pause() {
        this.playing = false;
        this.video.pause();
        this.audio.pause();
    }

    static onPlayPauseVideo() {
        if (this.playing) this.pause();
        else this.play();
        
        this.$playback.classList.toggle('controls__state_play');
        this.$playback.classList.toggle('controls__state_pause');
    }
    
    static onProgressClick(e) {
        let point = e.target.getBoundingClientRect();
        let pos = (e.clientX - point.left) / point.width;
        this.video.currentTime = pos * this.videoDuration;
    }
}
