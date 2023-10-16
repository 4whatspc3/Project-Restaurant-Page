(()=>{"use strict";var e={975:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"#content {\n    grid-area: 3 / 2 / 4 / 3;\n    width: auto;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#content > div {\n    padding: 20px;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 60px;\n}\n\n.homeContainer {\n    width: 100%;\n    height: auto;\n    background-color: hsla(29, 51%, 10%, 0.5);\n}\n\n.homeContainer p:first-of-type {\n   font-size: 24px;\n   -webkit-text-stroke: 1px #A9846A;\n   font-weight: bold;\n   color: #ffffff;\n}\n\n.homeContainer img {\n    width: 400px;\n    height: auto;\n    object-fit: cover;\n    border-radius: 20px;\n}\n\n.homeContainer p:last-of-type {\n    text-align: center;\n    font-weight: bold;\n    font-size: 18px;\n    -webkit-text-stroke: 1px #A9846A;\n    color: #ffffff;\n }",""]);const i=a},426:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),c=n(645),a=n.n(c),i=n(667),s=n.n(i),l=new URL(n(728),n.b),d=a()(r());d.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var u=s()(l);d.push([e.id,`* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    height: 100%;\n    font-family: 'Roboto', system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\nbody {\n    height: 100%;\n    padding: 5px;\n    display: grid;\n    grid-template: 1fr 0.5fr 4fr / repeat(3, 1fr);\n    gap: 10px;\n    background-image: url(${u});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.titleContainer {\n    grid-area: 1 / 2 / 2 / 3;\n    width: 100%;\n    height: auto;\n    border-radius: 20px;\n    background-color: hsla(29, 51%, 10%, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.titleContainer p {\n    text-align: center;\n    font-size: 60px;\n    font-weight: bold;\n    color: #ffffff;\n    -webkit-text-stroke: 1px #A9846A;\n}\n\n.btnContainer {\n    width: 100%;\n    height: auto;\n    grid-area: 2 / 2 / 3 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    gap: 20px;\n}\n\n[class^="btn0"] {\n    padding: 10px 34px;\n    text-align: center;\n    font-size: 15px;\n    font-weight: bold;\n    color: #ffffff;\n    background-color: #A9846A;\n    border: none;\n    border-top: 3px solid #654321;\n    border-radius: 5px;\n}\n\n[class^="btn0"]:hover {\n    background-color: #654321;\n}`,""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],l=o.base?s[0]+o.base:s[0],d=c[l]||0,u="".concat(l," ").concat(d);c[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),l=0;l<c.length;l++){var d=n(c[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},728:(e,t,n)=>{e.exports=n.p+"670bbcbae106588e51a9.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=n.p+"fff50819c311e0855a64.jpg",t=()=>{const{sectionOne:e}=(()=>{const e=document.createElement("ul");e.classList.add("sectionOne");const t=document.createElement("li");t.textContent="All sort of coffee:";const n=document.createElement("li");n.textContent="Espresso";const o=document.createElement("li");o.textContent="Capuccino";const r=document.createElement("li");return r.textContent="Mocha",e.append(t,n,o,r),{sectionOne:e}})(),{sectionTwo:t}=(()=>{const e=document.createElement("ul");e.classList.add("sectionTwo");const t=document.createElement("li");t.textContent="Exotic combinations:";const n=document.createElement("li");n.textContent="Roast chicken with coffee sauce";const o=document.createElement("li");o.textContent="Fish with a bit of powder coffee";const r=document.createElement("li");return r.textContent="Apple, banana and coffee",e.append(t,n,o,r),{sectionTwo:e}})(),{sectionThree:n}=(()=>{const e=document.createElement("ul");e.classList.add("sectionThree");const t=document.createElement("li");t.textContent="Cakes:";const n=document.createElement("li");n.textContent="Coffee cake";const o=document.createElement("li");o.textContent="Chocolate Coffee Cake";const r=document.createElement("li");return r.textContent="Moist Coffee Loaf Cake",e.append(t,n,o,r),{sectionThree:e}})(),o=document.createElement("div");o.classList.add("menuContainer");const r=document.createElement("p");return r.textContent="Our options",o.append(r,e,t,n),{menu:o,sectionOne:e,sectionTwo:t,sectionThree:n}};var o=n(379),r=n.n(o),c=n(795),a=n.n(c),i=n(569),s=n.n(i),l=n(565),d=n.n(l),u=n(216),p=n.n(u),f=n(589),m=n.n(f),h=n(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b=n(975),x={};x.styleTagTransform=m(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=p(),r()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals;const v=(()=>{const{title:n}=(()=>{const e=document.createElement("div");e.classList.add("titleContainer");const t=document.createElement("p");return t.textContent="That's Why Café!",e.append(t),{title:e}})(),{buttons:o}=(()=>{const e=document.createElement("div");e.classList.add("btnContainer");const t=["Home","Menu","Contact"];for(let n=0;n<3;n++){const o=document.createElement("button");o.classList.add(`btn0${n}`),o.textContent=t[n],e.append(o)}return{buttons:e}})(),{home:r}=(()=>{const t=document.createElement("div");t.classList.add("homeContainer");const n=document.createElement("p");n.textContent="Best coffee shop ever!";const o=document.createElement("img");o.setAttribute("src",e);const r=document.createElement("p");return r.textContent="All Sort of coffee and more! Bring your family, friends and neighbors!",t.append(n,o,r),{home:t}})(),{menu:c}=t(),{contact:a}=(()=>{const e=document.createElement("div");e.classList.add("contactContainer");const t=document.createElement("p");t.textContent="Contact Us";const n=document.createElement("p");n.textContent="30 3030-3030";const o=document.createElement("p");return o.textContent="cafe@coffee.com",e.append(t,n,o),{contact:e}})();return{title:n,buttons:o,home:r,menu:c,contact:a}})();document.querySelector("body").prepend(v.title,v.buttons);const y=document.querySelector("#content");y.append(v.home),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(e=>{y.replaceChildren(),e.target.matches(".btn00")&&y.append(v.home),e.target.matches(".btn01")&&y.append(v.menu),e.target.matches(".btn02")&&y.append(v.contact)}))}))})()})();