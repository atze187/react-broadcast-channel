(()=>{"use strict";var e={293:function(e,n,r){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=t(r(811));n.default=function(e){var n=e.children,r=e.channel,t=a.default(r).emit;return n?n((function(e){t(e)})):null}},443:(e,n,r)=>{Object.defineProperty(n,"__esModule",{value:!0});var t=r(427),a=r(875);n.default=function(e){var n=e.children,r=e.channel;return t.useEffect((function(){var e=a.getChannelByName(r);e&&e.addEventListener("message",(function(n){console.log("from subscriber component",e),console.log(n.data)}))}),[]),n?n([]):null}},875:(e,n)=>{function r(e){return new BroadcastChannel(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.emitMessageFromChannel=n.getChannelByName=n.registerChannel=n.createNewChannel=n.channels=void 0,n.channels=[],n.createNewChannel=r,n.registerChannel=function(e){if(Array.isArray(e)){var t=e.map((function(e){return r(e)}));n.channels.push.apply(n.channels,t)}else n.channels.push(r(e))},n.getChannelByName=function(e){var r=null;return n.channels.forEach((function(n){n.name===e&&(r=n)})),r},n.emitMessageFromChannel=function(e){var r=e.name,t=e.message;n.channels.forEach((function(e){e.name===r&&e.postMessage(t)}))}},370:function(e,n,r){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.BroadcastEmiter=n.BroadcastSubscriber=n.useBroadcastChannel=n.registerChannel=void 0;var a=r(875);Object.defineProperty(n,"registerChannel",{enumerable:!0,get:function(){return a.registerChannel}});var u=r(811);Object.defineProperty(n,"useBroadcastChannel",{enumerable:!0,get:function(){return t(u).default}});var o=r(443);Object.defineProperty(n,"BroadcastSubscriber",{enumerable:!0,get:function(){return t(o).default}});var s=r(293);Object.defineProperty(n,"BroadcastEmiter",{enumerable:!0,get:function(){return t(s).default}})},811:(e,n,r)=>{Object.defineProperty(n,"__esModule",{value:!0});var t=r(427),a=r(875);n.default=function(e){var n=t.useState(null),r=n[0],u=n[1],o=t.useCallback((function(e){e(r)}),[r]);return t.useEffect((function(){var n=a.getChannelByName(e);n&&n.addEventListener("message",(function(e){u(e.data)}))}),[]),{emit:function(n){u(n),a.emitMessageFromChannel({name:e,message:n})},subscribe:o,data:r}}},427:e=>{e.exports=require("react")}},n={},r=function r(t){var a=n[t];if(void 0!==a)return a.exports;var u=n[t]={exports:{}};return e[t].call(u.exports,u,u.exports,r),u.exports}(370),t=exports;for(var a in r)t[a]=r[a];r.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})();