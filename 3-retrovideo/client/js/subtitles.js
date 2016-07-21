export default class Video {
    constructor(video) {
        this.video = video;
        this.cues = null;
        this.isShowCue = false;
        this.currentCue = '';
    }
    createSubtitles(path) {
        let track = document.createElement("track");
        track.kind = "captions";
        track.label = "Russian";
        track.srclang = "ru";
        track.src = `./${path}`;
        track.setAttribute('default', true);

        this.track = track;
        this.video.appendChild(this.track);
        this.track.addEventListener("load", Video.onTrackLoad.bind(this));
    }

    static onTrackLoad() {
        let cueDuration = 0;

        this.track.mode = "showing";
        this.video.textTracks[0].mode = "showing";
        this.cues = this.video.textTracks[0].cues;

        for (let i = 0; i < this.cues.length; ++i) {
            let cue = this.cues[i];
            cueDuration += cue.endTime - cue.startTime;

            cue.addEventListener('enter', Video.onCueEnter.bind(this));
        }

        this.videoDuration = this.video.duration + cueDuration;
    }

    static onCueEnter(e) {
        let cue = e.target;
        let duration = cue.endTime - cue.startTime;
        let cueDuretion = (duration > 2) ? duration : 3;

        this.video.pause();
        this.isShowCue = true;
        this.currentCue = cue.text;

        setTimeout(() => {
            this.isShowCue = false;
            this.currentCue = '';
            this.video.play();
        }, duration * 1000)
    }
}
