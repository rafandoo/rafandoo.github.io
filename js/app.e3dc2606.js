(function(){"use strict";var t={9202:function(t,e,a){var o=a(9242),n=a(4677),i=(a(343),a(5658)),s={main:{about_me:"Sobre mim",about:"Sobre",portfolio:"Portfólio",skills:"Habilidades",contact:"Contato"},elements:{show_contacts:"Mostrar contatos",name:"Nome",message:"Sua mensagem",send:"Enviar",phone:"Telefone",location:"Localização"},personal:{sub_title:"Estudante de Ciência da Computação",location:"Santa Catarina, Brasil",about_me_one:"Olá, meu nome é Rafael Camargo, tenho 21 anos e sou estudante de Ciência da Computação no Instituto Federal Catarinense (IFC).",about_me_two:"Minha paixão pela tecnologia e programação me impulsiona a buscar constantemente novos conhecimentos e enfrentar desafios estimulantes. Atualmente, estou concentrado em explorar profundamente o ecossistema Python e suas inúmeras possibilidades.",about_me_three:"Minha experiência abrange várias linguagens, incluindo Python, Java e PHP, além de estar familiarizado com o gerenciamento de bancos de dados MySQL e a utilização do Git para controle de versão. Estou ansioso para continuar a aprimorar minhas habilidades e contribuir para o mundo da tecnologia de maneiras significativas.",projects:{pomotimer:{title:"Pomotimer",subtitle:"Aplicação da técnica Pomodoro."},stroke_prediction:{title:"Predição de AVC",subtitle:"Rede Neural Arficial MLP, para predição de AVC."},speed_test:{title:"Speed Test",subtitle:"Speed Test CLI com persistência dos dados coletados."},eight_queens:{title:"8 rainhas",subtitle:"Algoritmo genético para solucionar o problema das 8 rainhas."},helpdesk:{title:"Help Desk",subtitle:"Sistema de Help Desk para suporte técnico."},cli_project:{title:"Projeto CLI",subtitle:"Automatização de criação de estrutura de projetos."}}}},l={main:{about_me:"About me",about:"About",portfolio:"Portfolio",skills:"Skills",contact:"Contact"},elements:{show_contacts:"Show contacts",name:"Name",message:"Your message",send:"Send",phone:"Phone",location:"Location"},personal:{sub_title:"Student of Computer Science",location:"Santa Catarina, Brazil",about_me_one:"Hello, my name is Rafael Camargo, I'm 21 years old, and I'm a Computer Science student at the Federal Institute of Santa Catarina (IFC).",about_me_two:"My passion for technology and programming drives me to constantly seek new knowledge and take on stimulating challenges. Currently, I'm focused on delving deep into the Python ecosystem and its numerous possibilities.",about_me_three:"My experience covers various languages, including Python, Java, and PHP, in addition to being familiar with MySQL database management and the use of Git for version control. I'm eager to continue enhancing my skills and contributing to the world of technology in meaningful ways.",projects:{pomotimer:{title:"Pomotimer",subtitle:"Pomodoro timer application."},stroke_prediction:{title:"Stroke Prediction",subtitle:"Artificial neural network for stroke prediction."},speed_test:{title:"Speed Test",subtitle:"Speed Test CLI with persistence of collected data."},eight_queens:{title:"8 queens",subtitle:"Genetic algorithm for solving the problem of the 8 queens."},helpdesk:{title:"Help Desk",subtitle:"Technical support system for help desk."},cli_project:{title:"CLI Project",subtitle:"Project creation automation."}}}};const r={pt_br:s,en:l};var c=(0,i.o)({locale:"pt_br",messages:r}),u=a(3396);const m={class:"main"},d={class:"main-content"},p={class:"tab-content active",id:"about"},g={class:"tab-content",id:"portfolio"},h={class:"tab-content",id:"skills"},b={class:"tab-content",id:"contact"};function _(t,e,a,o,n,i){const s=(0,u.up)("SideBar"),l=(0,u.up)("NavBar"),r=(0,u.up)("AboutMe"),c=(0,u.up)("PortfolioPage"),_=(0,u.up)("SkillsPage"),v=(0,u.up)("ContactMe");return(0,u.wg)(),(0,u.iD)("div",m,[(0,u.Wm)(s,{my_name:"Rafael Camargo",gravatar_email:"rafaelcamargo.inf@gmail.com",sub_title:t.$t("personal.sub_title"),email:"rafaelcamargo.inf@gmail.com",whats_link:"https://api.whatsapp.com/send/?phone=5547933000961&text=Ol%C3%A1!",phone:"+55 (47) 99300-0961",location:t.$t("personal.location"),github_link:"https://github.com/rafandoo",linkedin_link:"https://www.linkedin.com/in/rafaelcamargob",instagram_link:"https://www.instagram.com/rafandoo"},null,8,["sub_title","location"]),(0,u._)("div",d,[(0,u.Wm)(l),(0,u._)("div",p,[(0,u.Wm)(r,{about_me_paragraphs:[t.$t("personal.about_me_one"),t.$t("personal.about_me_two"),t.$t("personal.about_me_three")]},null,8,["about_me_paragraphs"])]),(0,u._)("div",g,[(0,u.Wm)(c,{projects:{PomoTimer:{title:t.$t("personal.projects.pomotimer.title"),subtitle:t.$t("personal.projects.pomotimer.subtitle"),category:["Web App","Vue.JS"],img:"img/pomotimer.webp",link:"https://rafandoo.github.io/pomotimer-lite/"},StrokePrediction:{title:t.$t("personal.projects.stroke_prediction.title"),subtitle:t.$t("personal.projects.stroke_prediction.subtitle"),category:["Machine Learning","Python"],img:"img/avc.webp",link:"https://github.com/rafandoo/predicao-avc"},SpeedTest:{title:t.$t("personal.projects.speed_test.title"),subtitle:t.$t("personal.projects.speed_test.subtitle"),category:["CLI","Python"],img:"img/speed-test.webp",link:"https://github.com/rafandoo/speedtest"},EightQueens:{title:t.$t("personal.projects.eight_queens.title"),subtitle:t.$t("personal.projects.eight_queens.subtitle"),category:["AI","Python"],img:"img/8-rainhas.webp",link:"https://github.com/rafandoo/8-rainhas"},HelpDesk:{title:t.$t("personal.projects.helpdesk.title"),subtitle:t.$t("personal.projects.helpdesk.subtitle"),category:["Web App","Laravel","PHP"],img:"img/helpdesk.webp",link:"https://github.com/rafandoo/HelpDeskRplus"},CLIProject:{title:t.$t("personal.projects.cli_project.title"),subtitle:t.$t("personal.projects.cli_project.subtitle"),category:["Python"],img:"img/project-cli.webp",link:"https://github.com/rafandoo/project-cli"}}},null,8,["projects"])]),(0,u._)("div",h,[(0,u.Wm)(_,{skills:{1.1:{title:"Python",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},1.2:{title:"Java",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},1.3:{title:"PHP",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},2.1:{title:"Git",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},3.1:{title:"Laravel",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"},3.2:{title:"Vue.JS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},3.3:{title:"Selenium",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"},4.1:{title:"MySQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},4.2:{title:"SQLite",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"}}},null,8,["skills"])]),(0,u._)("div",b,[(0,u.Wm)(v,{integration_link:"https://send.pageclip.co/PFWf4lo5hFmU0tI2gNrf7nsRJCeMGh8b/contact-gh-pages"})])])])}var v=a(7139);const f={class:"sidebar","data-sidebar":""},k={class:"sidebar-info"},w={class:"avatar-box"},y=["src","alt"],j={class:"info-content"},P={class:"name"},S={class:"title"},C={class:"info_more-btn","data-sidebar-btn":""},L={class:"sidebar-info_more"},$=(0,u._)("div",{class:"separator"},null,-1),z={class:"contacts-list"},A={class:"contact-item"},D={class:"icon-box"},q={class:"contact-info"},W=(0,u._)("p",{class:"contact-title"},"E-mail",-1),x=["href"],M={class:"contact-item"},O={class:"icon-box"},H={class:"contact-info"},I={class:"contact-title"},T=["href"],B={class:"contact-item"},E={class:"icon-box"},F={class:"contact-info"},Z={class:"contact-title"},N=(0,u._)("div",{class:"separator"},null,-1),J={class:"social-list"},R={class:"social-item"},V=["href"],G={class:"social-item"},Q=["href"],Y={class:"social-item"},K=["href"];function U(t,e,a,o,n,i){const s=(0,u.up)("ion-icon");return(0,u.wg)(),(0,u.iD)("aside",f,[(0,u._)("div",k,[(0,u._)("figure",w,[(0,u._)("img",{class:"avatar-picture",src:i.gravatar,alt:a.my_name,width:"80"},null,8,y)]),(0,u._)("div",j,[(0,u._)("h1",P,(0,v.zw)(a.my_name),1),(0,u._)("p",S,(0,v.zw)(a.sub_title),1)]),(0,u._)("button",C,[(0,u._)("span",null,(0,v.zw)(t.$t("elements.show_contacts")),1),(0,u.Wm)(s,{name:"chevron-down"})])]),(0,u._)("div",L,[$,(0,u._)("ul",z,[(0,u._)("li",A,[(0,u._)("div",D,[(0,u.Wm)(s,{name:"mail-outline"})]),(0,u._)("div",q,[W,(0,u._)("a",{href:"mailto:"+a.email,class:"contact-link",target:"_blank"},(0,v.zw)(a.email),9,x)])]),(0,u._)("li",M,[(0,u._)("div",O,[(0,u.Wm)(s,{name:"phone-portrait-outline"})]),(0,u._)("div",H,[(0,u._)("p",I,(0,v.zw)(t.$t("elements.phone")),1),(0,u._)("a",{href:a.whats_link,class:"contact-link",target:"_blank"},(0,v.zw)(a.phone),9,T)])]),(0,u._)("li",B,[(0,u._)("div",E,[(0,u.Wm)(s,{name:"location-outline"})]),(0,u._)("div",F,[(0,u._)("p",Z,(0,v.zw)(t.$t("elements.location")),1),(0,u._)("address",null,(0,v.zw)(a.location),1)])])]),N,(0,u._)("ul",J,[(0,u._)("li",R,[(0,u._)("a",{href:a.github_link,class:"social-link",target:"_blank"},[(0,u.Wm)(s,{name:"logo-github"})],8,V)]),(0,u._)("li",G,[(0,u._)("a",{href:a.linkedin_link,class:"social-link",target:"_blank"},[(0,u.Wm)(s,{name:"logo-linkedin"})],8,Q)]),(0,u._)("li",Y,[(0,u._)("a",{href:a.instagram_link,class:"social-link",target:"_blank"},[(0,u.Wm)(s,{name:"logo-instagram"})],8,K)])])])])}var X=a(9564),tt=a.n(X),et={name:"SideBar",props:["my_name","gravatar_email","sub_title","email","whats_link","phone","location","github_link","linkedin_link","instagram_link"],methods:{toggleSidebar(){const t=function(t){t.classList.toggle("active")},e=document.querySelector("[data-sidebar]"),a=document.querySelector("[data-sidebar-btn]");a.addEventListener("click",(function(){t(e)}))}},computed:{gravatar(){const t=tt()(this.gravatar_email.trim().toLowerCase());return`https://www.gravatar.com/avatar/${t}?s=200&d=retro`}},mounted(){this.toggleSidebar()}},at=a(89);const ot=(0,at.Z)(et,[["render",U]]);var nt=ot;const it={class:"navbar"},st={class:"navbar-list"},lt={class:"navbar-item"},rt={class:"navbar-link active",id:"about","data-bs-toggle":"tab"},ct={class:"navbar-item"},ut={class:"navbar-link",id:"portfolio","data-bs-toggle":"tab"},mt={class:"navbar-item"},dt={class:"navbar-link",id:"skills","data-bs-toggle":"tab"},pt={class:"navbar-item"},gt={class:"navbar-link",id:"contact","data-bs-toggle":"tab"},ht={class:"navbar-item"};function bt(t,e,a,o,n,i){const s=(0,u.up)("LanguageSwitch");return(0,u.wg)(),(0,u.iD)("nav",it,[(0,u._)("ul",st,[(0,u._)("li",lt,[(0,u._)("button",rt,(0,v.zw)(t.$t("main.about")),1)]),(0,u._)("li",ct,[(0,u._)("button",ut,(0,v.zw)(t.$t("main.portfolio")),1)]),(0,u._)("li",mt,[(0,u._)("button",dt,(0,v.zw)(t.$t("main.skills")),1)]),(0,u._)("li",pt,[(0,u._)("button",gt,(0,v.zw)(t.$t("main.contact")),1)]),(0,u._)("li",ht,[(0,u.Wm)(s)])])])}const _t={class:"language-switch"};function vt(t,e,a,o,n,i){const s=(0,u.up)("ion-icon");return(0,u.wg)(),(0,u.iD)("div",_t,[(0,u._)("button",{onClick:e[0]||(e[0]=(...t)=>i.toggleLanguage&&i.toggleLanguage(...t)),class:"language-button"},[(0,u.Wm)(s,{name:"earth-outline"})])])}var ft={data(){return{currentLanguage:"pt_br"}},methods:{changeLanguage(t){this.$i18n.locale=t},toggleLanguage(){this.currentLanguage="pt_br"===this.currentLanguage?"en":"pt_br",this.changeLanguage(this.currentLanguage)}}};const kt=(0,at.Z)(ft,[["render",vt],["__scopeId","data-v-2ba74e74"]]);var wt=kt,yt={name:"NavBar",methods:{changeTab(){let t=document.querySelectorAll(".tab-content"),e=document.querySelectorAll(".navbar-link");for(let a=0;a<e.length;a++)e[a].addEventListener("click",(function(){for(let a=0;a<t.length;a++)this.id===t[a].id?(t[a].classList.add("active"),e[a].classList.add("active")):(t[a].classList.remove("active"),e[a].classList.remove("active"))}))}},mounted(){this.changeTab()},components:{LanguageSwitch:wt}};const jt=(0,at.Z)(yt,[["render",bt]]);var Pt=jt;const St={class:"about","data-page":"about"},Ct={class:"h2 article-title"},Lt={class:"about-text"};function $t(t,e,a,o,n,i){return(0,u.wg)(),(0,u.iD)("article",St,[(0,u._)("h2",Ct,(0,v.zw)(t.$t("main.about_me")),1),(0,u._)("div",Lt,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(a.about_me_paragraphs,((t,e)=>((0,u.wg)(),(0,u.iD)("p",{key:e},(0,v.zw)(t),1)))),128))])])}var zt={name:"AboutMe",props:["about_me_paragraphs"]};const At=(0,at.Z)(zt,[["render",$t]]);var Dt=At;const qt={class:"portfolio","data-page":"portfolio"},Wt={class:"h2 article-title"},xt={class:"projects"},Mt={class:"project-list"},Ot=["href"],Ht={class:"project-img"},It={class:"project-item-icon-box"},Tt=["src"],Bt={class:"project-title"},Et={class:"project-categories"},Ft={class:"project-subtitle"};function Zt(t,e,a,o,n,i){const s=(0,u.up)("ion-icon");return(0,u.wg)(),(0,u.iD)("article",qt,[(0,u._)("h2",Wt,(0,v.zw)(t.$t("main.portfolio")),1),(0,u._)("div",xt,[(0,u._)("ul",Mt,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(a.projects,((t,e)=>((0,u.wg)(),(0,u.iD)("li",{class:"project-item",key:e},[(0,u._)("a",{href:t.link,target:"_blank"},[(0,u._)("figure",Ht,[(0,u._)("div",It,[(0,u.Wm)(s,{name:"eye-outline"})]),(0,u._)("img",{src:t.img,alt:"",loading:"lazy"},null,8,Tt)]),(0,u._)("h3",Bt,(0,v.zw)(t.title),1),(0,u._)("div",Et,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(t.category,((t,e)=>((0,u.wg)(),(0,u.iD)("span",{class:"project-category",key:e},(0,v.zw)(t),1)))),128))]),(0,u._)("p",Ft,(0,v.zw)(t.subtitle),1)],8,Ot)])))),128))])])])}var Nt={name:"PortfolioPage",props:["projects"]};const Jt=(0,at.Z)(Nt,[["render",Zt]]);var Rt=Jt;const Vt={class:"skills-page","data-page":"skills"},Gt={class:"h2 article-title"},Qt={class:"skills"},Yt={class:"skill-list"},Kt={class:"skill-logo"},Ut=["src"],Xt={class:"skill-title"};function te(t,e,a,o,n,i){return(0,u.wg)(),(0,u.iD)("article",Vt,[(0,u._)("h2",Gt,(0,v.zw)(t.$t("main.skills")),1),(0,u._)("div",Qt,[(0,u._)("ul",Yt,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(a.skills,((t,e)=>((0,u.wg)(),(0,u.iD)("li",{class:"skill-item",key:e},[(0,u._)("div",Kt,[(0,u._)("img",{src:t.logo,alt:"",loading:"lazy"},null,8,Ut)]),(0,u._)("span",Xt,(0,v.zw)(t.title),1)])))),128))])])])}var ee={name:"SkillsPage",props:["skills"]};const ae=(0,at.Z)(ee,[["render",te]]);var oe=ae;const ne={class:"contact","data-page":"contact"},ie={class:"h2 article-title"},se={class:"contact-form"},le=["action"],re={class:"input-wrapper"},ce=["placeholder"],ue=(0,u._)("input",{type:"email",name:"email",class:"form-input",placeholder:"E-mail",required:"","data-form-input":""},null,-1),me=["placeholder"];function de(t,e,a,o,n,i){const s=(0,u.up)("ion-icon");return(0,u.wg)(),(0,u.iD)("article",ne,[(0,u._)("header",null,[(0,u._)("h2",ie,(0,v.zw)(t.$t("main.contact")),1)]),(0,u._)("section",se,[(0,u._)("form",{action:a.integration_link,class:"form","data-form":"",method:"post"},[(0,u._)("div",re,[(0,u._)("input",{type:"text",name:"name",class:"form-input",placeholder:t.$t("elements.name"),required:"","data-form-input":""},null,8,ce),ue]),(0,u._)("textarea",{name:"message",class:"form-input",placeholder:t.$t("elements.message"),required:"","data-form-input":""},null,8,me),(0,u._)("button",{class:"form-btn",type:"submit",disabled:"","data-form-btn":"",onClick:e[0]||(e[0]=t=>i.showToast())},[(0,u.Wm)(s,{name:"paper-plane"}),(0,u._)("span",null,(0,v.zw)(t.$t("elements.send")),1)])],8,le)])])}var pe={name:"ContactMe",props:["integration_link"],setup(){const t=(0,n.pm)();return{toast:t}},methods:{ctrlForm(){const t=document.querySelector("[data-form]"),e=document.querySelectorAll("[data-form-input]"),a=document.querySelector("[data-form-btn]");for(let o=0;o<e.length;o++)e[o].addEventListener("input",(function(){t.checkValidity()?a.removeAttribute("disabled"):a.setAttribute("disabled","")}))},showToast(){this.toast.success("Mensagem enviada com sucesso!",{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!1,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1})}},mounted(){this.ctrlForm()}};const ge=(0,at.Z)(pe,[["render",de]]);var he=ge,be={name:"App",components:{SideBar:nt,NavBar:Pt,AboutMe:Dt,PortfolioPage:Rt,SkillsPage:oe,ContactMe:he}};const _e=(0,at.Z)(be,[["render",_]]);var ve=_e;const fe=(0,o.ri)(ve),ke={transition:"Vue-Toastification__bounce",maxToasts:5,newestOnTop:!0};fe.use(c),fe.use(n.ZP,ke),fe.mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,i){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],i=t[u][2];for(var l=!0,r=0;r<o.length;r++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[r])}))?o.splice(r--,1):(l=!1,i<s&&(s=i));if(l){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,s=o[0],l=o[1],r=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(r)var u=r(a)}for(e&&e(o);c<s.length;c++)i=s[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},o=self["webpackChunkrafandoo"]=self["webpackChunkrafandoo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9202)}));o=a.O(o)})();
//# sourceMappingURL=app.e3dc2606.js.map