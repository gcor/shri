import Subtitles from "./subtitles";
import * as videoFilter from "./helpers/videoFilter";
import * as canvasHelpers from "./helpers/canvasHelpers";

export default class Video {
    constructor(videoPath, subtitlesPath) {
        this.video = null;
        this.track = null;

        this.noisevideo = document.querySelector('.player__noisevideo');
        this.canvas = document.querySelector('.player__canvas');
        this.context = this.canvas.getContext('2d');

        this.$videoNode = document.querySelector('.player__video-container');

        this.videoDuration = 0;
        this.canvasWidth = 600;
        this.canvasHeight = 400;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;

        this.createVideo(videoPath);

        this.subtitles = new Subtitles(this.video);
        this.subtitles.createSubtitles(subtitlesPath);
    }

    play() {
        this.video.play();
        this.noisevideo.play();
    }

    pause() {
        this.video.pause();
        this.noisevideo.pause();
    }

    _draw(video, context, canvasWidth, canvasHeight) {
        if (this.paused || this.ended) return false;
        if (this.subtitles.isShowCue) this._renderCue();
        this._renderImage(video, context, canvasWidth, canvasHeight);
        requestAnimationFrame(() => {
            this._draw(video, context, canvasWidth, canvasHeight);
        });
    }

    _renderCue() {
        let maxWidth = this.canvasWidth - 50;
        let lineHeight = 30;
        let marginLeft = (this.canvas.width - maxWidth) / 2;
        let marginTop = this.canvasHeight / 2;

        this.context.font = "26px Oranienbaum";
        this.context.fillStyle = '#FFF';

        canvasHelpers.centerWrapText(this.context, this.subtitles.currentCue, marginLeft, marginTop, maxWidth, lineHeight);
    }

    _renderImage(video, context, canvasWidth, canvasHeight) {
        let composite = context.globalCompositeOperation;
        context.globalCompositeOperation = composite;
        context.globalCompositeOperation = 'multiple';
        context.drawImage(this.noisevideo, 0, 0, canvasWidth, canvasHeight);
        context.globalAlpha = .2;
        if (!this.subtitles.isShowCue) {
            context.drawImage(video, 0, 0, canvasWidth, canvasHeight);
            let image = context.getImageData(0, 0, canvasWidth, canvasHeight);
            let filterImage = videoFilter.grayscale(image)
            context.putImageData(filterImage, 0, 0);
        }
    }

    createVideo(path) {
        let video = document.createElement("video");
        video.className = "player__video";

        let type = path.slice(-3);
        let source = document.createElement("source");
        source.setAttribute('src', `./${path}`);
        source.setAttribute('type', `video/${type}`);
        video.appendChild(source);

        video.addEventListener('loadedmetadata', Video.onLoadMetaData.bind(this));
        video.addEventListener('play', Video.onPlayVideo.bind(this));

        this.video = video;
        this.$videoNode.appendChild(this.video);
    }


    static onLoadMetaData() {
        this.video.volume = 0;
        this.noisevideo.volume = 0;;
    }

    static onPlayVideo() {
        this._draw(this.video, this.context, this.canvasWidth, this.canvasHeight);
    }
}
