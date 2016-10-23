!function(e){function t(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=d.p+""+e+"."+m+".hot-update.js",t.appendChild(n)}function n(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,n=d.p+""+m+".hot-update.json";t.open("GET",n,!0),t.timeout=1e4,t.send(null)}catch(r){return e(r)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+n+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+n+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(i){return void e(i)}e(null,r)}}}function r(e){function t(e,t){"ready"===A&&o("prepare"),M++,d.e(e,function(){function n(){M--,"prepare"===A&&(E[e]||s(e),0===M&&0===x&&l())}try{t.call(null,r)}finally{n()}})}var n=T[e];if(!n)return d;var r=function(t){return n.hot.active?T[t]?(T[t].parents.indexOf(e)<0&&T[t].parents.push(e),n.children.indexOf(t)<0&&n.children.push(t)):L=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),L=[]),d(t)};for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&(h?Object.defineProperty(r,i,function(e){return{configurable:!0,enumerable:!0,get:function(){return d[e]},set:function(t){d[e]=t}}}(i)):r[i]=d[i]);return h?Object.defineProperty(r,"e",{enumerable:!0,value:t}):r.e=t,r}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,n){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n;else t._acceptedDependencies[e]=n},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:u,status:function(e){return e?void w.push(e):A},addStatusHandler:function(e){w.push(e)},removeStatusHandler:function(e){var t=w.indexOf(e);t>=0&&w.splice(t,1)},data:_[e]};return t}function o(e){A=e;for(var t=0;t<w.length;t++)w[t].call(null,e)}function a(e){var t=+e+""===e;return t?+e:e}function c(e,t){if("idle"!==A)throw new Error("check() is only allowed in idle status");"function"==typeof e?(O=!1,t=e):(O=e,t=t||function(e){if(e)throw e}),o("check"),n(function(e,n){if(e)return t(e);if(!n)return o("idle"),void t(null,null);U={},N={},E={};for(var r=0;r<n.c.length;r++)N[n.c[r]]=!0;g=n.h,o("prepare"),y=t,b={};var i=0;s(i),"prepare"===A&&0===M&&0===x&&l()})}function f(e,t){if(N[e]&&U[e]){U[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(b[n]=t[n]);0===--x&&0===M&&l()}}function s(e){N[e]?(U[e]=!0,x++,t(e)):E[e]=!0}function l(){o("ready");var e=y;if(y=null,e)if(O)u(O,e);else{var t=[];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.push(a(n));e(null,t)}}function u(t,n){function r(e){for(var t=[e],n={},r=t.slice();r.length>0;){var o=r.pop(),e=T[o];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+o);if(0===o)return;for(var a=0;a<e.parents.length;a++){var c=e.parents[a],f=T[c];if(f.hot._declinedDependencies[o])return new Error("Aborted because of declined dependency: "+o+" in "+c);t.indexOf(c)>=0||(f.hot._acceptedDependencies[o]?(n[c]||(n[c]=[]),i(n[c],[o])):(delete n[c],t.push(c),r.push(c)))}}}return[t,n]}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==A)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(n=t,t={}):t&&"object"==typeof t?n=n||function(e){if(e)throw e}:(t={},n=n||function(e){if(e)throw e});var c={},f=[],s={};for(var l in b)if(Object.prototype.hasOwnProperty.call(b,l)){var u=a(l),p=r(u);if(!p){if(t.ignoreUnaccepted)continue;return o("abort"),n(new Error("Aborted because "+u+" is not accepted"))}if(p instanceof Error)return o("abort"),n(p);s[u]=b[u],i(f,p[0]);for(var u in p[1])Object.prototype.hasOwnProperty.call(p[1],u)&&(c[u]||(c[u]=[]),i(c[u],p[1][u]))}for(var h=[],v=0;v<f.length;v++){var u=f[v];T[u]&&T[u].hot._selfAccepted&&h.push({module:u,errorHandler:T[u].hot._selfAccepted})}o("dispose");for(var y=f.slice();y.length>0;){var u=y.pop(),O=T[u];if(O){for(var w={},x=O.hot._disposeHandlers,M=0;M<x.length;M++){var E=x[M];E(w)}_[u]=w,O.hot.active=!1,delete T[u];for(var M=0;M<O.children.length;M++){var U=T[O.children[M]];if(U){var N=U.parents.indexOf(u);N>=0&&U.parents.splice(N,1)}}}}for(var u in c)if(Object.prototype.hasOwnProperty.call(c,u))for(var O=T[u],j=c[u],M=0;M<j.length;M++){var I=j[M],N=O.children.indexOf(I);N>=0&&O.children.splice(N,1)}o("apply"),m=g;for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(e[u]=s[u]);var P=null;for(var u in c)if(Object.prototype.hasOwnProperty.call(c,u)){for(var O=T[u],j=c[u],S=[],v=0;v<j.length;v++){var I=j[v],E=O.hot._acceptedDependencies[I];S.indexOf(E)>=0||S.push(E)}for(var v=0;v<S.length;v++){var E=S[v];try{E(c)}catch(H){P||(P=H)}}}for(var v=0;v<h.length;v++){var C=h[v],u=C.module;L=[u];try{d(u)}catch(H){if("function"==typeof C.errorHandler)try{C.errorHandler(H)}catch(H){P||(P=H)}else P||(P=H)}}return P?(o("fail"),n(P)):(o("idle"),void n(null,f))}function d(t){if(T[t])return T[t].exports;var n=T[t]={exports:{},id:t,loaded:!1,hot:i(t),parents:L,children:[]};return e[t].call(n.exports,n,n.exports,r(t)),n.loaded=!0,n.exports}var p=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){f(e,t),p&&p(e,t)};var h=!1;try{Object.defineProperty({},"x",{get:function(){}}),h=!0}catch(v){}var y,b,g,O=!0,m="1491bb95473388013ae1",_={},L=[],w=[],A="idle",x=0,M=0,E={},U={},N={},T={};return d.m=e,d.c=T,d.p="/static/",d.h=function(){return m},r(0)(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(2),o=(r(i),n(3)),a=(r(o),n(5));r(a);n(7)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=document.createElement("canvas");e.id="GameOfLife",e.height=495,e.width=500,document.body.appendChild(e)}();t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Life=t.lifeGeneration=void 0;var i=n(4),o=r(i),a=t.lifeGeneration=o["default"].GenerateArray(o["default"].LIFE_AMOUNT),c=o["default"].GenerateArray(o["default"].LIFE_AMOUNT),f=0,s=document.querySelector("#count");s.innerHTML=f;var l=function(e,t){for(var n=0,r=-1;r<2;r++)for(var i=-1;i<2;i++)if(0!=r||0!=i){var c=e+r,f=t+i;c=c<0?o["default"].LIFE_AMOUNT-1:c>o["default"].LIFE_AMOUNT-1?0:c,f=f<0?o["default"].LIFE_AMOUNT-1:f>o["default"].LIFE_AMOUNT-1?0:f,n+=a[c][f]?1:0}return n};t.Life=function(){for(var e=0;e<o["default"].LIFE_AMOUNT;++e)for(var t=0;t<o["default"].LIFE_AMOUNT;++t){var n=l(e,t);c[e][t]=3==n||c[e][t],c[e][t]=(2==n||3==n)&&c[e][t]}for(var r=0;r<o["default"].LIFE_AMOUNT;r++)for(var i=0;i<o["default"].LIFE_AMOUNT;i++)a[r][i]=c[r][i];f++,s.innerHTML=f}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={LIFE_AMOUNT:50,POINT_SIZE:10,GenerateArray:function(e){for(var t=new Array(e),n=0;n<e;++n)t[n]=new Array(e);return t},CANVAS:"#GameOfLife",LBL_COUNTER:"#count"};t["default"]=n},function(e,t,n){"use strict";var r=n(3),i=n(6),o=document.querySelector("#init"),a=document.querySelector("#step"),c=document.querySelector("#start"),f=document.querySelector("#stop");f.classList.add("hide"),c.disabled=!0,a.disabled=!0;var s=void 0,l=function(){window.clearInterval(s)};o.onclick=function(){c.disabled=!1,a.disabled=!1,l(),(0,i.InitFill)(),(0,i.Paint)()},a.onclick=function(){l(),(0,r.Life)(),(0,i.Paint)()},c.onclick=function(){o.disabled=!0,a.disabled=!0,c.classList.add("hide"),f.classList.remove("hide"),s=setInterval(function(){(0,r.Life)(),(0,i.Paint)()},300)},f.onclick=function(){o.disabled=!1,a.disabled=!1,f.classList.add("hide"),c.classList.remove("hide"),l()}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Paint=t.InitFill=void 0;var i=n(4),o=r(i),a=n(3);t.InitFill=function(){document.querySelector(o["default"].LBL_COUNTER).innerHTML="1";for(var e=0;e<o["default"].LIFE_AMOUNT;++e)for(var t=0;t<o["default"].LIFE_AMOUNT;++t)a.lifeGeneration[e][t]=Math.random()>=.5},t.Paint=function(){var e=document.querySelector(o["default"].CANVAS),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.beginPath();for(var n=0;n<o["default"].LIFE_AMOUNT;++n)for(var r=0;r<o["default"].LIFE_AMOUNT;++r)a.lifeGeneration[n][r]&&(t.rect(n*o["default"].POINT_SIZE,r*o["default"].POINT_SIZE-5,10,10),t.fill())}},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.id,r,""]]);var i=n(10)(r,{});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(8,function(){var t=n(8);"string"==typeof t&&(t=[[e.id,t,""]]),i(t)}),e.hot.dispose(function(){i()})},function(e,t,n){t=e.exports=n(9)(),t.push([e.id,"body{margin:0;padding:0;height:100%;width:100%}canvas{display:block;margin:100px auto;border:1px solid #000}.buttons-center{text-align:center}.buttons-center>button{background-color:#00c4f5;width:200px;height:70px}.hide{visibility:hidden;display:none}.show{visibility:visible;display:inline-block}.center{text-align:center}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(s(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],c=i[2],f=i[3],s={css:a,media:c,sourceMap:f};n[o]?n[o].parts.push(s):t.push(n[o]={id:o,parts:[s]})}return t}function o(e,t){var n=y(),r=O[O.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),O.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=O.indexOf(e);t>=0&&O.splice(t,1)}function c(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function f(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function s(e,t){var n,r,i;if(t.singleton){var o=g++;n=b||(b=c(t)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=f(t),r=d.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(t),r=u.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,O=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var c=n[a],f=p[c.id];f.refs--,o.push(f)}if(e){var s=i(e);r(s,t)}for(var a=0;a<o.length;a++){var f=o[a];if(0===f.refs){for(var l=0;l<f.parts.length;l++)f.parts[l]();delete p[f.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);
//# sourceMappingURL=bundle.js.map