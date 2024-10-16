(function(){"use strict";var e={8167:function(e,t,o){var a=o(3751),r=o(641);const s={id:"app"};function n(e,t,o,a,n,i){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(l)])}var i={name:"App"},l=o(6262);const d=(0,l.A)(i,[["render",n]]);var c=d,u=o(5220),p=o(33);const m=e=>((0,r.Qi)("data-v-08b014c8"),e=e(),(0,r.jt)(),e),g={class:"news-selection-page"},h={class:"main-content"},k={class:"news-content"},f=m((()=>(0,r.Lk)("h1",null,"Новости для вас",-1))),v={class:"news-grid"},w=m((()=>(0,r.Lk)("div",{class:"news-image"},null,-1))),b={class:"news-details"},L=["onClick"];function y(e,t,o,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("TagsList"),u=(0,r.g2)("router-link"),m=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",g,[(0,r.bF)(l),(0,r.Lk)("div",h,[(0,r.bF)(d),(0,r.Lk)("div",k,[f,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),placeholder:"Поиск по тегу"},null,512),[[a.Jo,n.searchQuery]]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.search&&i.search(...e))},"Поиск"),(0,r.bF)(c,{onTagSelected:i.fetchNewsByTag},null,8,["onTagSelected"]),n.isEditorOrAdmin?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"/create-post"},{default:(0,r.k6)((()=>[(0,r.eW)("Создать новость")])),_:1})):(0,r.Q3)("",!0),(0,r.Lk)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.newsList,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"news-card",key:e.id},[w,(0,r.Lk)("div",b,[(0,r.Lk)("h3",null,[(0,r.bF)(u,{to:"/news/"+e.id},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.name),1)])),_:2},1032,["to"])]),(0,r.Lk)("p",null,(0,p.v_)(e.description),1)]),n.isEditorOrAdmin?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"#"},{default:(0,r.k6)((()=>[(0,r.Lk)("button",{onClick:t=>i.deletePost(e.id)},"Delete",8,L)])),_:2},1024)):(0,r.Q3)("",!0)])))),128))])])]),(0,r.bF)(m)])}o(4114);const E=e=>((0,r.Qi)("data-v-5ac617c2"),e=e(),(0,r.jt)(),e),_={class:"header"},F={class:"header-content"},C=E((()=>(0,r.Lk)("h1",null,"Мои Новости",-1)));function P(e,t,o,a,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",_,[(0,r.Lk)("div",F,[C,(0,r.Lk)("nav",null,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/my-magazines"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/latest-news"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1}),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(i,{key:0,to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Регистрация")])),_:1})),n.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(i,{key:1,to:"/profile",class:"account-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Мой аккаунт")])),_:1})):(0,r.Q3)("",!0),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("button",{key:2,onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},"Выйти")):(0,r.Q3)("",!0)])])])}var I=o(4335);const T=I.A.create({baseURL:"http://localhost:8080/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});function X(e){let t=null;if(document.cookie&&""!==document.cookie){const o=document.cookie.split(";");for(let a=0;a<o.length;a++){const r=o[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}}return t}T.interceptors.request.use((e=>{if(!e.url.includes("/posts")){const t=localStorage.getItem("authToken");t&&(e.headers.Authorization=`Token ${t}`)}return e}),(e=>Promise.reject(e)));var S={getNews(){return console.log("Получение новостей"),T.get("/posts")},getUserProfile(){return console.log("Получение профиля"),T.get("/users/profile/")},login(e){console.log("Отправка данных для входа:",e);const t=X("csrftoken");return T.post("/login/",e,{headers:{"X-CSRFToken":t}})}},U={name:"Header",data(){return{userProfile:null}},mounted(){const e=localStorage.getItem("authToken");this.isLoggedIn=!!e,e?(S.defaults.headers.common["Authorization"]=`Bearer ${e}`,S.getUserProfile().then((e=>{this.userProfile=e.data})).catch((e=>{console.error("Ошибка при загрузке профиля:",e)}))):console.log("Пользователь не авторизован.")},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},logout(){localStorage.removeItem("authToken"),Oo.push({path:"/"}).then((()=>{window.location.reload()}))}}};const A=(0,l.A)(U,[["render",P],["__scopeId","data-v-5ac617c2"]]);var Q=A;const W=e=>((0,r.Qi)("data-v-00b101d0"),e=e(),(0,r.jt)(),e),$={class:"footer"},z={class:"footer-content"},j=W((()=>(0,r.Lk)("a",{href:"mailto:your-email@example.com"},"Контакты",-1)));function q(e,t,o,a,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("footer",$,[(0,r.Lk)("div",z,[(0,r.bF)(i,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("О нас")])),_:1}),(0,r.bF)(i,{to:"/help"},{default:(0,r.k6)((()=>[(0,r.eW)("Помощь")])),_:1}),j])])}var V={name:"Footer"};const J=(0,l.A)(V,[["render",q],["__scopeId","data-v-00b101d0"]]);var N=J;const O=e=>((0,r.Qi)("data-v-dce1eb9a"),e=e(),(0,r.jt)(),e),x={class:"sidebar"},H=O((()=>(0,r.Lk)("h3",null,"Мои новости",-1))),D=(0,r.Fv)("<h4 data-v-dce1eb9a>Избранные теги</h4><ul data-v-dce1eb9a><li data-v-dce1eb9a>Спорт</li><li data-v-dce1eb9a>Музыка</li><li data-v-dce1eb9a>Кино</li><li data-v-dce1eb9a>Наука</li></ul><h4 data-v-dce1eb9a>Местные новости</h4><ul data-v-dce1eb9a><li data-v-dce1eb9a>Москва</li><li data-v-dce1eb9a>Липецк</li><li data-v-dce1eb9a>Воронеж</li><li data-v-dce1eb9a>Пермь</li></ul>",4),M={key:0},K={key:1},R={key:2},B=O((()=>(0,r.Lk)("li",null,"New York Times",-1))),Y=O((()=>(0,r.Lk)("li",null,"Биография",-1))),G=O((()=>(0,r.Lk)("li",null,"Esquire",-1))),Z=O((()=>(0,r.Lk)("li",null,"Elle",-1))),ee=[B,Y,G,Z];function te(e,t,o,a,s,n){return(0,r.uX)(),(0,r.CE)("aside",x,[H,(0,r.Lk)("nav",null,[D,n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("h4",M,"Мои журналы")):(0,r.Q3)("",!0),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("h4",K,"Зарегистрируйтесь для получения доступа к журналам")),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("ul",R,ee)):(0,r.Q3)("",!0)])])}var oe={name:"Sidebar",methods:{isLoggedIn(){return!!localStorage.getItem("authToken")}}};const ae=(0,l.A)(oe,[["render",te],["__scopeId","data-v-dce1eb9a"]]);var re=ae,se={name:"NewsSelectionPage",components:{Sidebar:re,Footer:N,Header:Q},data(){return{newsList:[],searchQuery:"",userProfile:null,isEditorOrAdmin:!1}},created(){this.fetchUserProfile(),this.fetchNews()},watch:{"$route.query.q":{immediate:!0,handler(e){e?(this.searchQuery=e,this.fetchNewsByTag(e)):this.fetchNews()}}},methods:{async fetchUserProfile(){const e=localStorage.getItem("authToken");if(e){console.log("Fetching user profile with token:",e);try{const e=await S.getUserProfile();this.userProfile=e.data,console.log(this.userProfile.role),"Admin"!==this.userProfile.role&&"Editor"!==this.userProfile.role||(this.isEditorOrAdmin=!0)}catch(t){console.error("Ошибка при загрузке профиля:",t)}}else console.log("Пользователь не авторизован.")},isLoggedIn(){return!!localStorage.getItem("authToken")},async fetchNews(){try{const e=await S.getNews();this.newsList=e.data,console.log("Fetched news: ",e.data),this.newsList.forEach((e=>{console.log("News ID:",e.id)}))}catch(e){console.error("Error fetching news:",e)}},async fetchNewsByTag(e){try{const t=await S.get(`/posts/tag/${e}/`);this.newsList=t.data,console.log("Fetched news by tag: ",t.data)}catch(t){console.error("Error fetching news by tag:",t)}},search(){Oo.push({path:"/",query:{q:this.searchQuery}})},async deletePost(e){try{await S.delete(`/posts/${e}/`),await this.fetchNews()}catch(t){console.error("Error deleting post:",t)}}}};const ne=(0,l.A)(se,[["render",y],["__scopeId","data-v-08b014c8"]]);var ie=ne;const le=e=>((0,r.Qi)("data-v-493e9256"),e=e(),(0,r.jt)(),e),de={class:"registration-page"},ce={class:"registration-form"},ue=le((()=>(0,r.Lk)("h2",null,"Регистрация",-1))),pe={class:"form-group"},me=le((()=>(0,r.Lk)("label",{for:"name"},"Имя пользователя",-1))),ge={class:"form-group"},he=le((()=>(0,r.Lk)("label",{for:"surname"},"Фамилия пользователя",-1))),ke={class:"patronymic"},fe=le((()=>(0,r.Lk)("label",{for:"username"},"Отчество пользователя",-1))),ve={class:"form-group"},we=le((()=>(0,r.Lk)("label",{for:"login"},"Логин",-1))),be={class:"form-group"},Le=le((()=>(0,r.Lk)("label",{for:"email"},"Почта",-1))),ye={class:"form-group"},Ee=le((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),_e={class:"form-group"},Fe=le((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль",-1))),Ce={class:"form-group"},Pe={key:0,class:"password-match"},Ie={key:1,class:"password-no-match"},Te=["disabled"],Xe=le((()=>(0,r.Lk)("div",{class:"form-group"},[(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль")],-1))),Se={class:"form-group"},Ue={for:"confirmPassword"},Ae={class:"form-group"};function Qe(e,t,o,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",de,[(0,r.Lk)("div",ce,[ue,(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,a.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",pe,[me,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[a.Jo,n.name]])]),(0,r.Lk)("div",ge,[he,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"surname","onUpdate:modelValue":t[1]||(t[1]=e=>n.surname=e),required:""},null,512),[[a.Jo,n.surname]])]),(0,r.Lk)("div",ke,[fe,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"patronymic","onUpdate:modelValue":t[2]||(t[2]=e=>n.patronymic=e),required:""},null,512),[[a.Jo,n.patronymic]])]),(0,r.Lk)("div",ve,[we,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"login","onUpdate:modelValue":t[3]||(t[3]=e=>n.login=e),required:""},null,512),[[a.Jo,n.login]])]),(0,r.Lk)("div",be,[Le,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>n.email=e),required:""},null,512),[[a.Jo,n.email]])]),(0,r.Lk)("div",ye,[Ee,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password=e),required:""},null,512),[[a.Jo,n.password]])]),(0,r.Lk)("div",_e,[Fe,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[6]||(t[6]=e=>n.confirmPassword=e),required:""},null,512),[[a.Jo,n.confirmPassword]])]),(0,r.Lk)("div",Ce,[n.passwordsMatch?((0,r.uX)(),(0,r.CE)("p",Pe,"Пароли совпадают")):((0,r.uX)(),(0,r.CE)("p",Ie,"Пароли не совпадают"))]),(0,r.Lk)("button",{type:"submit",disabled:!n.passwordsMatch},"Зарегистрироваться",8,Te),Xe,(0,r.Lk)("div",Se,[(0,r.Lk)("label",Ue,[(0,r.eW)("Есть аккаунт? "),(0,r.bF)(l,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Авторизироваться")])),_:1})])]),(0,r.Lk)("div",Ae,[(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var We={name:"Registration",components:{Footer:N},data(){return{name:"",surname:"",patronymic:"",login:"",email:"",password:"",confirmPassword:"",passwordsMatch:!0}},watch:{password(){this.checkPasswordsMatch()},confirmPassword(){this.checkPasswordsMatch()}},methods:{checkPasswordsMatch(){this.passwordsMatch=this.password===this.confirmPassword},isLoggedIn(){return!!localStorage.getItem("authToken")},async register(){try{const e=await I.A.post("api/register/",{name:this.name,surname:this.surname,patronymic:this.patronymic,mail:this.email,login:this.login,password:this.password,confirm_password:this.confirmPassword});console.log("User registered:",e.data),localStorage.setItem("authToken",e.data.token),await Oo.push({path:"/"}),window.location.reload()}catch(e){console.error("Error registering user:",e)}}}};const $e=(0,l.A)(We,[["render",Qe],["__scopeId","data-v-493e9256"]]);var ze=$e;const je=e=>((0,r.Qi)("data-v-1d33100c"),e=e(),(0,r.jt)(),e),qe={class:"login-page"},Ve={class:"login-form"},Je=je((()=>(0,r.Lk)("h2",null,"Вход",-1))),Ne={class:"form-group"},Oe=je((()=>(0,r.Lk)("label",{for:"username"},"Логин",-1))),xe={class:"form-group"},He=je((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),De=je((()=>(0,r.Lk)("button",{type:"submit"},"Войти",-1))),Me={class:"form-group"},Ke={for:"signup"},Re={class:"form-group"};function Be(e,t,o,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",qe,[(0,r.Lk)("div",Ve,[Je,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,a.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,r.Lk)("div",Ne,[Oe,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),required:""},null,512),[[a.Jo,n.username]])]),(0,r.Lk)("div",xe,[He,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),required:""},null,512),[[a.Jo,n.password]])]),De,(0,r.Lk)("div",Me,[(0,r.Lk)("label",Ke,[(0,r.eW)("Нет аккаунта? "),(0,r.bF)(l,{to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Зарегистрироваться")])),_:1})])]),(0,r.Lk)("div",Re,[(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var Ye={name:"LoginPage",data(){return{username:"",password:""}},components:{Footer:N},methods:{getCookie(e){let t=null;if(document.cookie&&""!==document.cookie){const o=document.cookie.split(";");for(let a=0;a<o.length;a++){const r=o[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}}return t},async login(){try{console.log("Запуск скрипта..."),I.A.defaults.headers.common["X-CSRFToken"]=this.getCookie("csrftoken"),console.log("Получение заголовка...");const e=S.login({username:this.username,password:this.password});return console.log("Получение ответа от сервера..."),localStorage.setItem("authToken",e.data.token),I.A.defaults.headers.common["Authorization"]=`Token ${e.data.token}`,console.log("Токен:",localStorage.getItem("authToken")),await Oo.push({path:"/"}),window.location.reload(),e}catch(e){console.error("Ошибка при входе в аккаунт:",e.response?e.response.data:e.message)}}}};const Ge=(0,l.A)(Ye,[["render",Be],["__scopeId","data-v-1d33100c"]]);var Ze=Ge;const et={class:"tags-page"},tt={class:"tags-container"},ot=["onClick"];function at(e,t,o,a,s,n){const i=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",et,[(0,r.Lk)("div",tt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.tags,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,p.C4)(["tag",{selected:s.selectedTag===e}]),key:t,onClick:t=>n.selectTag(e)},(0,p.v_)(e),11,ot)))),128))]),(0,r.bF)(i)])}var rt={name:"Tags",components:{Footer:N},data(){return{tags:[],selectedTag:null}},async mounted(){try{const e=await S.get("/tags/");this.tags=e.data}catch(e){console.error("Error fetching tags:",e)}},methods:{selectTag(e){this.selectedTag=e}}};const st=(0,l.A)(rt,[["render",at],["__scopeId","data-v-6758ce90"]]);var nt=st;const it={class:"page-container"},lt={class:"main-content"},dt={class:"magazines-list"},ct={key:0},ut=["href"];function pt(e,t,o,a,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",it,[(0,r.bF)(i),(0,r.Lk)("div",lt,[(0,r.bF)(l),(0,r.Lk)("div",dt,[(0,r.Lk)("div",null,[(0,r.Lk)("h1",null,(0,p.v_)(s.news.name||"Loading..."),1),(0,r.Lk)("p",null,(0,p.v_)(s.news.description||"Loading description..."),1),s.news.file?((0,r.uX)(),(0,r.CE)("div",ct,[(0,r.Lk)("a",{href:s.news.file,target:"_blank"},"Download File",8,ut)])):(0,r.Q3)("",!0)])])]),(0,r.bF)(d)])}var mt={name:"NewsDetail",components:{Header:Q,Sidebar:re,Footer:N},created(){this.fetchNews()},props:{id:{type:String,required:!0}},data(){return{news:{}}},methods:{async fetchNews(){const e=this.$route.params.id;console.log("Fetching news with ID:",e);try{const t=await S.get(`/news/${e}/`);this.news=t.data}catch(t){console.error("Ошибка при загрузке новости:",t)}}}};const gt=(0,l.A)(mt,[["render",pt],["__scopeId","data-v-8e8de368"]]);var ht=gt;const kt={class:"page-container"},ft={class:"main-content"},vt={class:"magazines-list"};function wt(e,t,o,a,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",kt,[(0,r.bF)(i),(0,r.Lk)("div",ft,[(0,r.bF)(l),(0,r.Lk)("div",vt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.magazines,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"magazine-card",key:e.id},(0,p.v_)(e.name),1)))),128))])]),(0,r.bF)(d)])}var bt={name:"MagazinesPage",components:{Header:Q,Sidebar:re,Footer:N},data(){return{magazines:[{id:1,name:"New York Times"},{id:2,name:"Биография"},{id:3,name:"Esquire"},{id:4,name:"Elle"}]}}};const Lt=(0,l.A)(bt,[["render",wt],["__scopeId","data-v-71e174e7"]]);var yt=Lt;const Et=e=>((0,r.Qi)("data-v-2a48207b"),e=e(),(0,r.jt)(),e),_t={class:"profile"},Ft=Et((()=>(0,r.Lk)("h1",null,"Мой профиль",-1))),Ct={class:"avatar"},Pt=Et((()=>(0,r.Lk)("div",{class:"avatar-placeholder"},"+",-1))),It={class:"form-group"},Tt=Et((()=>(0,r.Lk)("label",{for:"email"},"e-mail",-1))),Xt={class:"form-group"},St=Et((()=>(0,r.Lk)("label",{for:"first_name"},"Имя",-1))),Ut={class:"form-group"},At=Et((()=>(0,r.Lk)("label",{for:"last_name"},"Фамилия",-1))),Qt=Et((()=>(0,r.Lk)("button",{type:"submit"},"Сохранить данные",-1))),Wt=Et((()=>(0,r.Lk)("h2",null,"Смена пароля",-1))),$t={class:"form-group"},zt=Et((()=>(0,r.Lk)("label",{for:"new_password"},"Старый пароль",-1))),jt={class:"form-group"},qt=Et((()=>(0,r.Lk)("label",{for:"new_password"},"Новый пароль",-1))),Vt={class:"form-group"},Jt=Et((()=>(0,r.Lk)("label",{for:"confirm_password"},"Повтор пароля",-1))),Nt=Et((()=>(0,r.Lk)("button",{type:"submit"},"Изменить пароль",-1))),Ot={key:0},xt={key:1};function Ht(e,t,o,s,n,i){const l=(0,r.g2)("Header-wide"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.Lk)("div",_t,[Ft,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,a.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",Ct,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.uploadAvatar&&i.uploadAvatar(...e))},"Добавить аватар"),Pt]),(0,r.Lk)("div",It,[Tt,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.user.email=e),id:"email",readonly:""},null,512),[[a.Jo,n.user.email]])]),(0,r.Lk)("div",Xt,[St,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.user.first_name=e),id:"first_name"},null,512),[[a.Jo,n.user.first_name]])]),(0,r.Lk)("div",Ut,[At,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.user.last_name=e),id:"last_name"},null,512),[[a.Jo,n.user.last_name]])]),Qt],32),Wt,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,a.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,r.Lk)("div",$t,[zt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password.old=e),id:"new_password"},null,512),[[a.Jo,n.password.old]])]),(0,r.Lk)("div",jt,[qt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=e=>n.password.new=e),id:"new_password"},null,512),[[a.Jo,n.password.new]])]),(0,r.Lk)("div",Vt,[Jt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>n.password.confirm=e),id:"confirm_password"},null,512),[[a.Jo,n.password.confirm]])]),Nt,n.error?((0,r.uX)(),(0,r.CE)("p",Ot,(0,p.v_)(n.error),1)):(0,r.Q3)("",!0),n.success?((0,r.uX)(),(0,r.CE)("p",xt,(0,p.v_)(n.success),1)):(0,r.Q3)("",!0)],32)]),(0,r.bF)(d)],64)}const Dt={class:"header-wide"},Mt={class:"header-content"};function Kt(e,t,o,a,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",Dt,[(0,r.Lk)("div",Mt,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/journals"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/today"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})])])}var Rt={name:"HeaderWide"};const Bt=(0,l.A)(Rt,[["render",Kt],["__scopeId","data-v-4b598fd8"]]);var Yt=Bt,Gt={name:"account",components:{HeaderWide:Yt,Footer:N},data(){return{user:{email:"",first_name:"",last_name:"",date_of_birth:""},password:{new:"",confirm:"",old:""},error:null,success:null}},created(){this.fetchProfile()},methods:{async fetchProfile(){try{const e=await S.get("/api/profile/");this.user=e.data}catch(e){console.error("Error fetching profile:",e)}},async updateProfile(){try{await S.put("/api/profile/",this.user),alert("Данные профиля обновлены")}catch(e){console.error("Error updating profile:",e)}},async changePassword(){if(this.password.new===this.password.confirm)try{const e=await S.post("/api/change-password/",{new_password:this.password.new,confirm_password:this.password.confirm,old_password:this.password.old});this.success=e.data.success,this.error=null}catch(e){this.error=e.response.data.error,this.success=null,console.error("Error changing password:",e)}else alert("Пароли не совпадают")},uploadAvatar(){}}};const Zt=(0,l.A)(Gt,[["render",Ht],["__scopeId","data-v-2a48207b"]]);var eo=Zt;const to=e=>((0,r.Qi)("data-v-c4e5ec5a"),e=e(),(0,r.jt)(),e),oo={class:"page-container"},ao={class:"main-content"},ro={class:"content"},so=to((()=>(0,r.Lk)("h2",null,"Создание публикации",-1))),no={class:"form-group"},io=to((()=>(0,r.Lk)("label",{for:"title"},"Заголовок:",-1))),lo={class:"form-group"},co=to((()=>(0,r.Lk)("label",{for:"content"},"Текст публикации:",-1))),uo={class:"form-group"},po=to((()=>(0,r.Lk)("label",{for:"preview"},"Превью:",-1))),mo={class:"form-group"},go=to((()=>(0,r.Lk)("label",{for:"tags"},"Теги:",-1))),ho=["value"],ko=to((()=>(0,r.Lk)("button",{type:"submit"},"Опубликовать",-1)));function fo(e,t,o,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",oo,[(0,r.bF)(l),(0,r.Lk)("div",ao,[(0,r.bF)(d),(0,r.Lk)("div",ro,[so,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,a.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",no,[io,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.title=e),required:""},null,512),[[a.Jo,n.title]])]),(0,r.Lk)("div",lo,[co,(0,r.bo)((0,r.Lk)("textarea",{id:"content","onUpdate:modelValue":t[1]||(t[1]=e=>n.content=e),required:""},null,512),[[a.Jo,n.content]])]),(0,r.Lk)("div",uo,[po,(0,r.Lk)("input",{type:"file",id:"preview",onChange:t[2]||(t[2]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32)]),(0,r.Lk)("div",mo,[go,(0,r.bo)((0,r.Lk)("select",{id:"tags","onUpdate:modelValue":t[3]||(t[3]=e=>n.selectedTag=e)},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.tags,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,ho)))),128))],512),[[a.u1,n.selectedTag]])]),ko],32)])]),(0,r.bF)(c)])}var vo={name:"CreatePostPage",components:{Header:Q,Sidebar:re,Footer:N},data(){return{title:"",content:"",selectedTag:"",tags:["Спорт","Музыка","Кино","Наука","Москва","Липецк","Воронеж","Пермь"]}},created(){this.$route.params.id&&this.fetchPost()},methods:{handleFileUpload(e){},async submitForm(){this.$route.params.id?await this.updatePost():await this.createPost()},async createPost(){try{await S.post("/api/posts/",{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error creating post:",e)}},async fetchPost(){try{const e=await S.get(`/posts/${this.$route.params.id}/`);this.post=e.data}catch(e){console.error("Error fetching post:",e)}},async updatePost(){try{await S.put(`/api/posts/${this.$route.params.id}/`,{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error updating post:",e)}}}};const wo=(0,l.A)(vo,[["render",fo],["__scopeId","data-v-c4e5ec5a"]]);var bo=wo;const Lo=e=>((0,r.Qi)("data-v-22b56a0d"),e=e(),(0,r.jt)(),e),yo={class:"page-container"},Eo={class:"main-content"},_o={class:"content"},Fo=Lo((()=>(0,r.Lk)("h2",null,"Добавить редактора",-1))),Co={class:"form-group"},Po=Lo((()=>(0,r.Lk)("label",{for:"name"},"Л:",-1))),Io={class:"form-group"},To=Lo((()=>(0,r.Lk)("label",{for:"email"},"Почта:",-1))),Xo={class:"form-group"},So=Lo((()=>(0,r.Lk)("label",{for:"magazines"},"Журналы:",-1))),Uo=["value"],Ao=Lo((()=>(0,r.Lk)("button",{type:"submit"},"Добавить",-1))),Qo=Lo((()=>(0,r.Lk)("h2",null,"Список редакторов",-1))),Wo=Lo((()=>(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Редакторы"),(0,r.Lk)("th",null,"Журналы"),(0,r.Lk)("th",null,"e-mail"),(0,r.Lk)("th",null,"Удалить")])],-1))),$o=["onClick"];function zo(e,t,o,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",yo,[(0,r.bF)(l),(0,r.Lk)("div",Eo,[(0,r.bF)(d),(0,r.Lk)("div",_o,[Fo,(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,a.D$)(((...e)=>i.addEditor&&i.addEditor(...e)),["prevent"]))},[(0,r.Lk)("div",Co,[Po,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.newEditor.login=e),required:""},null,512),[[a.Jo,n.newEditor.login]])]),(0,r.Lk)("div",Io,[To,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.newEditor.email=e),required:""},null,512),[[a.Jo,n.newEditor.email]])]),(0,r.Lk)("div",Xo,[So,(0,r.bo)((0,r.Lk)("select",{id:"magazines","onUpdate:modelValue":t[2]||(t[2]=e=>n.newEditor.magazines=e),multiple:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.magazines,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,Uo)))),128))],512),[[a.u1,n.newEditor.magazines]])]),Ao],32),Qo,(0,r.Lk)("table",null,[Wo,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.editors,((e,t)=>((0,r.uX)(),(0,r.CE)("tr",{key:t},[(0,r.Lk)("td",null,(0,p.v_)(t+1)+". "+(0,p.v_)(e.name),1),(0,r.Lk)("td",null,(0,p.v_)(e.magazines.join(", ")),1),(0,r.Lk)("td",null,(0,p.v_)(e.email),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:e=>i.removeEditor(t)},"Удалить",8,$o)])])))),128))])])])]),(0,r.bF)(c)])}var jo={name:"ManageEditorsPage",components:{Header:Q,Sidebar:re,Footer:N},data(){return{newEditor:{name:"",email:"",magazines:[]},magazines:["7 дней","Elle","New York Times","Биография","Esquire"],editors:[{name:"Петров Иван В.",email:"petrov12@mail.ru",magazines:["7 дней","Elle"]}],users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await S.get("/users/");this.users=e.data}catch(e){console.error("Error fetching users:",e)}},async deleteUser(e){try{await S.delete(`/users/${e}/`),await this.fetchUsers()}catch(t){console.error("Error deleting user:",t)}},async addEditor(){try{await S.post("/api/editors/",{name:this.newEditor.name,email:this.newEditor.email,magazines:this.newEditor.magazines}),this.newEditor.name="",this.newEditor.email="",this.newEditor.magazines=[],await this.fetchUsers()}catch(e){console.error("Error adding editor:",e)}},async removeEditor(e){const t=this.editors[e];try{await S.delete(`/api/editors/${t.email}/`),this.editors.splice(e,1)}catch(o){console.error("Error removing editor:",o)}}}};const qo=(0,l.A)(jo,[["render",zo],["__scopeId","data-v-22b56a0d"]]);var Vo=qo;const Jo=[{path:"/",component:ie,name:ie},{path:"/signup",component:ze,name:ze},{path:"/login",component:Ze,name:Ze},{path:"/choose-tags",component:nt,name:nt},{path:"/news/:id",component:ht,name:ht},{path:"/magazines",component:yt,name:yt},{path:"/profile",component:eo,name:eo},{path:"/create-post",component:bo,name:bo},{path:"/admin",component:Vo,name:Vo}],No=(0,u.aE)({history:(0,u.LA)(),base:"static/",routes:Jo});var Oo=No;const xo=(0,a.Ef)(c);xo.use(Oo),xo.mount("#app")}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,a,r,s){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||n>=s)&&Object.keys(o.O).every((function(e){return o.O[e](a[l])}))?a.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,n=a[0],i=a[1],l=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(t&&t(a);d<n.length;d++)s=n[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(8167)}));a=o.O(a)})();
//# sourceMappingURL=app.aaece6f3.js.map