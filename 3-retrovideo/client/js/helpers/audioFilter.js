export function lowpass(audio, level) {
    const context = new AudioContext();
    const filter = context.createBiquadFilter();
    const source = context.createMediaElementSource(audio);

    source.connect(filter);
    filter.connect(context.destination);
    filter.type = 'lowpass';
    filter.frequency.value = level;
}
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
