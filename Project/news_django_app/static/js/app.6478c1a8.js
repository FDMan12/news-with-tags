(function(){"use strict";var e={4309:function(e,t,a){var o=a(3751),r=a(641);const s={id:"app"};function n(e,t,a,o,n,i){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(l)])}var i={name:"App"},l=a(6262);const d=(0,l.A)(i,[["render",n]]);var c=d,u=a(5220),p=a(33);const m=e=>((0,r.Qi)("data-v-656ecda2"),e=e(),(0,r.jt)(),e),g={class:"news-selection-page"},h={class:"main-content"},k={class:"news-content"},f=m((()=>(0,r.Lk)("h1",null,"Новости для вас",-1))),L={class:"news-grid"},w=m((()=>(0,r.Lk)("div",{class:"news-image"},null,-1))),v={class:"news-details"},b=["onClick"];function y(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("TagsList"),u=(0,r.g2)("router-link"),m=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",g,[(0,r.bF)(l),(0,r.Lk)("div",h,[(0,r.bF)(d),(0,r.Lk)("div",k,[f,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),placeholder:"Поиск по тегу"},null,512),[[o.Jo,n.searchQuery]]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.search&&i.search(...e))},"Поиск"),(0,r.bF)(c,{onTagSelected:i.fetchNewsByTag},null,8,["onTagSelected"]),i.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"/create-post"},{default:(0,r.k6)((()=>[(0,r.eW)("Создать новость")])),_:1})):(0,r.Q3)("",!0),(0,r.Lk)("div",L,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.newsList,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"news-card",key:e.id},[w,(0,r.Lk)("div",v,[(0,r.Lk)("h3",null,[(0,r.bF)(u,{to:{name:"NewsDetail",params:{id:e.id}}},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.title),1)])),_:2},1032,["to"])]),(0,r.Lk)("p",null,[(0,r.bF)(u,{to:{name:"NewsDetail",params:{id:e.id}}},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.description),1)])),_:2},1032,["to"])])]),i.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"#"},{default:(0,r.k6)((()=>[(0,r.Lk)("button",{onClick:t=>i.deletePost(e.id)},"Delete",8,b)])),_:2},1024)):(0,r.Q3)("",!0)])))),128))])])]),(0,r.bF)(m)])}a(4114);const E=e=>((0,r.Qi)("data-v-fa4e18fe"),e=e(),(0,r.jt)(),e),_={class:"header"},F={class:"header-content"},C=E((()=>(0,r.Lk)("h1",null,"Мои Новости",-1)));function P(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",_,[(0,r.Lk)("div",F,[C,(0,r.Lk)("nav",null,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/my-magazines"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/latest-news"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})]),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(i,{key:0,to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Регистрация")])),_:1})),n.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(i,{key:1,to:"/profile",class:"account-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Мой аккаунт")])),_:1})):(0,r.Q3)("",!0),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("button",{key:2,onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},"Выйти")):(0,r.Q3)("",!0)])])}var I=a(4335);const X=I.A.create({baseURL:"http://localhost:8080/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});X.interceptors.request.use((e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Token ${t}`),e}),(e=>Promise.reject(e)));var T={getNews(){return X.get("/news")},getUserProfile(){return X.get("/users/profile/")},login(e){return X.post("/login/",e)}},S={name:"Header",data(){return{userProfile:null}},mounted(){const e=localStorage.getItem("authToken");this.isLoggedIn=!!e,e?(T.defaults.headers.common["Authorization"]=`Bearer ${e}`,T.getUserProfile().then((e=>{this.userProfile=e.data})).catch((e=>{console.error("Ошибка при загрузке профиля:",e)}))):console.log("Пользователь не авторизован.")},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},logout(){localStorage.removeItem("authToken"),Ga.push({path:"/"}).then((()=>{window.location.reload()}))}}};const U=(0,l.A)(S,[["render",P],["__scopeId","data-v-fa4e18fe"]]);var Q=U;const A=e=>((0,r.Qi)("data-v-00b101d0"),e=e(),(0,r.jt)(),e),W={class:"footer"},z={class:"footer-content"},$=A((()=>(0,r.Lk)("a",{href:"mailto:your-email@example.com"},"Контакты",-1)));function j(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("footer",W,[(0,r.Lk)("div",z,[(0,r.bF)(i,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("О нас")])),_:1}),(0,r.bF)(i,{to:"/help"},{default:(0,r.k6)((()=>[(0,r.eW)("Помощь")])),_:1}),$])])}var q={name:"Footer"};const V=(0,l.A)(q,[["render",j],["__scopeId","data-v-00b101d0"]]);var J=V;const x=e=>((0,r.Qi)("data-v-a9c3f43e"),e=e(),(0,r.jt)(),e),H={class:"sidebar"},N=x((()=>(0,r.Lk)("h3",null,"Мои новости",-1))),O=x((()=>(0,r.Lk)("h4",null,"Избранные теги",-1))),M={key:0},D=x((()=>(0,r.Lk)("li",null,"Спорт",-1))),K=x((()=>(0,r.Lk)("li",null,"Музыка",-1))),B=x((()=>(0,r.Lk)("li",null,"Кино",-1))),Y=x((()=>(0,r.Lk)("li",null,"Наука",-1))),R=[D,K,B,Y],G=x((()=>(0,r.Lk)("h4",null,"Местные новости",-1))),Z={key:1},ee=x((()=>(0,r.Lk)("li",null,"Москва",-1))),te=x((()=>(0,r.Lk)("li",null,"Липецк",-1))),ae=x((()=>(0,r.Lk)("li",null,"Воронеж",-1))),oe=x((()=>(0,r.Lk)("li",null,"Пермь",-1))),re=[ee,te,ae,oe],se={key:2},ne={key:3},ie={key:4},le=x((()=>(0,r.Lk)("li",null,"New York Times",-1))),de=x((()=>(0,r.Lk)("li",null,"Биография",-1))),ce=x((()=>(0,r.Lk)("li",null,"Esquire",-1))),ue=x((()=>(0,r.Lk)("li",null,"Elle",-1))),pe=[le,de,ce,ue];function me(e,t,a,o,s,n){return(0,r.uX)(),(0,r.CE)("aside",H,[N,(0,r.Lk)("nav",null,[O,n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("ul",M,R)):(0,r.Q3)("",!0),G,n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("ul",Z,re)):(0,r.Q3)("",!0),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("h4",se,"Мои журналы")):(0,r.Q3)("",!0),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("h4",ne,"Зарегистрируйтесь для получения доступа к журналам")),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("ul",ie,pe)):(0,r.Q3)("",!0)])])}var ge={name:"Sidebar",methods:{isLoggedIn(){return!!localStorage.getItem("authToken")}}};const he=(0,l.A)(ge,[["render",me],["__scopeId","data-v-a9c3f43e"]]);var ke=he,fe={name:"NewsSelectionPage",components:{Sidebar:ke,Footer:J,Header:Q},data(){return{newsList:[],searchQuery:""}},created(){this.fetchNews()},watch:{"$route.query.q":{immediate:!0,handler(e){e?(this.searchQuery=e,this.fetchNewsByTag(e)):this.fetchNews()}}},async mounted(){console.log("Component mounted, fetching news...");const e=localStorage.getItem("authToken");if(e){T.defaults.headers.common["Authorization"]=`Bearer ${e}`;try{const e=await T.getUserProfile();this.userProfile=e.data}catch(t){console.error("Ошибка при загрузке профиля:",t)}}else console.log("Пользователь не авторизован.");try{const e=await T.get("/posts/");this.newsList=e.data}catch(t){console.error("Error fetching news:",t)}},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},async fetchNews(){try{const e=await T.get("/posts/");this.newsList=e.data}catch(e){console.error("Error fetching news:",e)}},async fetchNewsByTag(e){try{const t=await T.get(`/posts/tag/${e}/`);this.newsList=t.data}catch(t){console.error("Error fetching news by tag:",t)}},search(){Ga.push({path:"/",query:{q:this.searchQuery}})},async deletePost(e){try{await T.delete(`/posts/${e}/`),await this.fetchNews()}catch(t){console.error("Error deleting post:",t)}}}};const Le=(0,l.A)(fe,[["render",y],["__scopeId","data-v-656ecda2"]]);var we=Le;const ve=e=>((0,r.Qi)("data-v-e78018dc"),e=e(),(0,r.jt)(),e),be={class:"registration-page"},ye={class:"registration-form"},Ee=ve((()=>(0,r.Lk)("h2",null,"Регистрация",-1))),_e={class:"form-group"},Fe=ve((()=>(0,r.Lk)("label",{for:"name"},"Имя пользователя",-1))),Ce={class:"form-group"},Pe=ve((()=>(0,r.Lk)("label",{for:"surname"},"Фамилия пользователя",-1))),Ie={class:"patronymic"},Xe=ve((()=>(0,r.Lk)("label",{for:"username"},"Отчество пользователя",-1))),Te={class:"form-group"},Se=ve((()=>(0,r.Lk)("label",{for:"login"},"Логин",-1))),Ue={class:"form-group"},Qe=ve((()=>(0,r.Lk)("label",{for:"email"},"Почта",-1))),Ae={class:"form-group"},We=ve((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),ze={class:"form-group"},$e=ve((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль",-1))),je={class:"form-group"},qe={key:0,class:"password-match"},Ve={key:1,class:"password-no-match"},Je=["disabled"],xe=ve((()=>(0,r.Lk)("div",{class:"form-group"},[(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль")],-1))),He={class:"form-group"},Ne={for:"confirmPassword"};function Oe(e,t,a,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",be,[(0,r.Lk)("div",ye,[Ee,(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,o.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",_e,[Fe,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[o.Jo,n.name]])]),(0,r.Lk)("div",Ce,[Pe,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"surname","onUpdate:modelValue":t[1]||(t[1]=e=>n.surname=e),required:""},null,512),[[o.Jo,n.surname]])]),(0,r.Lk)("div",Ie,[Xe,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"patronymic","onUpdate:modelValue":t[2]||(t[2]=e=>n.patronymic=e),required:""},null,512),[[o.Jo,n.patronymic]])]),(0,r.Lk)("div",Te,[Se,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"login","onUpdate:modelValue":t[3]||(t[3]=e=>n.login=e),required:""},null,512),[[o.Jo,n.login]])]),(0,r.Lk)("div",Ue,[Qe,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>n.email=e),required:""},null,512),[[o.Jo,n.email]])]),(0,r.Lk)("div",Ae,[We,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),(0,r.Lk)("div",ze,[$e,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[6]||(t[6]=e=>n.confirmPassword=e),required:""},null,512),[[o.Jo,n.confirmPassword]])]),(0,r.Lk)("div",je,[n.passwordsMatch?((0,r.uX)(),(0,r.CE)("p",qe,"Пароли совпадают")):((0,r.uX)(),(0,r.CE)("p",Ve,"Пароли не совпадают"))]),(0,r.Lk)("button",{type:"submit",disabled:!n.passwordsMatch},"Зарегистрироваться",8,Je),xe,(0,r.Lk)("div",He,[(0,r.Lk)("label",Ne,[(0,r.eW)("Есть аккаунт? "),(0,r.bF)(l,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Авторизироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var Me={name:"Registration",components:{Footer:J},data(){return{name:"",surname:"",patronymic:"",login:"",email:"",password:"",confirmPassword:"",passwordsMatch:!0}},watch:{password(){this.checkPasswordsMatch()},confirmPassword(){this.checkPasswordsMatch()}},methods:{checkPasswordsMatch(){this.passwordsMatch=this.password===this.confirmPassword},isLoggedIn(){return!!localStorage.getItem("authToken")},async register(){try{const e=await I.A.post("api/register/",{name:this.name,surname:this.surname,patronymic:this.patronymic,mail:this.email,login:this.login,password:this.password,confirm_password:this.confirmPassword});console.log("User registered:",e.data),localStorage.setItem("authToken",e.data.token),await Ga.push({path:"/"}),window.location.reload()}catch(e){console.error("Error registering user:",e)}}}};const De=(0,l.A)(Me,[["render",Oe],["__scopeId","data-v-e78018dc"]]);var Ke=De;const Be=e=>((0,r.Qi)("data-v-ce47a2fe"),e=e(),(0,r.jt)(),e),Ye={class:"login-page"},Re={class:"login-form"},Ge=Be((()=>(0,r.Lk)("h2",null,"Вход",-1))),Ze={class:"form-group"},et=Be((()=>(0,r.Lk)("label",{for:"username"},"Логин",-1))),tt={class:"form-group"},at=Be((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),ot=Be((()=>(0,r.Lk)("button",{type:"submit"},"Войти",-1))),rt={class:"form-group"},st={for:"signup"};function nt(e,t,a,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Ye,[(0,r.Lk)("div",Re,[Ge,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,r.Lk)("div",Ze,[et,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),required:""},null,512),[[o.Jo,n.username]])]),(0,r.Lk)("div",tt,[at,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),ot,(0,r.Lk)("div",rt,[(0,r.Lk)("label",st,[(0,r.eW)("Нет аккаунта? "),(0,r.bF)(l,{to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Зарегистрироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var it={name:"LoginPage",data(){return{username:"",password:""}},components:{Footer:J},methods:{async login(){try{const e=await T.login({username:this.username,password:this.password});localStorage.setItem("authToken",e.data.token),await Ga.push({path:"/"}),window.location.reload()}catch(e){console.error("Ошибка при входе в аккаунт:",e)}}}};const lt=(0,l.A)(it,[["render",nt],["__scopeId","data-v-ce47a2fe"]]);var dt=lt;const ct={class:"tags-page"},ut={class:"tags-container"},pt=["onClick"];function mt(e,t,a,o,s,n){const i=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",ct,[(0,r.Lk)("div",ut,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.tags,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,p.C4)(["tag",{selected:s.selectedTag===e}]),key:t,onClick:t=>n.selectTag(e)},(0,p.v_)(e),11,pt)))),128))]),(0,r.bF)(i)])}var gt={name:"Tags",components:{Footer:J},data(){return{tags:[],selectedTag:null}},async mounted(){try{const e=await T.get("/tags/");this.tags=e.data}catch(e){console.error("Error fetching tags:",e)}},methods:{selectTag(e){this.selectedTag=e}}};const ht=(0,l.A)(gt,[["render",mt],["__scopeId","data-v-6758ce90"]]);var kt=ht;const ft={class:"page-container"},Lt={class:"main-content"},wt={class:"magazines-list"},vt={key:0},bt=["href"];function yt(e,t,a,o,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",ft,[(0,r.bF)(i),(0,r.Lk)("div",Lt,[(0,r.bF)(l),(0,r.Lk)("div",wt,[(0,r.Lk)("div",null,[(0,r.Lk)("h1",null,(0,p.v_)(s.news.name),1),(0,r.Lk)("p",null,(0,p.v_)(s.news.description),1),s.news.file?((0,r.uX)(),(0,r.CE)("div",vt,[(0,r.Lk)("a",{href:s.news.file,target:"_blank"},"Download File",8,bt)])):(0,r.Q3)("",!0)])])]),(0,r.bF)(d)])}var Et={name:"MagazinesPage",components:{Header:Q,Sidebar:ke,Footer:J},props:{id:{type:String,required:!0}},data(){return{news:{}}},async mounted(){try{const e=await T.get(`/posts/${this.id}/`);this.news=e.data}catch(e){console.error("Error fetching news detail:",e)}}};const _t=(0,l.A)(Et,[["render",yt],["__scopeId","data-v-7a6bf7b8"]]);var Ft=_t;const Ct={class:"page-container"},Pt={class:"main-content"},It={class:"magazines-list"};function Xt(e,t,a,o,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Ct,[(0,r.bF)(i),(0,r.Lk)("div",Pt,[(0,r.bF)(l),(0,r.Lk)("div",It,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.magazines,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"magazine-card",key:e.id},(0,p.v_)(e.name),1)))),128))])]),(0,r.bF)(d)])}var Tt={name:"MagazinesPage",components:{Header:Q,Sidebar:ke,Footer:J},data(){return{magazines:[{id:1,name:"New York Times"},{id:2,name:"Биография"},{id:3,name:"Esquire"},{id:4,name:"Elle"}]}}};const St=(0,l.A)(Tt,[["render",Xt],["__scopeId","data-v-71e174e7"]]);var Ut=St;const Qt=e=>((0,r.Qi)("data-v-2a48207b"),e=e(),(0,r.jt)(),e),At={class:"profile"},Wt=Qt((()=>(0,r.Lk)("h1",null,"Мой профиль",-1))),zt={class:"avatar"},$t=Qt((()=>(0,r.Lk)("div",{class:"avatar-placeholder"},"+",-1))),jt={class:"form-group"},qt=Qt((()=>(0,r.Lk)("label",{for:"email"},"e-mail",-1))),Vt={class:"form-group"},Jt=Qt((()=>(0,r.Lk)("label",{for:"first_name"},"Имя",-1))),xt={class:"form-group"},Ht=Qt((()=>(0,r.Lk)("label",{for:"last_name"},"Фамилия",-1))),Nt=Qt((()=>(0,r.Lk)("button",{type:"submit"},"Сохранить данные",-1))),Ot=Qt((()=>(0,r.Lk)("h2",null,"Смена пароля",-1))),Mt={class:"form-group"},Dt=Qt((()=>(0,r.Lk)("label",{for:"new_password"},"Старый пароль",-1))),Kt={class:"form-group"},Bt=Qt((()=>(0,r.Lk)("label",{for:"new_password"},"Новый пароль",-1))),Yt={class:"form-group"},Rt=Qt((()=>(0,r.Lk)("label",{for:"confirm_password"},"Повтор пароля",-1))),Gt=Qt((()=>(0,r.Lk)("button",{type:"submit"},"Изменить пароль",-1))),Zt={key:0},ea={key:1};function ta(e,t,a,s,n,i){const l=(0,r.g2)("Header-wide"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.Lk)("div",At,[Wt,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",zt,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.uploadAvatar&&i.uploadAvatar(...e))},"Добавить аватар"),$t]),(0,r.Lk)("div",jt,[qt,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.user.email=e),id:"email",readonly:""},null,512),[[o.Jo,n.user.email]])]),(0,r.Lk)("div",Vt,[Jt,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.user.first_name=e),id:"first_name"},null,512),[[o.Jo,n.user.first_name]])]),(0,r.Lk)("div",xt,[Ht,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.user.last_name=e),id:"last_name"},null,512),[[o.Jo,n.user.last_name]])]),Nt],32),Ot,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,o.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,r.Lk)("div",Mt,[Dt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password.old=e),id:"new_password"},null,512),[[o.Jo,n.password.old]])]),(0,r.Lk)("div",Kt,[Bt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=e=>n.password.new=e),id:"new_password"},null,512),[[o.Jo,n.password.new]])]),(0,r.Lk)("div",Yt,[Rt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>n.password.confirm=e),id:"confirm_password"},null,512),[[o.Jo,n.password.confirm]])]),Gt,n.error?((0,r.uX)(),(0,r.CE)("p",Zt,(0,p.v_)(n.error),1)):(0,r.Q3)("",!0),n.success?((0,r.uX)(),(0,r.CE)("p",ea,(0,p.v_)(n.success),1)):(0,r.Q3)("",!0)],32)]),(0,r.bF)(d)],64)}const aa={class:"header-wide"},oa={class:"header-content"};function ra(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",aa,[(0,r.Lk)("div",oa,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/journals"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/today"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})])])}var sa={name:"HeaderWide"};const na=(0,l.A)(sa,[["render",ra],["__scopeId","data-v-4b598fd8"]]);var ia=na,la={name:"account",components:{HeaderWide:ia,Footer:J},data(){return{user:{email:"",first_name:"",last_name:"",date_of_birth:""},password:{new:"",confirm:"",old:""},error:null,success:null}},created(){this.fetchProfile()},methods:{async fetchProfile(){try{const e=await T.get("/api/profile/");this.user=e.data}catch(e){console.error("Error fetching profile:",e)}},async updateProfile(){try{await T.put("/api/profile/",this.user),alert("Данные профиля обновлены")}catch(e){console.error("Error updating profile:",e)}},async changePassword(){if(this.password.new===this.password.confirm)try{const e=await T.post("/api/change-password/",{new_password:this.password.new,confirm_password:this.password.confirm,old_password:this.password.old});this.success=e.data.success,this.error=null}catch(e){this.error=e.response.data.error,this.success=null,console.error("Error changing password:",e)}else alert("Пароли не совпадают")},uploadAvatar(){}}};const da=(0,l.A)(la,[["render",ta],["__scopeId","data-v-2a48207b"]]);var ca=da;const ua=e=>((0,r.Qi)("data-v-c4e5ec5a"),e=e(),(0,r.jt)(),e),pa={class:"page-container"},ma={class:"main-content"},ga={class:"content"},ha=ua((()=>(0,r.Lk)("h2",null,"Создание публикации",-1))),ka={class:"form-group"},fa=ua((()=>(0,r.Lk)("label",{for:"title"},"Заголовок:",-1))),La={class:"form-group"},wa=ua((()=>(0,r.Lk)("label",{for:"content"},"Текст публикации:",-1))),va={class:"form-group"},ba=ua((()=>(0,r.Lk)("label",{for:"preview"},"Превью:",-1))),ya={class:"form-group"},Ea=ua((()=>(0,r.Lk)("label",{for:"tags"},"Теги:",-1))),_a=["value"],Fa=ua((()=>(0,r.Lk)("button",{type:"submit"},"Опубликовать",-1)));function Ca(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",pa,[(0,r.bF)(l),(0,r.Lk)("div",ma,[(0,r.bF)(d),(0,r.Lk)("div",ga,[ha,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",ka,[fa,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.title=e),required:""},null,512),[[o.Jo,n.title]])]),(0,r.Lk)("div",La,[wa,(0,r.bo)((0,r.Lk)("textarea",{id:"content","onUpdate:modelValue":t[1]||(t[1]=e=>n.content=e),required:""},null,512),[[o.Jo,n.content]])]),(0,r.Lk)("div",va,[ba,(0,r.Lk)("input",{type:"file",id:"preview",onChange:t[2]||(t[2]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32)]),(0,r.Lk)("div",ya,[Ea,(0,r.bo)((0,r.Lk)("select",{id:"tags","onUpdate:modelValue":t[3]||(t[3]=e=>n.selectedTag=e)},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.tags,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,_a)))),128))],512),[[o.u1,n.selectedTag]])]),Fa],32)])]),(0,r.bF)(c)])}var Pa={name:"CreatePostPage",components:{Header:Q,Sidebar:ke,Footer:J},data(){return{title:"",content:"",selectedTag:"",tags:["Спорт","Музыка","Кино","Наука","Москва","Липецк","Воронеж","Пермь"]}},created(){this.$route.params.id&&this.fetchPost()},methods:{handleFileUpload(e){},async submitForm(){this.$route.params.id?await this.updatePost():await this.createPost()},async createPost(){try{await T.post("/api/posts/",{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error creating post:",e)}},async fetchPost(){try{const e=await T.get(`/posts/${this.$route.params.id}/`);this.post=e.data}catch(e){console.error("Error fetching post:",e)}},async updatePost(){try{await T.put(`/api/posts/${this.$route.params.id}/`,{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error updating post:",e)}}}};const Ia=(0,l.A)(Pa,[["render",Ca],["__scopeId","data-v-c4e5ec5a"]]);var Xa=Ia;const Ta=e=>((0,r.Qi)("data-v-22b56a0d"),e=e(),(0,r.jt)(),e),Sa={class:"page-container"},Ua={class:"main-content"},Qa={class:"content"},Aa=Ta((()=>(0,r.Lk)("h2",null,"Добавить редактора",-1))),Wa={class:"form-group"},za=Ta((()=>(0,r.Lk)("label",{for:"name"},"Л:",-1))),$a={class:"form-group"},ja=Ta((()=>(0,r.Lk)("label",{for:"email"},"Почта:",-1))),qa={class:"form-group"},Va=Ta((()=>(0,r.Lk)("label",{for:"magazines"},"Журналы:",-1))),Ja=["value"],xa=Ta((()=>(0,r.Lk)("button",{type:"submit"},"Добавить",-1))),Ha=Ta((()=>(0,r.Lk)("h2",null,"Список редакторов",-1))),Na=Ta((()=>(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Редакторы"),(0,r.Lk)("th",null,"Журналы"),(0,r.Lk)("th",null,"e-mail"),(0,r.Lk)("th",null,"Удалить")])],-1))),Oa=["onClick"];function Ma(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Sa,[(0,r.bF)(l),(0,r.Lk)("div",Ua,[(0,r.bF)(d),(0,r.Lk)("div",Qa,[Aa,(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>i.addEditor&&i.addEditor(...e)),["prevent"]))},[(0,r.Lk)("div",Wa,[za,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.newEditor.login=e),required:""},null,512),[[o.Jo,n.newEditor.login]])]),(0,r.Lk)("div",$a,[ja,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.newEditor.email=e),required:""},null,512),[[o.Jo,n.newEditor.email]])]),(0,r.Lk)("div",qa,[Va,(0,r.bo)((0,r.Lk)("select",{id:"magazines","onUpdate:modelValue":t[2]||(t[2]=e=>n.newEditor.magazines=e),multiple:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.magazines,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,Ja)))),128))],512),[[o.u1,n.newEditor.magazines]])]),xa],32),Ha,(0,r.Lk)("table",null,[Na,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.editors,((e,t)=>((0,r.uX)(),(0,r.CE)("tr",{key:t},[(0,r.Lk)("td",null,(0,p.v_)(t+1)+". "+(0,p.v_)(e.name),1),(0,r.Lk)("td",null,(0,p.v_)(e.magazines.join(", ")),1),(0,r.Lk)("td",null,(0,p.v_)(e.email),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:e=>i.removeEditor(t)},"Удалить",8,Oa)])])))),128))])])])]),(0,r.bF)(c)])}var Da={name:"ManageEditorsPage",components:{Header:Q,Sidebar:ke,Footer:J},data(){return{newEditor:{name:"",email:"",magazines:[]},magazines:["7 дней","Elle","New York Times","Биография","Esquire"],editors:[{name:"Петров Иван В.",email:"petrov12@mail.ru",magazines:["7 дней","Elle"]}],users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await T.get("/users/");this.users=e.data}catch(e){console.error("Error fetching users:",e)}},async deleteUser(e){try{await T.delete(`/users/${e}/`),await this.fetchUsers()}catch(t){console.error("Error deleting user:",t)}},async addEditor(){try{await T.post("/api/editors/",{name:this.newEditor.name,email:this.newEditor.email,magazines:this.newEditor.magazines}),this.newEditor.name="",this.newEditor.email="",this.newEditor.magazines=[],await this.fetchUsers()}catch(e){console.error("Error adding editor:",e)}},async removeEditor(e){const t=this.editors[e];try{await T.delete(`/api/editors/${t.email}/`),this.editors.splice(e,1)}catch(a){console.error("Error removing editor:",a)}}}};const Ka=(0,l.A)(Da,[["render",Ma],["__scopeId","data-v-22b56a0d"]]);var Ba=Ka;const Ya=[{path:"/",component:we,name:we},{path:"/signup",component:Ke,name:Ke},{path:"/login",component:dt,name:dt},{path:"/choose-tags",component:kt,name:kt},{path:"/news",component:Ft,name:Ft},{path:"/magazines",component:Ut,name:Ut},{path:"/profile",component:ca,name:ca},{path:"/create-post",component:Xa,name:Xa},{path:"/admin",component:Ba,name:Ba}],Ra=(0,u.aE)({history:(0,u.LA)(),base:"static/",routes:Ya});var Ga=Ra;const Za=(0,o.Ef)(c);Za.use(Ga),Za.mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,s){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,r,s]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,n=o[0],i=o[1],l=o[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(t&&t(o);d<n.length;d++)s=n[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(4309)}));o=a.O(o)})();
//# sourceMappingURL=app.6478c1a8.js.map