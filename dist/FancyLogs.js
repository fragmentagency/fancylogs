var FancyLogs=function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){"use strict";function n(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}t.r(e),t.d(e,"default",function(){return c});var c=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.setEnabled(t),this.setColors(e)}var e,t,c;return e=r,(t=[{key:"setColors",value:function(r){var e=this,t=Object.assign({info:{backgroundColor:"#0099CC",textColor:"#fff"},success:{backgroundColor:"#007E33",textColor:"#fff"},warning:{backgroundColor:"#ff8800",textColor:"#fff"},error:{backgroundColor:"#cc0000",textColor:"#fff"}},r);Object.keys(t).forEach(function(r){e[r]=e.log.bind(e,t[r])})}},{key:"setEnabled",value:function(r){this.enabled=r}},{key:"log",value:function(){if(this.enabled)try{var r,e=Array.prototype.slice.call(arguments),t=arguments[0],o=arguments[1];(r=console).log.apply(r,["%c ".concat(o," "),"color: ".concat(t.textColor,"; background-color: ").concat(t.backgroundColor)].concat(n(e.slice(2))))}catch(r){throw new Error(r)}}}])&&o(e.prototype,t),c&&o(e,c),r}()}]);