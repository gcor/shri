!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){i(1),i(8),i(2),i(5),i(4),i(9),i(7),i(3),e.exports=i(6)},function(e,t,i){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=i(2),u=o(s),c=i(3),l=(n(c),function(){function e(){a(this,e),this.src={},this.$pages=document.querySelectorAll(".page"),this.$inputs=document.querySelectorAll(".form__input"),this.$submit=document.querySelector(".form__submit"),this.$player=document.querySelector(".player"),this.$submit.addEventListener("click",this.onSubmit.bind(this))}return r(e,[{key:"onSubmit",value:function(e){e.preventDefault();var t="./",i=!0,n=!1,o=void 0;try{for(var a,r=this.$inputs[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){var s=a.value,u=s.getAttribute("data-type");this.src[u]=t+s.value}}catch(c){n=!0,o=c}finally{try{!i&&r["return"]&&r["return"]()}finally{if(n)throw o}}this.initPlayer()}},{key:"openPage",value:function(e){var t=document.querySelector('[data-page="'+e+'"]'),i=!0,n=!1,o=void 0;try{for(var a,r=this.$pages[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){var s=a.value;s.classList.contains("hidden")||s.classList.add("hidden"),t&&t.classList.remove("hidden")}}catch(u){n=!0,o=u}finally{try{!i&&r["return"]&&r["return"]()}finally{if(n)throw o}}return t}},{key:"initPlayer",value:function(){this.openPage("player"),new u["default"](this.src.video,this.src.subtitles,this.src.audio);this.$player.removeAttribute("data-loader")}}]),e}());new l},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=i(3),u=(o(s),i(4)),c=n(u),l=i(8),d=n(l),h=function(){function e(t,i,n){a(this,e),this.video=new c["default"](t,i),this.audio=new d["default"](n),this.playing=!1,this.$playback=document.querySelector(".controls__state"),this.$timenow=document.querySelector(".controls__now"),this.$progress=document.querySelector(".controls__progress"),this.$progress.addEventListener("click",e.onProgressClick.bind(this)),this.$playback.addEventListener("click",e.onPlayPauseVideo.bind(this)),this.video.canvas.addEventListener("click",e.onPlayPauseVideo.bind(this))}return r(e,[{key:"play",value:function(){this.playing=!0,this.video.play(),this.audio.play()}},{key:"pause",value:function(){this.playing=!1,this.video.pause(),this.audio.pause()}}],[{key:"onPlayPauseVideo",value:function(){this.playing?this.pause():this.play(),this.$playback.classList.toggle("controls__state_play"),this.$playback.classList.toggle("controls__state_pause")}},{key:"onProgressClick",value:function(e){var t=e.target.getBoundingClientRect(),i=(e.clientX-t.left)/t.width;this.video.currentTime=i*this.videoDuration}}]),e}();t["default"]=h},function(e,t){"use strict";function i(e){return new Promise(function(t,i){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){if(200==this.status)t(this.response);else{var e=new Error(this.statusText);e.code=this.status,i(e)}},n.onerror=function(){i(new Error("Network Error"))},n.send()})}Object.defineProperty(t,"__esModule",{value:!0}),t.load=i},function(e,t,i){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=i(5),u=o(s),c=i(6),l=n(c),d=i(7),h=n(d),f=function(){function e(t,i){a(this,e),this.video=null,this.track=null,this.noisevideo=document.querySelector(".player__noisevideo"),this.canvas=document.querySelector(".player__canvas"),this.context=this.canvas.getContext("2d"),this.$videoNode=document.querySelector(".player__video-container"),this.videoDuration=0,this.canvasWidth=600,this.canvasHeight=400,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.createVideo(t),this.subtitles=new u["default"](this.video),this.subtitles.createSubtitles(i)}return r(e,[{key:"play",value:function(){this.video.play(),this.noisevideo.play()}},{key:"pause",value:function(){this.video.pause(),this.noisevideo.pause()}},{key:"_draw",value:function(e,t,i,n){var o=this;return!this.paused&&!this.ended&&(this.subtitles.isShowCue&&this._renderCue(),this._renderImage(e,t,i,n),void requestAnimationFrame(function(){o._draw(e,t,i,n)}))}},{key:"_renderCue",value:function(){var e=this.canvasWidth-50,t=30,i=(this.canvas.width-e)/2,n=this.canvasHeight/2;this.context.font="26px Oranienbaum",this.context.fillStyle="#FFF",h.centerWrapText(this.context,this.subtitles.currentCue,i,n,e,t)}},{key:"_renderImage",value:function(e,t,i,n){var o=t.globalCompositeOperation;if(t.globalCompositeOperation=o,t.globalCompositeOperation="multiple",t.drawImage(this.noisevideo,0,0,i,n),t.globalAlpha=.2,!this.subtitles.isShowCue){t.drawImage(e,0,0,i,n);var a=t.getImageData(0,0,i,n),r=l.grayscale(a);t.putImageData(r,0,0)}}},{key:"createVideo",value:function(t){var i=document.createElement("video");i.className="player__video";var n=t.slice(-3),o=document.createElement("source");o.setAttribute("src",t),o.setAttribute("type","video/"+n),i.appendChild(o),i.addEventListener("loadedmetadata",e.onLoadMetaData.bind(this)),i.addEventListener("play",e.onPlayVideo.bind(this)),this.video=i,this.$videoNode.appendChild(this.video)}}],[{key:"onLoadMetaData",value:function(){this.video.volume=0,this.noisevideo.volume=0}},{key:"onPlayVideo",value:function(){this._draw(this.video,this.context,this.canvasWidth,this.canvasHeight)}}]),e}();t["default"]=f},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function e(t){i(this,e),this.video=t,this.cues=null,this.isShowCue=!1,this.currentCue=""}return n(e,[{key:"createSubtitles",value:function(t){var i=document.createElement("track");i.kind="captions",i.label="Russian",i.srclang="ru",i.src=t,i.setAttribute("default",!0),this.track=i,this.video.appendChild(this.track),this.track.addEventListener("load",e.onTrackLoad.bind(this))}}],[{key:"onTrackLoad",value:function(){var t=0;this.track.mode="showing",this.video.textTracks[0].mode="showing",this.cues=this.video.textTracks[0].cues;for(var i=0;i<this.cues.length;++i){var n=this.cues[i];t+=n.endTime-n.startTime,n.addEventListener("enter",e.onCueEnter.bind(this))}this.videoDuration=this.video.duration+t}},{key:"onCueEnter",value:function(e){var t=this,i=e.target,n=i.endTime-i.startTime;this.video.pause(),this.isShowCue=!0,this.currentCue=i.text,setTimeout(function(){t.isShowCue=!1,t.currentCue="",t.video.play()},1e3*n)}}]),e}();t["default"]=o},function(e,t){"use strict";function i(e){for(var t=e.data,i=t.length,n=0;n<i;n+=4){var o=t[n],a=t[n+1],r=t[n+2],s=.21*o+.72*a+.07*r-15*Math.random();t[n]=s,t[n+1]=s,t[n+2]=s}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.grayscale=i},function(e,t){"use strict";function i(e,t,i,n,o,a){var r=t.split(" "),s="",u=[],c=0;r.map(function(t,i){var r=""+s+t+" ",l=e.measureText(r),d=l.width;d>o&&i>0?(u.push({text:s,y:n}),c++,s=t+" ",n+=a):s=r}),c++,u.push({text:s,y:n}),u.map(function(t){var n=t.y-c*a/4;e.fillText(t.text,i,n)})}Object.defineProperty(t,"__esModule",{value:!0}),t.centerWrapText=i},function(e,t,i){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=i(9),s=n(r),u=function(){function e(t){o(this,e),this.audio=null,this.noiseGainNode=null,this.whiteNoise=null,this.$audio=document.querySelector(".player__audio-container"),this.createAudio(t),this.createNoiseAudio()}return a(e,[{key:"play",value:function(){this.audio.play(),this.playNoise()}},{key:"pause",value:function(){this.audio.pause()}},{key:"playNoise",value:function(){this.whiteNoise.connect(this.noiseGainNode)}},{key:"stopNoise",value:function(){this.whiteNoise.disconnect()}},{key:"createAudio",value:function(e){var t=document.createElement("audio");t.src=e,this.audio=t,this.$audio.appendChild(this.audio),s.lowpass(this.audio,500)}},{key:"createNoiseAudio",value:function(){var t=s.volume(this.whiteNoise,.01);this.noiseGainNode=t.noiseGainNode,this.whiteNoise=t.source,this.whiteNoise.addEventListener("audioprocess",e.onAudioProcess.bind(this))}}],[{key:"onAudioProcess",value:function(e){for(var t=this.whiteNoise.bufferSize,i=e.outputBuffer.getChannelData(0),n=0;n<t;n++)i[n]=2*Math.random()-1}}]),e}();t["default"]=u},function(e,t){"use strict";function i(e,t){var i=new AudioContext,n=i.createBiquadFilter(),o=i.createMediaElementSource(e);o.connect(n),n.connect(i.destination),n.type="lowpass",n.frequency.value=t}function n(e,t){var i=new AudioContext,n=4096,o=i.createGain();return e=i.createScriptProcessor(n,1,1),o.connect(i.destination),o.gain.value=t,{noiseGainNode:o,source:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.lowpass=i,t.volume=n}]);