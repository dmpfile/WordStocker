!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function o(){chrome.storage.local.get(null,(function(e){var n=document.getElementById("list");if(n&&(n.innerHTML=""),0===Object.keys(e).length)(i=document.createElement("li")).textContent="保存されていません",null==n||n.appendChild(i);else for(var t=Object.values(e).toString().split(","),o=Object.keys(e),r=0;r<t.length;r++){var i;(i=document.createElement("li")).textContent=t[r],i.id=o[r],null==n||n.appendChild(i)}}))}Object.defineProperty(n,"__esModule",{value:!0}),t(1);var r=document.getElementById("display");null==r||r.addEventListener("click",o);var i=document.getElementById("clear");null==i||i.addEventListener("click",(function(){confirm("全件削除します。よろしいでしょうか？")&&(chrome.storage.local.clear(),o())}));var a=document.getElementById("output");null==a||a.addEventListener("click",(function(){chrome.storage.local.get(null,(function(e){if(0===Object.keys(e).length)alert("出力できる単語が登録されていません。");else{var n=Object.values(e).toString().split(",").map((function(e){return(e+",https://translate.google.co.jp/?hl=ja#view=home&op=translate&sl=auto&tl=ja&text="+e).split(",")}));t=n.join("\r\n"),o=new Uint8Array([239,187,191]),r=new Blob([o,t],{type:"text/csv"}),i=(window.URL||window.webkitURL).createObjectURL(r),a=document.createElement("a"),c=function(){var e=new Date,n=e.getFullYear(),t=e.getMonth(),o=e.getUTCDate(),r=e.getUTCHours()+9,i=e.getUTCSeconds(),a=e.getUTCMinutes();return""+n+t+o+"_"+r+a+i}(),a.download="Stocker_"+c+".csv",a.href=i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}var t,o,r,i,a,c}))}));var c=document.getElementById("toggle");null==c||c.addEventListener("click",(function(e){e.target.checked?(chrome.runtime.sendMessage("popup-state-true"),localStorage.setItem("state","popup-state-true")):(chrome.runtime.sendMessage("popup-state-false"),localStorage.setItem("state","popup-state-false"))}));var l=document.getElementById("list");null==l||l.addEventListener("click",(function(e){var n=e.target.textContent;null!=n&&"保存されていません"!==n&&navigator.clipboard.writeText(n)})),null==l||l.addEventListener("dblclick",(function(e){var n=e.target.id;chrome.storage.local.remove(n),o()})),window.onload=function(){var e=localStorage.getItem("state");if(void 0===e);else if("popup-state-true"===e){c.checked=!0}else{c.checked=!1}o()}},function(e,n,t){var o=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],l=n.base?i[0]+n.base:i[0],u=t[l]||0,s="".concat(l," ").concat(u);t[l]=u+1;var d=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:s,updater:h(p,n),references:1}),o.push(s)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var b=null,g=0;function h(e,n){var t,o,r;if(n.singleton){var i=g++;t=b||(b=u(n)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=u(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=l(e,n),u=0;u<t.length;u++){var s=c(t[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=i}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,'body{\n  width: 330px;\n  text-align: center;\n  margin: 30px;\n}\n\n.wrap{\n  margin-bottom: 20px;\n}\n\nh1{\n  color: rgb(82, 52, 29);\n  display: inline-block;\n  letter-spacing: 2px;\n  vertical-align: bottom;\n  margin: 0 5px 0 0;\n}\n\nul{\n  width: 200px;\n  margin: 0 auto;\n  padding: 0;\n  margin-bottom: 30px;\n  line-height: 25px;\n  letter-spacing: 1px;\n  text-align: left;\n}\n\nli{\n  list-style: decimal;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n#btn{\n  margin: 10px 0;\n}\n\nbutton{\n  color: #ffffff;\n  cursor: pointer;\n  background-color: rgb(222, 189, 150);\n  border: none;\n  border-radius: 5px;\n  margin: 0 6px;\n  padding: 4px 20px;\n}\n\n/* 参考：https://qiita.com/dojyorin/items/6b2893b3e46597948a43 */\ninput[type="checkbox"] {\n  display: none;\n}\n\ninput[type="checkbox"] + label#check{\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  color: #969696;\n  border: 1px solid #a3a3a3;\n  border-radius: 3px;\n  background-color: #ffffff;\n}\n\ninput[type="checkbox"]:checked + label#check{\n  border: 1px solid rgb(166, 204, 233);\n  background-color: rgb(166, 204, 233);\n}\n\ninput[type="checkbox"] + label#check::before {\n  content: "OFF";\n  position: absolute;\n  top: 3px;\n  left: auto;\n  right: 6px;\n}\n\ninput[type="checkbox"]:checked + label#check::before {\n  content: "ON";\n  position: absolute;\n  left: 4px;\n  right: auto;\n  color: #ffffff;\n}\n\ninput[type="checkbox"] + label#check > div {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 5px;\n  height: 14px;\n  border: 1px solid #a3a3a3;\n  border-radius: 3px;\n  background-color: #ffffff;\n  transition: 0.2s;\n}\n\ninput[type="checkbox"]:checked + label#check > div {\n  border: 1px solid transparent;\n  left: 30px;\n}',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}}]);