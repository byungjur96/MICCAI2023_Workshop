(function(){"use strict";var e={480:function(e,t,n){var a=n(9242),i=n(3396),o=n(7139),r=n.p+"img/logo.64c0713b.png";const s=(0,i._)("br",null,null,-1),d={id:"title"},c=(0,i._)("img",{src:r,alt:""},null,-1),l={id:"contents"};function u(e,t,n,a,r,u){const f=(0,i.up)("router-link"),m=(0,i.up)("router-view"),h=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{id:"introduction",class:(0,o.C_)({"home-nav":"Home"===this.$data.page})},[(0,i._)("div",{class:(0,o.C_)(["big-title",{"big-title-off":"Home"!==this.$data.page}]),style:(0,o.j5)({backgroundPosition:"0 "+r.offsetY+"px"})},[(0,i._)("hr",{class:(0,o.C_)(["title-deco",{"hide-description":"Home"!==this.$data.page}])},null,2),(0,i._)("div",{id:"intro-title",class:(0,o.C_)({"hide-description":"Home"!==this.$data.page})},"MedAGI",2),(0,i._)("hr",{class:(0,o.C_)(["title-deco",{"hide-description":"Home"!==this.$data.page}])},null,2),(0,i._)("div",{class:(0,o.C_)(["workshop-description",{"hide-description":"Home"!==this.$data.page}])},[(0,i.Uk)(" MICCAI 2023 1st International Workshop on"),s,(0,i.Uk)(" Foundation Models for General Medical AI ")],2),(0,i._)("div",{class:(0,o.C_)(["workshop-time",{"hide-description":"Home"!==this.$data.page}])}," October 12, 2023 AM 8:00-11:30",2)],6)],2),(0,i._)("div",{id:"navigation",class:(0,o.C_)({"fixed-navigation":"Home"!==this.$data.page})},[(0,i._)("div",d,[(0,i.Wm)(f,{to:"/",tag:"img"},{default:(0,i.w5)((()=>[c])),_:1})]),(0,i._)("div",{onClick:t[0]||(t[0]=(...e)=>u.openMenuBtn&&u.openMenuBtn(...e)),id:"menu"},[(0,i._)("div",{class:(0,o.C_)(u.sideBtnStyle)},null,2),(0,i._)("div",{class:(0,o.C_)(u.sideBtnStyle)},null,2)]),(0,i._)("nav",{id:"tab-box",class:(0,o.C_)(u.showMenuBar)},[(0,i.Wm)(f,{to:"/",class:(0,o.C_)(["navigation-tab",{selectedTab:""===this.$data.page}]),onClick:u.changeMenuBtn},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1},8,["class","onClick"]),(0,i.Wm)(f,{to:"/organization",class:(0,o.C_)(["navigation-tab",{"selected-tab":"Organization"===this.$data.page}]),onClick:u.changeMenuBtn},{default:(0,i.w5)((()=>[(0,i.Uk)("Organization")])),_:1},8,["onClick","class"]),(0,i.Wm)(f,{to:"/program",class:(0,o.C_)(["navigation-tab",{"selected-tab":"Program"==this.$data.page}]),onClick:u.changeMenuBtn},{default:(0,i.w5)((()=>[(0,i.Uk)("Program")])),_:1},8,["onClick","class"]),(0,i.Wm)(f,{to:"/keynote",class:(0,o.C_)(["navigation-tab",{"selected-tab":"Keynote"==this.$data.page}]),onClick:u.changeMenuBtn},{default:(0,i.w5)((()=>[(0,i.Uk)("Keynote")])),_:1},8,["onClick","class"]),(0,i.Wm)(f,{to:"/call-for-papers",class:(0,o.C_)(["navigation-tab",{"selected-tab":"Call For Papers"==this.$data.page}]),onClick:u.changeMenuBtn},{default:(0,i.w5)((()=>[(0,i.Uk)("Call For Papers")])),_:1},8,["onClick","class"]),(0,i.Wm)(f,{to:"/sponsors",class:(0,o.C_)(["navigation-tab",{"selected-tab":"Sponsors"==this.$data.page}]),onClick:u.changeMenuBtn},{default:(0,i.w5)((()=>[(0,i.Uk)("Sponsors")])),_:1},8,["onClick","class"])],2)],2),(0,i._)("div",l,[(0,i.Wm)(m),(0,i.Wm)(h)])],64)}var f=n.p+"img/miccai2023-logo.5326d68b.png";const m=e=>((0,i.dD)("data-v-f9c546fe"),e=e(),(0,i.Cn)(),e),h={id:"footer"},p=m((()=>(0,i._)("div",{id:"logos"},[(0,i._)("img",{src:f,class:"logo",alt:""})],-1))),g=m((()=>(0,i._)("div",{id:"copyright"},"© 2023 1st International Workshop on Foundation Models for General Medical AI (MedAGI 2023)",-1))),v=[p,g];function b(e,t,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",h,v)}var k={name:"Footer"},y=n(89);const _=(0,y.Z)(k,[["render",b],["__scopeId","data-v-f9c546fe"]]);var C=_,w={name:"Home",components:{Footer:C},computed:{sideBtnStyle:function(){return this.$data.isSideOpened?{"side-menu-close":!0}:{"side-menu-open":!0}},showMenuBar:function(){return this.$data.isSideOpened?{"show-menu-bar":!0}:{"hide-menu-bar":!0}}},methods:{openMenuBtn:function(){this.$data.isSideOpened=!this.$data.isSideOpened},changeMenuBtn:function(){this.$data.isSideOpened=!1}},mounted(){document.title="MedAGI","Home"!==this.$data.page&&(this.$data.offsetY=-1*screen.height/2),window.addEventListener("scroll",(()=>{if("Home"===this.$data.page){let e=document.getElementById("navigation").offsetHeight;this.$data.offsetY=-1*Math.min(window.scrollY,screen.height)/2,this.$data.hideNavBar=screen.height-window.scrollY>1.5*e}else this.$data.offsetY=-1*screen.height/2}))},watch:{$route(e,t){this.$data.page=e.name,window.scrollTo(0,0),"Home"===e.name&&(this.$data.offsetY=0)}},data(){return{page:"",offsetY:0,isSideOpened:!1,hideNavBar:!1}}};const M=(0,y.Z)(w,[["render",u]]);var $=M,I=n(2483);const O={id:"home"},A=(0,i.uE)('<div id="workshop-description" data-v-6315779c><h1 data-v-6315779c>Workshop Description</h1><div class="main-title-deco" data-v-6315779c></div><div class="description" data-v-6315779c> In the context of medical image analysis, existing AI solutions are carefully designed and evaluated upon one specific dataset, which is difficult to transfer to another task or handle datasets curated from different medical centers. However, data modalities and task formulation vary in real clinical practices across hospitals and institutions. It results in increasing attention to a general model to tackle different medical scenarios. Precisely, a universal AI model with excellent generalization ability for processing other medical image modalities to handle a variety of medical AI tasks is termed general medical AI.<br data-v-6315779c><br data-v-6315779c> In computer vision domain, large-scale vision-language models or foundation models, e.g., CLIP, INTERN, and ALIGN, have shown amazing capabilities in visual recognition tasks, text-image generation, text-image retrieval, and high-level multi-modal multi-step reasoning. The outstanding generalization power of foundation models in new domains and tasks opens the door for zero-shot (or few-shot) visual recognition tasks: image classification, object detection, and segmentation. Despite the encouraging success in the computer vision domain, adopting foundation models in the medical domain is still in the early stage.<br data-v-6315779c><br data-v-6315779c> This workshop is dedicated to addressing the current medical AI systems and discussing opportunities for generalizing learning systems across multiple unseen tasks and domains </div></div><div id="contact" data-v-6315779c><h1 data-v-6315779c>Contact</h1><div class="main-title-deco" data-v-6315779c></div><div class="contact" data-v-6315779c> If you have any inquires, please e-mail us at : <a href="mailto:miccai.MedAGI@gmail.com" class="email" data-v-6315779c>miccai.MedAGI@gmail.com</a></div></div>',2),B=[A];function S(e,t){return(0,i.wg)(),(0,i.iD)("div",O,B)}const H={},P=(0,y.Z)(H,[["render",S],["__scopeId","data-v-6315779c"]]);var E=P;const T=[{path:"/",name:"Home",component:E},{path:"/organization",name:"Organization",component:()=>n.e(443).then(n.bind(n,8350))},{path:"/program",name:"Program",component:()=>n.e(762).then(n.bind(n,762))},{path:"/keynote",name:"Keynote",component:()=>n.e(437).then(n.bind(n,437))},{path:"/call-for-papers",name:"Call For Papers",component:()=>n.e(9).then(n.bind(n,9))},{path:"/sponsors",name:"Sponsors",component:()=>n.e(234).then(n.bind(n,8445))}],j=(0,I.p7)({history:(0,I.r5)(),routes:T});var x=j,N=n(65),F=(0,N.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)($).use(F).use(x).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var r=1/0;for(l=0;l<e.length;l++){a=e[l][0],i=e[l][1],o=e[l][2];for(var s=!0,d=0;d<a.length;d++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[d])}))?a.splice(d--,1):(s=!1,o<r&&(r=o));if(s){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{9:"8f9721fe",234:"272fd9b3",437:"e8499cba",443:"218b364e",762:"61ccbb80"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{9:"b28cde6a",234:"a8fddc76",437:"732e92cf",443:"7457ea9b",762:"fc09782d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="miccai2023:";n.l=function(a,i,o,r){if(e[a])e[a].push(i);else{var s,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+o){s=u;break}}s||(d=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=a),e[a]=[i];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var i=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),d&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=r,d.request=s,o.parentNode&&o.parentNode.removeChild(o),i(d)}};return o.onerror=o.onload=r,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){i=r[a],o=i.getAttribute("data-href");if(o===e||o===t)return i}},a=function(a){return new Promise((function(i,o){var r=n.miniCssF(a),s=n.p+r;if(t(r,s))return i();e(a,s,null,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={9:1,234:1,437:1,443:1,762:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=o);var r=n.p+n.u(t),s=new Error,d=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,i[1](s)}};n.l(r,d,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,r=a[0],s=a[1],d=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(d)var l=d(n)}for(t&&t(a);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},a=self["webpackChunkmiccai2023"]=self["webpackChunkmiccai2023"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(480)}));a=n.O(a)})();
//# sourceMappingURL=app.dc145be7.js.map