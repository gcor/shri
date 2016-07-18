class Player {
    constructor() {
        this.video = document.querySelector('.player__video');
        this.canvas = document.querySelector('.player__canvas');
        this.playback = document.querySelector('.controls__state');
        this.timeline = document.querySelector('.controls__timeline');
        this.timenow = document.querySelector('.controls__now');

        this.context = this.canvas.getContext('2d');
        this.playback.addEventListener('click', function () {
            console.log(1);
        })
        this.timeline.addEventListener('click', function () {
            console.log(2);
        })
    }
}

let player = new Player();

/*
document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.player__video');
    var canvas = document.querySelector('.player__canvas');
    var context = canvas.getContext('2d');

    var cw = Math.floor(canvas.clientWidth / 100);
    var ch = Math.floor(canvas.clientHeight / 100);
    canvas.width = cw;
    canvas.height = ch;

    video.addEventListener('play', function() {
        draw(this, context, cw, ch);
    }, false);

}, false);

function draw(video, canvas, w, h) {
    if (video.paused || video.ended) return false;
    canvas.drawImage(video, 0, 0, w, h);
    setTimeout(draw, 20, video, canvas, w, h);
}
*/
