module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){var n=t(1).default;e.exports=n},function(e,r,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.r(r),t.d(r,"default",function(){return c});var c=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.setEnabled(t),this.setColors(r)}var r,t,c;return r=e,(t=[{key:"setColors",value:function(e){var r=this,t=Object.assign({info:{backgroundColor:"#0099CC",textColor:"#fff"},success:{backgroundColor:"#007E33",textColor:"#fff"},warning:{backgroundColor:"#ff8800",textColor:"#fff"},error:{backgroundColor:"#cc0000",textColor:"#fff"}},e);Object.keys(t).forEach(function(e){r[e]=r.log.bind(r,t[e])})}},{key:"setEnabled",value:function(e){this.enabled=e}},{key:"log",value:function(){if(this.enabled)try{var e,r=Array.prototype.slice.call(arguments),t=arguments[0],o=arguments[1];(e=console).log.apply(e,["%c ".concat(o," "),"color: ".concat(t.textColor,"; background-color: ").concat(t.backgroundColor)].concat(n(r.slice(2))))}catch(e){throw new Error(e)}}}])&&o(r.prototype,t),c&&o(r,c),e}()}]);