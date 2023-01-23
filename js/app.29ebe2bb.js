(function(){"use strict";var t={9080:function(t,a,e){var i=e(9242),o=e(3396);const n={class:"main-content"},s={class:"tab-content active",id:"about"},l={class:"tab-content",id:"port"};function c(t,a,e,i,c,r){const u=(0,o.up)("SideBar"),m=(0,o.up)("NavBar"),d=(0,o.up)("AboutMe"),p=(0,o.up)("PortfolioPage");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o.Wm)(u,{my_name:"Rafael Camargo",profile_picture:"https://avatars.githubusercontent.com/u/53565557?v=4",sub_title:"Estudante de Ciência da Computação",email:"rafaelcamargo.inf@gmail.com",whats_link:"https://api.whatsapp.com/send/?phone=5547933000961&text=Ol%C3%A1!",phone:"+55 (47) 99300-0961",location:"Santa Catarina, Brasil",github_link:"https://github.com/rafandoo",linkedin_link:"https://www.linkedin.com/in/rafaelcamargob",instagram_link:"https://www.instagram.com/rafandoo"}),(0,o._)("div",n,[(0,o.Wm)(m),(0,o._)("div",s,[(0,o.Wm)(d,{about_me_one:"Olá, meu nome é Rafael Camargo, tenho 20 anos e sou estudante de Ciência da Computação no Instituto Fereral Catarinense (IFC).",about_me_two:"Sou apaixonado por tecnologia e programação, e estou sempre em busca de novos conhecimentos e desafios. Atualmente estou focado em apreder sobre o eco-sistema python e suas possibilidades. Possuo conhecimentos em Python, Java, PHP, MySQL, Git, entre outros."})]),(0,o._)("div",l,[(0,o.Wm)(p)])])])}var r=e(7139);const u={class:"sidebar","data-sidebar":""},m={class:"sidebar-info"},d={class:"avatar-box"},p=["src","alt"],f={class:"info-content"},g={class:"name"},_={class:"title"},b={class:"info_more-btn","data-sidebar-btn":""},h=(0,o._)("span",null,"Mostrar contatos",-1),v={class:"sidebar-info_more"},k=(0,o._)("div",{class:"separator"},null,-1),w={class:"contacts-list"},y={class:"contact-item"},j={class:"icon-box"},P={class:"contact-info"},S=(0,o._)("p",{class:"contact-title"},"Email",-1),x=["href"],z={class:"contact-item"},C={class:"icon-box"},O={class:"contact-info"},W=(0,o._)("p",{class:"contact-title"},"Telefone",-1),A=["href"],L={class:"contact-item"},T={class:"icon-box"},B={class:"contact-info"},D=(0,o._)("p",{class:"contact-title"},"Localização",-1),E=(0,o._)("div",{class:"separator"},null,-1),M={class:"social-list"},q={class:"social-item"},J=["href"],Z={class:"social-item"},F=["href"],N={class:"social-item"},I=["href"];function R(t,a,e,i,n,s){const l=(0,o.up)("ion-icon");return(0,o.wg)(),(0,o.iD)("aside",u,[(0,o._)("div",m,[(0,o._)("figure",d,[(0,o._)("img",{class:"avatar-picture",src:e.profile_picture,alt:e.my_name,width:"80"},null,8,p)]),(0,o._)("div",f,[(0,o._)("h1",g,(0,r.zw)(e.my_name),1),(0,o._)("p",_,(0,r.zw)(e.sub_title),1)]),(0,o._)("button",b,[h,(0,o.Wm)(l,{name:"chevron-down"})])]),(0,o._)("div",v,[k,(0,o._)("ul",w,[(0,o._)("li",y,[(0,o._)("div",j,[(0,o.Wm)(l,{name:"mail-outline"})]),(0,o._)("div",P,[S,(0,o._)("a",{href:"mailto:"+e.email,class:"contact-link",target:"_blank"},(0,r.zw)(e.email),9,x)])]),(0,o._)("li",z,[(0,o._)("div",C,[(0,o.Wm)(l,{name:"phone-portrait-outline"})]),(0,o._)("div",O,[W,(0,o._)("a",{href:e.whats_link,class:"contact-link",target:"_blank"},(0,r.zw)(e.phone),9,A)])]),(0,o._)("li",L,[(0,o._)("div",T,[(0,o.Wm)(l,{name:"location-outline"})]),(0,o._)("div",B,[D,(0,o._)("address",null,(0,r.zw)(e.location),1)])])]),E,(0,o._)("ul",M,[(0,o._)("li",q,[(0,o._)("a",{href:e.github_link,class:"social-link",target:"_blank"},[(0,o.Wm)(l,{name:"logo-github"})],8,J)]),(0,o._)("li",Z,[(0,o._)("a",{href:e.linkedin_link,class:"social-link",target:"_blank"},[(0,o.Wm)(l,{name:"logo-linkedin"})],8,F)]),(0,o._)("li",N,[(0,o._)("a",{href:e.instagram_link,class:"social-link",target:"_blank"},[(0,o.Wm)(l,{name:"logo-instagram"})],8,I)])])])])}var H={name:"SideBar",props:["my_name","profile_picture","sub_title","email","whats_link","phone","location","github_link","linkedin_link","instagram_link"],methods:{toggleSidebar(){const t=function(t){t.classList.toggle("active")},a=document.querySelector("[data-sidebar]"),e=document.querySelector("[data-sidebar-btn]");e.addEventListener("click",(function(){t(a)}))}},mounted(){this.toggleSidebar()}},G=e(89);const K=(0,G.Z)(H,[["render",R]]);var Q=K;const V={class:"navbar"},Y=(0,o.uE)('<ul class="navbar-list"><li class="navbar-item"><button class="navbar-link active" id="about" data-bs-toggle="tab">Sobre</button></li><li class="navbar-item"><button class="navbar-link" id="port" data-bs-toggle="tab">Portfolio</button></li></ul>',1),U=[Y];function X(t,a,e,i,n,s){return(0,o.wg)(),(0,o.iD)("nav",V,U)}var $={name:"NavBar",methods:{changeTab(){let t=document.querySelectorAll(".tab-content"),a=document.querySelectorAll(".navbar-link");for(let e=0;e<a.length;e++)a[e].addEventListener("click",(function(){for(let e=0;e<t.length;e++)this.id===t[e].id?(t[e].classList.add("active"),a[e].classList.add("active")):(t[e].classList.remove("active"),a[e].classList.remove("active"))}))}},mounted(){this.changeTab()}};const tt=(0,G.Z)($,[["render",X]]);var at=tt;const et={class:"about","data-page":"about"},it=(0,o._)("h2",{class:"h2 article-title"},"Sobre mim",-1),ot={class:"about-text"},nt=(0,o.uE)('<section class="service" hidden><h3 class="h3 service-title">Minhas skills</h3><ul class="service-list"><li class="service-item"><div class="service-icon-box"></div><div class="service-content-box"><h4 class="h4 service-item-title">Web design</h4><p class="service-item-text"> The most modern and high-quality design made at a professional level. </p></div></li></ul></section>',1);function st(t,a,e,i,n,s){return(0,o.wg)(),(0,o.iD)("article",et,[it,(0,o._)("section",ot,[(0,o._)("p",null,(0,r.zw)(e.about_me_one),1),(0,o._)("p",null,(0,r.zw)(e.about_me_two),1)]),nt])}var lt={name:"AboutMe",props:["about_me_one","about_me_two"]};const ct=(0,G.Z)(lt,[["render",st]]);var rt=ct;const ut={class:"portfolio","data-page":"portfolio"},mt=(0,o._)("h2",{class:"h2 article-title"},"Portfolio",-1),dt={class:"projects"},pt={class:"project-list"},ft=["href"],gt={class:"project-img"},_t={class:"project-item-icon-box"},bt=["src"],ht={class:"project-title"},vt={class:"project-category"};function kt(t,a,e,i,n,s){const l=(0,o.up)("ion-icon");return(0,o.wg)(),(0,o.iD)("article",ut,[mt,(0,o._)("section",dt,[(0,o._)("ul",pt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.projects,((t,a)=>((0,o.wg)(),(0,o.iD)("li",{class:"project-item",key:a},[(0,o._)("a",{href:t.link,target:"_blank"},[(0,o._)("figure",gt,[(0,o._)("div",_t,[(0,o.Wm)(l,{name:"eye-outline"})]),(0,o._)("img",{src:t.img,alt:"",loading:"lazy"},null,8,bt)]),(0,o._)("h3",ht,(0,r.zw)(t.title),1),(0,o._)("p",vt,(0,r.zw)(t.category),1)],8,ft)])))),128))])])])}var wt={name:"PortfolioPage",data(){return{projects:[{title:"PomoTimer",category:"Aplicação web",img:"https://imgpile.com/images/dJryJg.jpg",link:"https://rafandoo.github.io/pomotimer-lite/"},{title:"Predição de AVC",category:"Inteligência artificial",img:"https://imgpile.com/images/dJznyN.jpg",link:"https://github.com/rafandoo/predicao-avc"},{title:"Speed Test",category:"Aplicação python django",img:"https://imgpile.com/images/dJz5Fj.jpg",link:"https://github.com/rafandoo/SpeedTestRplus"}]}}};const yt=(0,G.Z)(wt,[["render",kt]]);var jt=yt,Pt={name:"App",components:{SideBar:Q,NavBar:at,AboutMe:rt,PortfolioPage:jt},created(){}};const St=(0,G.Z)(Pt,[["render",c]]);var xt=St;(0,i.ri)(xt).mount("#app")}},a={};function e(i){var o=a[i];if(void 0!==o)return o.exports;var n=a[i]={exports:{}};return t[i](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(a,i,o,n){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],n=t[u][2];for(var l=!0,c=0;c<i.length;c++)(!1&n||s>=n)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(l=!1,n<s&&(s=n));if(l){t.splice(u--,1);var r=o();void 0!==r&&(a=r)}}return a}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,o,n]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,i){var o,n,s=i[0],l=i[1],c=i[2],r=0;if(s.some((function(a){return 0!==t[a]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(c)var u=c(e)}for(a&&a(i);r<s.length;r++)n=s[r],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},i=self["webpackChunkrafandoo"]=self["webpackChunkrafandoo"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(9080)}));i=e.O(i)})();
//# sourceMappingURL=app.29ebe2bb.js.map