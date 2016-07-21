export function volume(source, level) {
    const noiseAudioContext = new AudioContext();
    const noiseBufferSize = 4096;
    const noiseGainNode = noiseAudioContext.createGain();

    source = noiseAudioContext.createScriptProcessor(noiseBufferSize, 1, 1);
    // громкость
    noiseGainNode.connect(noiseAudioContext.destination);
    noiseGainNode.gain.value = level;

    return { noiseGainNode, source };
}
