(function(){"use strict";var e={3039:function(e,t,o){var a=o(3751),r=o(641);const s={id:"app"};function n(e,t,o,a,n,i){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(l)])}var i={name:"App"},l=o(6262);const d=(0,l.A)(i,[["render",n]]);var c=d,u=o(5220),p=o(33);const m=e=>((0,r.Qi)("data-v-098f4682"),e=e(),(0,r.jt)(),e),g={class:"news-selection-page"},h={class:"main-content"},k={class:"news-content"},f=m((()=>(0,r.Lk)("h1",null,"Новости для вас",-1))),w={class:"news-grid"},L=m((()=>(0,r.Lk)("div",{class:"news-image"},null,-1))),v={class:"news-details"},b=["onClick"];function y(e,t,o,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("TagsList"),u=(0,r.g2)("router-link"),m=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",g,[(0,r.bF)(l),(0,r.Lk)("div",h,[(0,r.bF)(d),(0,r.Lk)("div",k,[f,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),placeholder:"Поиск по тегу"},null,512),[[a.Jo,n.searchQuery]]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.search&&i.search(...e))},"Поиск"),(0,r.bF)(c,{onTagSelected:i.fetchNewsByTag},null,8,["onTagSelected"]),n.isEditorOrAdmin?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"/create-post"},{default:(0,r.k6)((()=>[(0,r.eW)("Создать новость")])),_:1})):(0,r.Q3)("",!0),(0,r.Lk)("div",w,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.newsList,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"news-card",key:e.id},[L,(0,r.Lk)("div",v,[(0,r.Lk)("h3",null,[(0,r.bF)(u,{to:{name:"NewsDetail",params:{id:e.id}}},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.title),1)])),_:2},1032,["to"])]),(0,r.Lk)("p",null,[(0,r.bF)(u,{to:{name:"NewsDetail",params:{id:e.id}}},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.description),1)])),_:2},1032,["to"])])]),n.isEditorOrAdmin?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"#"},{default:(0,r.k6)((()=>[(0,r.Lk)("button",{onClick:t=>i.deletePost(e.id)},"Delete",8,b)])),_:2},1024)):(0,r.Q3)("",!0)])))),128))])])]),(0,r.bF)(m)])}o(4114);const E=e=>((0,r.Qi)("data-v-fa4e18fe"),e=e(),(0,r.jt)(),e),_={class:"header"},F={class:"header-content"},C=E((()=>(0,r.Lk)("h1",null,"Мои Новости",-1)));function P(e,t,o,a,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",_,[(0,r.Lk)("div",F,[C,(0,r.Lk)("nav",null,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/my-magazines"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/latest-news"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})]),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(i,{key:0,to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Регистрация")])),_:1})),n.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(i,{key:1,to:"/profile",class:"account-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Мой аккаунт")])),_:1})):(0,r.Q3)("",!0),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("button",{key:2,onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},"Выйти")):(0,r.Q3)("",!0)])])}var I=o(4335);const X=I.A.create({baseURL:"http://localhost:8080/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});X.interceptors.request.use((e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Token ${t}`),e}),(e=>Promise.reject(e)));var T={getNews(){return X.get("/news")},getUserProfile(){return X.get("/users/profile/")},login(e){return X.post("/login/",e)}},S={name:"Header",data(){return{userProfile:null}},mounted(){const e=localStorage.getItem("authToken");this.isLoggedIn=!!e,e?(T.defaults.headers.common["Authorization"]=`Bearer ${e}`,T.getUserProfile().then((e=>{this.userProfile=e.data})).catch((e=>{console.error("Ошибка при загрузке профиля:",e)}))):console.log("Пользователь не авторизован.")},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},logout(){localStorage.removeItem("authToken"),Ko.push({path:"/"}).then((()=>{window.location.reload()}))}}};const U=(0,l.A)(S,[["render",P],["__scopeId","data-v-fa4e18fe"]]);var A=U;const Q=e=>((0,r.Qi)("data-v-00b101d0"),e=e(),(0,r.jt)(),e),W={class:"footer"},z={class:"footer-content"},$=Q((()=>(0,r.Lk)("a",{href:"mailto:your-email@example.com"},"Контакты",-1)));function j(e,t,o,a,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("footer",W,[(0,r.Lk)("div",z,[(0,r.bF)(i,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("О нас")])),_:1}),(0,r.bF)(i,{to:"/help"},{default:(0,r.k6)((()=>[(0,r.eW)("Помощь")])),_:1}),$])])}var q={name:"Footer"};const V=(0,l.A)(q,[["render",j],["__scopeId","data-v-00b101d0"]]);var J=V;const O=e=>((0,r.Qi)("data-v-44f94986"),e=e(),(0,r.jt)(),e),x={class:"sidebar"},H=O((()=>(0,r.Lk)("h3",null,"Мои новости",-1))),N=O((()=>(0,r.Lk)("h4",null,"Избранные теги",-1))),M=O((()=>(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,"Спорт"),(0,r.Lk)("li",null,"Музыка"),(0,r.Lk)("li",null,"Кино"),(0,r.Lk)("li",null,"Наука")],-1))),D=O((()=>(0,r.Lk)("h4",null,null,-1))),K={key:0},B=O((()=>(0,r.Lk)("li",null,"Москва",-1))),Y=O((()=>(0,r.Lk)("li",null,"Липецк",-1))),R=O((()=>(0,r.Lk)("li",null,"Воронеж",-1))),G=O((()=>(0,r.Lk)("li",null,"Пермь",-1))),Z=[B,Y,R,G],ee={key:1},te={key:2},oe={key:3},ae=O((()=>(0,r.Lk)("li",null,"New York Times",-1))),re=O((()=>(0,r.Lk)("li",null,"Биография",-1))),se=O((()=>(0,r.Lk)("li",null,"Esquire",-1))),ne=O((()=>(0,r.Lk)("li",null,"Elle",-1))),ie=[ae,re,se,ne];function le(e,t,o,a,s,n){return(0,r.uX)(),(0,r.CE)("aside",x,[H,(0,r.Lk)("nav",null,[N,M,D,n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("ul",K,Z)):(0,r.Q3)("",!0),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("h4",ee,"Мои журналы")):(0,r.Q3)("",!0),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("h4",te,"Зарегистрируйтесь для получения доступа к журналам!")),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("ul",oe,ie)):(0,r.Q3)("",!0)])])}var de={name:"Sidebar",methods:{isLoggedIn(){return!!localStorage.getItem("authToken")}}};const ce=(0,l.A)(de,[["render",le],["__scopeId","data-v-44f94986"]]);var ue=ce,pe={name:"NewsSelectionPage",components:{Sidebar:ue,Footer:J,Header:A},data(){return{newsList:[],searchQuery:"",userProfile:null,isEditorOrAdmin:!1}},created(){this.fetchNews()},watch:{"$route.query.q":{immediate:!0,handler(e){e?(this.searchQuery=e,this.fetchNewsByTag(e)):this.fetchNews()}}},async mounted(){console.log("Component mounted, fetching news...");const e=localStorage.getItem("authToken");if(e){T.defaults.headers.common["Authorization"]=`Bearer ${e}`;try{const e=await T.getUserProfile();this.userProfile=e.data,"admin"!==this.userProfile.role&&"editor"!==this.userProfile.role||(this.isEditorOrAdmin=!0)}catch(t){console.error("Ошибка при загрузке профиля:",t)}}else console.log("Пользователь не авторизован.");try{const e=await T.get("/posts/");this.newsList=e.data}catch(t){console.error("Error fetching news:",t)}},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},async fetchNews(){try{const e=await T.get("/posts/");this.newsList=e.data}catch(e){console.error("Error fetching news:",e)}},async fetchNewsByTag(e){try{const t=await T.get(`/posts/tag/${e}/`);this.newsList=t.data}catch(t){console.error("Error fetching news by tag:",t)}},search(){Ko.push({path:"/",query:{q:this.searchQuery}})},async deletePost(e){try{await T.delete(`/posts/${e}/`),await this.fetchNews()}catch(t){console.error("Error deleting post:",t)}}}};const me=(0,l.A)(pe,[["render",y],["__scopeId","data-v-098f4682"]]);var ge=me;const he=e=>((0,r.Qi)("data-v-e78018dc"),e=e(),(0,r.jt)(),e),ke={class:"registration-page"},fe={class:"registration-form"},we=he((()=>(0,r.Lk)("h2",null,"Регистрация",-1))),Le={class:"form-group"},ve=he((()=>(0,r.Lk)("label",{for:"name"},"Имя пользователя",-1))),be={class:"form-group"},ye=he((()=>(0,r.Lk)("label",{for:"surname"},"Фамилия пользователя",-1))),Ee={class:"patronymic"},_e=he((()=>(0,r.Lk)("label",{for:"username"},"Отчество пользователя",-1))),Fe={class:"form-group"},Ce=he((()=>(0,r.Lk)("label",{for:"login"},"Логин",-1))),Pe={class:"form-group"},Ie=he((()=>(0,r.Lk)("label",{for:"email"},"Почта",-1))),Xe={class:"form-group"},Te=he((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),Se={class:"form-group"},Ue=he((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль",-1))),Ae={class:"form-group"},Qe={key:0,class:"password-match"},We={key:1,class:"password-no-match"},ze=["disabled"],$e=he((()=>(0,r.Lk)("div",{class:"form-group"},[(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль")],-1))),je={class:"form-group"},qe={for:"confirmPassword"};function Ve(e,t,o,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",ke,[(0,r.Lk)("div",fe,[we,(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,a.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",Le,[ve,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[a.Jo,n.name]])]),(0,r.Lk)("div",be,[ye,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"surname","onUpdate:modelValue":t[1]||(t[1]=e=>n.surname=e),required:""},null,512),[[a.Jo,n.surname]])]),(0,r.Lk)("div",Ee,[_e,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"patronymic","onUpdate:modelValue":t[2]||(t[2]=e=>n.patronymic=e),required:""},null,512),[[a.Jo,n.patronymic]])]),(0,r.Lk)("div",Fe,[Ce,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"login","onUpdate:modelValue":t[3]||(t[3]=e=>n.login=e),required:""},null,512),[[a.Jo,n.login]])]),(0,r.Lk)("div",Pe,[Ie,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>n.email=e),required:""},null,512),[[a.Jo,n.email]])]),(0,r.Lk)("div",Xe,[Te,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password=e),required:""},null,512),[[a.Jo,n.password]])]),(0,r.Lk)("div",Se,[Ue,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[6]||(t[6]=e=>n.confirmPassword=e),required:""},null,512),[[a.Jo,n.confirmPassword]])]),(0,r.Lk)("div",Ae,[n.passwordsMatch?((0,r.uX)(),(0,r.CE)("p",Qe,"Пароли совпадают")):((0,r.uX)(),(0,r.CE)("p",We,"Пароли не совпадают"))]),(0,r.Lk)("button",{type:"submit",disabled:!n.passwordsMatch},"Зарегистрироваться",8,ze),$e,(0,r.Lk)("div",je,[(0,r.Lk)("label",qe,[(0,r.eW)("Есть аккаунт? "),(0,r.bF)(l,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Авторизироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var Je={name:"Registration",components:{Footer:J},data(){return{name:"",surname:"",patronymic:"",login:"",email:"",password:"",confirmPassword:"",passwordsMatch:!0}},watch:{password(){this.checkPasswordsMatch()},confirmPassword(){this.checkPasswordsMatch()}},methods:{checkPasswordsMatch(){this.passwordsMatch=this.password===this.confirmPassword},isLoggedIn(){return!!localStorage.getItem("authToken")},async register(){try{const e=await I.A.post("api/register/",{name:this.name,surname:this.surname,patronymic:this.patronymic,mail:this.email,login:this.login,password:this.password,confirm_password:this.confirmPassword});console.log("User registered:",e.data),localStorage.setItem("authToken",e.data.token),await Ko.push({path:"/"}),window.location.reload()}catch(e){console.error("Error registering user:",e)}}}};const Oe=(0,l.A)(Je,[["render",Ve],["__scopeId","data-v-e78018dc"]]);var xe=Oe;const He=e=>((0,r.Qi)("data-v-ce47a2fe"),e=e(),(0,r.jt)(),e),Ne={class:"login-page"},Me={class:"login-form"},De=He((()=>(0,r.Lk)("h2",null,"Вход",-1))),Ke={class:"form-group"},Be=He((()=>(0,r.Lk)("label",{for:"username"},"Логин",-1))),Ye={class:"form-group"},Re=He((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),Ge=He((()=>(0,r.Lk)("button",{type:"submit"},"Войти",-1))),Ze={class:"form-group"},et={for:"signup"};function tt(e,t,o,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Ne,[(0,r.Lk)("div",Me,[De,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,a.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,r.Lk)("div",Ke,[Be,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),required:""},null,512),[[a.Jo,n.username]])]),(0,r.Lk)("div",Ye,[Re,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),required:""},null,512),[[a.Jo,n.password]])]),Ge,(0,r.Lk)("div",Ze,[(0,r.Lk)("label",et,[(0,r.eW)("Нет аккаунта? "),(0,r.bF)(l,{to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Зарегистрироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var ot={name:"LoginPage",data(){return{username:"",password:""}},components:{Footer:J},methods:{async login(){try{const e=await T.login({username:this.username,password:this.password});localStorage.setItem("authToken",e.data.token),await Ko.push({path:"/"}),window.location.reload()}catch(e){console.error("Ошибка при входе в аккаунт:",e)}}}};const at=(0,l.A)(ot,[["render",tt],["__scopeId","data-v-ce47a2fe"]]);var rt=at;const st={class:"tags-page"},nt={class:"tags-container"},it=["onClick"];function lt(e,t,o,a,s,n){const i=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",st,[(0,r.Lk)("div",nt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.tags,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,p.C4)(["tag",{selected:s.selectedTag===e}]),key:t,onClick:t=>n.selectTag(e)},(0,p.v_)(e),11,it)))),128))]),(0,r.bF)(i)])}var dt={name:"Tags",components:{Footer:J},data(){return{tags:[],selectedTag:null}},async mounted(){try{const e=await T.get("/tags/");this.tags=e.data}catch(e){console.error("Error fetching tags:",e)}},methods:{selectTag(e){this.selectedTag=e}}};const ct=(0,l.A)(dt,[["render",lt],["__scopeId","data-v-6758ce90"]]);var ut=ct;const pt={class:"page-container"},mt={class:"main-content"},gt={class:"magazines-list"},ht={key:0},kt=["href"];function ft(e,t,o,a,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",pt,[(0,r.bF)(i),(0,r.Lk)("div",mt,[(0,r.bF)(l),(0,r.Lk)("div",gt,[(0,r.Lk)("div",null,[(0,r.Lk)("h1",null,(0,p.v_)(s.news.name),1),(0,r.Lk)("p",null,(0,p.v_)(s.news.description),1),s.news.file?((0,r.uX)(),(0,r.CE)("div",ht,[(0,r.Lk)("a",{href:s.news.file,target:"_blank"},"Download File",8,kt)])):(0,r.Q3)("",!0)])])]),(0,r.bF)(d)])}var wt={name:"MagazinesPage",components:{Header:A,Sidebar:ue,Footer:J},props:{id:{type:String,required:!0}},data(){return{news:{}}},async mounted(){try{const e=await T.get(`/posts/${this.id}/`);this.news=e.data}catch(e){console.error("Error fetching news detail:",e)}}};const Lt=(0,l.A)(wt,[["render",ft],["__scopeId","data-v-7a6bf7b8"]]);var vt=Lt;const bt={class:"page-container"},yt={class:"main-content"},Et={class:"magazines-list"};function _t(e,t,o,a,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",bt,[(0,r.bF)(i),(0,r.Lk)("div",yt,[(0,r.bF)(l),(0,r.Lk)("div",Et,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.magazines,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"magazine-card",key:e.id},(0,p.v_)(e.name),1)))),128))])]),(0,r.bF)(d)])}var Ft={name:"MagazinesPage",components:{Header:A,Sidebar:ue,Footer:J},data(){return{magazines:[{id:1,name:"New York Times"},{id:2,name:"Биография"},{id:3,name:"Esquire"},{id:4,name:"Elle"}]}}};const Ct=(0,l.A)(Ft,[["render",_t],["__scopeId","data-v-71e174e7"]]);var Pt=Ct;const It=e=>((0,r.Qi)("data-v-2a48207b"),e=e(),(0,r.jt)(),e),Xt={class:"profile"},Tt=It((()=>(0,r.Lk)("h1",null,"Мой профиль",-1))),St={class:"avatar"},Ut=It((()=>(0,r.Lk)("div",{class:"avatar-placeholder"},"+",-1))),At={class:"form-group"},Qt=It((()=>(0,r.Lk)("label",{for:"email"},"e-mail",-1))),Wt={class:"form-group"},zt=It((()=>(0,r.Lk)("label",{for:"first_name"},"Имя",-1))),$t={class:"form-group"},jt=It((()=>(0,r.Lk)("label",{for:"last_name"},"Фамилия",-1))),qt=It((()=>(0,r.Lk)("button",{type:"submit"},"Сохранить данные",-1))),Vt=It((()=>(0,r.Lk)("h2",null,"Смена пароля",-1))),Jt={class:"form-group"},Ot=It((()=>(0,r.Lk)("label",{for:"new_password"},"Старый пароль",-1))),xt={class:"form-group"},Ht=It((()=>(0,r.Lk)("label",{for:"new_password"},"Новый пароль",-1))),Nt={class:"form-group"},Mt=It((()=>(0,r.Lk)("label",{for:"confirm_password"},"Повтор пароля",-1))),Dt=It((()=>(0,r.Lk)("button",{type:"submit"},"Изменить пароль",-1))),Kt={key:0},Bt={key:1};function Yt(e,t,o,s,n,i){const l=(0,r.g2)("Header-wide"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.Lk)("div",Xt,[Tt,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,a.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",St,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.uploadAvatar&&i.uploadAvatar(...e))},"Добавить аватар"),Ut]),(0,r.Lk)("div",At,[Qt,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.user.email=e),id:"email",readonly:""},null,512),[[a.Jo,n.user.email]])]),(0,r.Lk)("div",Wt,[zt,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.user.first_name=e),id:"first_name"},null,512),[[a.Jo,n.user.first_name]])]),(0,r.Lk)("div",$t,[jt,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.user.last_name=e),id:"last_name"},null,512),[[a.Jo,n.user.last_name]])]),qt],32),Vt,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,a.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,r.Lk)("div",Jt,[Ot,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password.old=e),id:"new_password"},null,512),[[a.Jo,n.password.old]])]),(0,r.Lk)("div",xt,[Ht,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=e=>n.password.new=e),id:"new_password"},null,512),[[a.Jo,n.password.new]])]),(0,r.Lk)("div",Nt,[Mt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>n.password.confirm=e),id:"confirm_password"},null,512),[[a.Jo,n.password.confirm]])]),Dt,n.error?((0,r.uX)(),(0,r.CE)("p",Kt,(0,p.v_)(n.error),1)):(0,r.Q3)("",!0),n.success?((0,r.uX)(),(0,r.CE)("p",Bt,(0,p.v_)(n.success),1)):(0,r.Q3)("",!0)],32)]),(0,r.bF)(d)],64)}const Rt={class:"header-wide"},Gt={class:"header-content"};function Zt(e,t,o,a,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",Rt,[(0,r.Lk)("div",Gt,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/journals"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/today"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})])])}var eo={name:"HeaderWide"};const to=(0,l.A)(eo,[["render",Zt],["__scopeId","data-v-4b598fd8"]]);var oo=to,ao={name:"account",components:{HeaderWide:oo,Footer:J},data(){return{user:{email:"",first_name:"",last_name:"",date_of_birth:""},password:{new:"",confirm:"",old:""},error:null,success:null}},created(){this.fetchProfile()},methods:{async fetchProfile(){try{const e=await T.get("/api/profile/");this.user=e.data}catch(e){console.error("Error fetching profile:",e)}},async updateProfile(){try{await T.put("/api/profile/",this.user),alert("Данные профиля обновлены")}catch(e){console.error("Error updating profile:",e)}},async changePassword(){if(this.password.new===this.password.confirm)try{const e=await T.post("/api/change-password/",{new_password:this.password.new,confirm_password:this.password.confirm,old_password:this.password.old});this.success=e.data.success,this.error=null}catch(e){this.error=e.response.data.error,this.success=null,console.error("Error changing password:",e)}else alert("Пароли не совпадают")},uploadAvatar(){}}};const ro=(0,l.A)(ao,[["render",Yt],["__scopeId","data-v-2a48207b"]]);var so=ro;const no=e=>((0,r.Qi)("data-v-c4e5ec5a"),e=e(),(0,r.jt)(),e),io={class:"page-container"},lo={class:"main-content"},co={class:"content"},uo=no((()=>(0,r.Lk)("h2",null,"Создание публикации",-1))),po={class:"form-group"},mo=no((()=>(0,r.Lk)("label",{for:"title"},"Заголовок:",-1))),go={class:"form-group"},ho=no((()=>(0,r.Lk)("label",{for:"content"},"Текст публикации:",-1))),ko={class:"form-group"},fo=no((()=>(0,r.Lk)("label",{for:"preview"},"Превью:",-1))),wo={class:"form-group"},Lo=no((()=>(0,r.Lk)("label",{for:"tags"},"Теги:",-1))),vo=["value"],bo=no((()=>(0,r.Lk)("button",{type:"submit"},"Опубликовать",-1)));function yo(e,t,o,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",io,[(0,r.bF)(l),(0,r.Lk)("div",lo,[(0,r.bF)(d),(0,r.Lk)("div",co,[uo,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,a.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",po,[mo,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.title=e),required:""},null,512),[[a.Jo,n.title]])]),(0,r.Lk)("div",go,[ho,(0,r.bo)((0,r.Lk)("textarea",{id:"content","onUpdate:modelValue":t[1]||(t[1]=e=>n.content=e),required:""},null,512),[[a.Jo,n.content]])]),(0,r.Lk)("div",ko,[fo,(0,r.Lk)("input",{type:"file",id:"preview",onChange:t[2]||(t[2]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32)]),(0,r.Lk)("div",wo,[Lo,(0,r.bo)((0,r.Lk)("select",{id:"tags","onUpdate:modelValue":t[3]||(t[3]=e=>n.selectedTag=e)},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.tags,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,vo)))),128))],512),[[a.u1,n.selectedTag]])]),bo],32)])]),(0,r.bF)(c)])}var Eo={name:"CreatePostPage",components:{Header:A,Sidebar:ue,Footer:J},data(){return{title:"",content:"",selectedTag:"",tags:["Спорт","Музыка","Кино","Наука","Москва","Липецк","Воронеж","Пермь"]}},created(){this.$route.params.id&&this.fetchPost()},methods:{handleFileUpload(e){},async submitForm(){this.$route.params.id?await this.updatePost():await this.createPost()},async createPost(){try{await T.post("/api/posts/",{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error creating post:",e)}},async fetchPost(){try{const e=await T.get(`/posts/${this.$route.params.id}/`);this.post=e.data}catch(e){console.error("Error fetching post:",e)}},async updatePost(){try{await T.put(`/api/posts/${this.$route.params.id}/`,{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error updating post:",e)}}}};const _o=(0,l.A)(Eo,[["render",yo],["__scopeId","data-v-c4e5ec5a"]]);var Fo=_o;const Co=e=>((0,r.Qi)("data-v-22b56a0d"),e=e(),(0,r.jt)(),e),Po={class:"page-container"},Io={class:"main-content"},Xo={class:"content"},To=Co((()=>(0,r.Lk)("h2",null,"Добавить редактора",-1))),So={class:"form-group"},Uo=Co((()=>(0,r.Lk)("label",{for:"name"},"Л:",-1))),Ao={class:"form-group"},Qo=Co((()=>(0,r.Lk)("label",{for:"email"},"Почта:",-1))),Wo={class:"form-group"},zo=Co((()=>(0,r.Lk)("label",{for:"magazines"},"Журналы:",-1))),$o=["value"],jo=Co((()=>(0,r.Lk)("button",{type:"submit"},"Добавить",-1))),qo=Co((()=>(0,r.Lk)("h2",null,"Список редакторов",-1))),Vo=Co((()=>(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Редакторы"),(0,r.Lk)("th",null,"Журналы"),(0,r.Lk)("th",null,"e-mail"),(0,r.Lk)("th",null,"Удалить")])],-1))),Jo=["onClick"];function Oo(e,t,o,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Po,[(0,r.bF)(l),(0,r.Lk)("div",Io,[(0,r.bF)(d),(0,r.Lk)("div",Xo,[To,(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,a.D$)(((...e)=>i.addEditor&&i.addEditor(...e)),["prevent"]))},[(0,r.Lk)("div",So,[Uo,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.newEditor.login=e),required:""},null,512),[[a.Jo,n.newEditor.login]])]),(0,r.Lk)("div",Ao,[Qo,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.newEditor.email=e),required:""},null,512),[[a.Jo,n.newEditor.email]])]),(0,r.Lk)("div",Wo,[zo,(0,r.bo)((0,r.Lk)("select",{id:"magazines","onUpdate:modelValue":t[2]||(t[2]=e=>n.newEditor.magazines=e),multiple:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.magazines,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,$o)))),128))],512),[[a.u1,n.newEditor.magazines]])]),jo],32),qo,(0,r.Lk)("table",null,[Vo,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.editors,((e,t)=>((0,r.uX)(),(0,r.CE)("tr",{key:t},[(0,r.Lk)("td",null,(0,p.v_)(t+1)+". "+(0,p.v_)(e.name),1),(0,r.Lk)("td",null,(0,p.v_)(e.magazines.join(", ")),1),(0,r.Lk)("td",null,(0,p.v_)(e.email),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:e=>i.removeEditor(t)},"Удалить",8,Jo)])])))),128))])])])]),(0,r.bF)(c)])}var xo={name:"ManageEditorsPage",components:{Header:A,Sidebar:ue,Footer:J},data(){return{newEditor:{name:"",email:"",magazines:[]},magazines:["7 дней","Elle","New York Times","Биография","Esquire"],editors:[{name:"Петров Иван В.",email:"petrov12@mail.ru",magazines:["7 дней","Elle"]}],users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await T.get("/users/");this.users=e.data}catch(e){console.error("Error fetching users:",e)}},async deleteUser(e){try{await T.delete(`/users/${e}/`),await this.fetchUsers()}catch(t){console.error("Error deleting user:",t)}},async addEditor(){try{await T.post("/api/editors/",{name:this.newEditor.name,email:this.newEditor.email,magazines:this.newEditor.magazines}),this.newEditor.name="",this.newEditor.email="",this.newEditor.magazines=[],await this.fetchUsers()}catch(e){console.error("Error adding editor:",e)}},async removeEditor(e){const t=this.editors[e];try{await T.delete(`/api/editors/${t.email}/`),this.editors.splice(e,1)}catch(o){console.error("Error removing editor:",o)}}}};const Ho=(0,l.A)(xo,[["render",Oo],["__scopeId","data-v-22b56a0d"]]);var No=Ho;const Mo=[{path:"/",component:ge,name:ge},{path:"/signup",component:xe,name:xe},{path:"/login",component:rt,name:rt},{path:"/choose-tags",component:ut,name:ut},{path:"/news",component:vt,name:vt},{path:"/magazines",component:Pt,name:Pt},{path:"/profile",component:so,name:so},{path:"/create-post",component:Fo,name:Fo},{path:"/admin",component:No,name:No}],Do=(0,u.aE)({history:(0,u.LA)(),base:"static/",routes:Mo});var Ko=Do;const Bo=(0,a.Ef)(c);Bo.use(Ko),Bo.mount("#app")}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,a,r,s){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||n>=s)&&Object.keys(o.O).every((function(e){return o.O[e](a[l])}))?a.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,n=a[0],i=a[1],l=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(t&&t(a);d<n.length;d++)s=n[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(3039)}));a=o.O(a)})();
//# sourceMappingURL=app.959640fb.js.map