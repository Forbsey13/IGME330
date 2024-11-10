/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e,r,n,o,a,i,c,u=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return"rgba(".concat(t,",").concat(e,",").concat(r,",").concat(n,")")},l=function(t,e,r,n){var o=document.querySelector(t),a=document.querySelector(e);o.oninput=function(t){n(t.target.value),a.innerHTML="".concat(t.target.value," ").concat(r)},o.dispatchEvent(new Event("input"))},s=function(t){var e=Math.floor(t/60),r=Math.floor(t%60);return"".concat(String(e).padStart(1,"0"),":").concat(String(r).padStart(2,"0"))},f=Object.freeze({PLAY:"https://c.animaapp.com/fgpR59jS/img/svgexport-35--1--1@2x.png",PAUSE:"https://c.animaapp.com/yPlj5CdF/img/svgexport-83-1.svg"}),h=Object.freeze({gain:.5,numSamples:256}),y=Object.freeze({BASS_FREQ:200,BASS_GAIN:6,TREBLE_FREQ:4e3,TREBLE_GAIN:4}),p=(new Uint8Array(h.numSamples/2),function(t){return r.src=t}),v=function(t){t=Number(t),i.frequency.setValueAtTime(t,e.currentTime)},d=function(t){t=Number(t),i.gain.setValueAtTime(t,e.currentTime)},m=function(t){t=Number(t),c.frequency.setValueAtTime(t,e.currentTime)},g=function(t){t=Number(t),c.gain.setValueAtTime(t,e.currentTime)},b=function(){return r.duration};function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,L(n.key),n)}}function E(t,e,r){return e&&x(t.prototype,e),r&&x(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function L(t){var e=function(t){if("object"!=w(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(e)?e:e+""}var A,T,P,j,k,_,O,q,M,I,N=function(){return E((function t(e){S(this,t),this.image=e,this.rotationAngle=0,this.rotationInterval=null}),[{key:"startRotation",value:function(){var t=this;if(!this.rotationInterval){var e=function(){t.rotationAngle-=1,t.image.style.transform="rotate(".concat(t.rotationAngle,"deg)"),t.rotationInterval=setTimeout(e,1e3/60)};e()}}},{key:"stopRotation",value:function(){this.rotationInterval&&(clearTimeout(this.rotationInterval),this.rotationInterval=null),this.image.style.transform=""}}])}(),F=function(){return E((function t(e,r,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;S(this,t),this.x=e,this.y=r,this.size=n,this.color=o,this.scale=a,this.velocity={x:2*Math.random()-1,y:2*Math.random()-1}}),[{key:"update",value:function(t,e,r){var n=t.reduce((function(t,e){return t+e}))/(255*t.length);this.size=Math.max(100*n*this.scale,20),this.x+=this.velocity.x,this.y+=this.velocity.y,(this.x<0||this.x>e)&&(this.velocity.x*=-1),(this.y<0||this.y>r)&&(this.velocity.y*=-1)}},{key:"draw",value:function(t){t.save(),t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.size*this.scale*2,0,2*Math.PI),t.fill(),t.restore()}}])}(),G=function(e,r){A=e.getContext("2d"),T=e.width,P=e.height,j=function(e,r,n,o,a){var i,c=e.createLinearGradient(0,0,0,a),u=function(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}([{percent:0,color:"#5ad1bd"},{percent:.5,color:"#4ea9b5"},{percent:1,color:"#34708c"}]);try{for(u.s();!(i=u.n()).done;){var l=i.value;c.addColorStop(l.percent,l.color)}}catch(t){u.e(t)}finally{u.f()}return c}(A,0,0,0,P),k=r,_=new Uint8Array(k.fftSize/2),O=new F(100,100,10,"rgba(255, 0, 0, 0.2)",1),q=new F(100,100,10,"rgba(0, 0, 255, 0.2)",.5),M=new F(100,100,10,"rgba(0, 255, 0, 0.2)",.25)};function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function C(){C=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new _(n||[]);return o(i,"_invoke",{value:T(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",y="suspendedYield",p="executing",v="completed",d={};function m(){}function g(){}function b(){}var w={};l(w,i,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(O([])));x&&x!==r&&n.call(x,i)&&(w=x);var E=b.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==R(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function T(e,r,n){var o=h;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:y,l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(R(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(A.prototype),l(A.prototype,c,(function(){return this})),e.AsyncIterator=A,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new A(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),l(E,u,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function B(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var V=Object.freeze({sound1:"./media/Hollow Knight OST - Greenpath.mp3"}),H=function(){var t,e=(t=C().mark((function t(){var e,r;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return alert("Audio may not play on the first click.\nPlease click the button again to start the audio.\n\nRecommended screen width: 1080+"),t.next=3,fetch("data/av-data.json");case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,I=r,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){B(a,n,o,i,c,"next",t)}function c(t){B(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),U=function(){var t,u;t=V.sound1,u=window.AudioContext||window.webkitAudioContext,e=new u,r=new Audio,p(t),n=e.createMediaElementSource(r),(o=e.createAnalyser()).fftSize=h.numSamples,(a=e.createGain()).gain.value=h.gain,(i=e.createBiquadFilter()).type="lowshelf",i.frequency.setValueAtTime(y.BASS_FREQ,e.currentTime),i.gain.setValueAtTime(y.BASS_GAIN,e.currentTime),(c=e.createBiquadFilter()).type="highshelf",c.frequency.setValueAtTime(y.TREBLE_FREQ,e.currentTime),c.gain.setValueAtTime(y.TREBLE_GAIN,e.currentTime),n.connect(o),o.connect(i),i.connect(c),c.connect(a),a.connect(e.destination);var l=document.querySelector("canvas");Y(l),G(l,o);var s=document.querySelector("#track-selection");D(s),Q()},D=function(t){var e,r=new Map,n=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return z(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}(I.data);try{for(n.s();!(e=n.n()).done;){var o=e.value,a=document.createElement("div");a.classList.add("track"),a.dataset.name=o.name,a.dataset.path=o.path;var i=document.createElement("img");i.src=o.image,a.appendChild(i);var c=new N(i);r.set(a,c);var u=document.createElement("div");u.classList.add("track-info");var l=document.createElement("h3");l.classList.add("remove-text-flairs"),l.innerHTML=o.name,u.appendChild(l);var s=document.createElement("p");s.classList.add("remove-text-flairs"),s.innerHTML=o.author,u.appendChild(s),a.appendChild(u),t.appendChild(a)}}catch(t){n.e(t)}finally{n.f()}r.values().next().value.startRotation();var h=document.querySelector("#btn-play").querySelector("img");t.onclick=function(t){var e=t.target.closest(".track");if(e){var n=e.dataset.path;p(n),r.forEach((function(t,r){r==e?t.startRotation():t.stopRotation()})),h.src=f.PAUSE}}},Y=function(t){document.querySelector("#btn-fs").onclick=function(e){var r;(r=t).requestFullscreen?r.requestFullscreen():r.mozRequestFullscreen?r.mozRequestFullscreen():r.mozRequestFullScreen?r.mozRequestFullScreen():r.webkitRequestFullscreen&&r.webkitRequestFullscreen()};var n=document.querySelector("#btn-play"),o=n.querySelector("img");n.onclick=function(t){"suspended"==e.state&&e.resume(),"no"==t.target.dataset.playing?(r.play(),t.target.dataset.playing="yes",o.src=f.PLAY):(r.pause(),t.target.dataset.playing="no",o.src=f.PAUSE)};var i=document.querySelector("#slider-volume");i.oninput=function(t){var e;e=t.target.value,e=Number(e),a.gain.value=e},i.dispatchEvent(new Event("input")),l("#slider-bass-frequency","#label-bass-frequency","Hz",v),l("#slider-bass-gain","#label-bass-gain","dB",d),l("#slider-treble-frequency","#label-treble-frequency","Hz",m),l("#slider-treble-gain","#label-treble-gain","dB",g),[{id:"cb-visualizer",param:"visualizerType"},{id:"cb-sprites",param:"showSprites"},{id:"cb-gradient",param:"showGradient"},{id:"cb-bars",param:"showBars"},{id:"cb-circles",param:"showCircles"},{id:"cb-noise",param:"showNoise"},{id:"cb-invert",param:"showInvert"},{id:"cb-emboss",param:"showEmboss"}].forEach((function(t){var e=t.id,r=t.param,n=document.querySelector("#".concat(e));n.checked=I.drawParams[r],n.onchange=function(){I.drawParams[r]=n.checked}})),document.querySelector("#progress-bar").oninput=function(t){var e;e=b()*(t.target.value/100),r.currentTime=e}},Q=function(){setTimeout(Q,1e3/60),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.visualizerType?k.getByteFrequencyData(_):k.getByteTimeDomainData(_),A.save(),A.fillStyle="black",A.globalAlpha=.1,A.fillRect(0,0,T,P),A.restore(),t.showGradient&&(A.save(),A.fillStyle=j,A.globalAlpha=.8,A.fillRect(0,0,T,P),A.restore()),t.showBars){var e=(T-2*_.length-0)/_.length;A.save();var r=A.createLinearGradient(0,P,0,0);r.addColorStop(0,"rgba(255,255,255,0.85)"),r.addColorStop(1,"rgba(37, 121, 128,0.85)"),A.fillStyle=r,A.strokeStyle="rgba(0,0,0,0.15)",A.lineWidth=1.5,A.lineJoin="round";for(var n=0;n<_.length;n++){var o=Math.max(_[n]/255*P*.8,1),a=0+n*(e+2),i=P-o;A.fillRect(Math.floor(a),Math.floor(i),Math.ceil(e),Math.ceil(o)),A.strokeRect(Math.floor(a),Math.floor(i),Math.ceil(e),Math.ceil(o))}A.restore()}if(t.showCircles){var c=P/4,l=T/2,s=P/2;A.save(),A.globalAlpha=.5;for(var f=0;f<_.length;f++){var h=void 0!==_[f]?_[f]/255:0,y=.05*Math.sin(Date.now()/300+f),p=Math.max((h+y)*c,0);A.beginPath(),A.fillStyle=u(38,112,112,.4-h/3),A.arc(l,s,p,0,2*Math.PI,!1),A.fill(),A.closePath(),A.beginPath(),A.fillStyle=u(30,100,100,.15-h/10),A.arc(l,s,Math.max(1.6*p+20*y,0),0,2*Math.PI,!1),A.fill(),A.closePath(),A.save(),A.beginPath(),A.fillStyle=u(20,85,85,.6-h/5),A.arc(l,s,Math.max(.5*p-10*y,0),0,2*Math.PI,!1),A.fill(),A.closePath(),A.restore()}A.restore()}t.showSprites&&(O.update(_,T,P),q.update(_,T,P),M.update(_,T,P),O.draw(A),q.draw(A),M.draw(A));for(var v=A.getImageData(0,0,T,P),d=v.data,m=d.length,g=v.width,b=0;b<m;b+=4)if(t.showNoise&&Math.random()<.05&&(d[b]=d[b+1]=d[b+2]=255),t.showInvert){var w=d[b],S=d[b+1],x=d[b+2];d[b]=255-w,d[b+1]=255-S,d[b+2]=255-x}if(t.showEmboss)for(var E=0;E<m;E++)E%4!=3&&(d[E]=127+2*d[E]-d[E+4]-d[E+4*g]);A.putImageData(v,0,0)}(I.drawParams),$()},$=function(){var t=document.querySelector("#progress-bar"),e=document.querySelector("#progress-label"),n=r.currentTime,o=b();o>0&&(t.value=n/o*100,e.innerHTML="".concat(s(n)," / ").concat(s(o)))};function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function K(){K=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new _(n||[]);return o(i,"_invoke",{value:T(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",y="suspendedYield",p="executing",v="completed",d={};function m(){}function g(){}function b(){}var w={};l(w,i,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(O([])));x&&x!==r&&n.call(x,i)&&(w=x);var E=b.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==J(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function T(e,r,n){var o=h;return function(a,i){if(o===p)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?v:y,l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(J(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(A.prototype),l(A.prototype,c,(function(){return this})),e.AsyncIterator=A,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new A(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),l(E,u,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function W(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function X(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){W(a,n,o,i,c,"next",t)}function c(t){W(a,n,o,i,c,"throw",t)}i(void 0)}))}}window.onload=X(K().mark((function t(){var e;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:e=t.sent,document.title=e.title,U();case 5:case"end":return t.stop()}}),t)})))})();