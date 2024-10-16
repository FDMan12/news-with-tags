(function(){"use strict";var e={9546:function(e,t,a){var o=a(3751),r=a(641);const s={id:"app"};function n(e,t,a,o,n,i){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(l)])}var i={name:"App"},l=a(6262);const d=(0,l.A)(i,[["render",n]]);var c=d,u=a(5220),p=a(33);const m=e=>((0,r.Qi)("data-v-656ecda2"),e=e(),(0,r.jt)(),e),g={class:"news-selection-page"},h={class:"main-content"},f={class:"news-content"},k=m((()=>(0,r.Lk)("h1",null,"Новости для вас",-1))),v={class:"news-grid"},w=m((()=>(0,r.Lk)("div",{class:"news-image"},null,-1))),b={class:"news-details"},L=["onClick"];function y(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("TagsList"),u=(0,r.g2)("router-link"),m=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",g,[(0,r.bF)(l),(0,r.Lk)("div",h,[(0,r.bF)(d),(0,r.Lk)("div",f,[k,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),placeholder:"Поиск по тегу"},null,512),[[o.Jo,n.searchQuery]]),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.search&&i.search(...e))},"Поиск"),(0,r.bF)(c,{onTagSelected:i.fetchNewsByTag},null,8,["onTagSelected"]),i.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"/create-post"},{default:(0,r.k6)((()=>[(0,r.eW)("Создать новость")])),_:1})):(0,r.Q3)("",!0),(0,r.Lk)("div",v,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.newsList,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"news-card",key:e.id},[w,(0,r.Lk)("div",b,[(0,r.Lk)("h3",null,[(0,r.bF)(u,{to:{name:"NewsDetail",params:{id:e.id}}},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.title),1)])),_:2},1032,["to"])]),(0,r.Lk)("p",null,[(0,r.bF)(u,{to:{name:"NewsDetail",params:{id:e.id}}},{default:(0,r.k6)((()=>[(0,r.eW)((0,p.v_)(e.description),1)])),_:2},1032,["to"])])]),i.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(u,{key:0,to:"#"},{default:(0,r.k6)((()=>[(0,r.Lk)("button",{onClick:t=>i.deletePost(e.id)},"Delete",8,L)])),_:2},1024)):(0,r.Q3)("",!0)])))),128))])])]),(0,r.bF)(m)])}a(4114);const _=e=>((0,r.Qi)("data-v-3d6c3db6"),e=e(),(0,r.jt)(),e),E={class:"header"},F={class:"header-content"},C=_((()=>(0,r.Lk)("h1",null,"Мои Новости",-1)));function P(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",E,[(0,r.Lk)("div",F,[C,(0,r.Lk)("nav",null,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/my-magazines"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/latest-news"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})]),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(i,{key:0,to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Регистрация")])),_:1})),n.isLoggedIn()?((0,r.uX)(),(0,r.Wv)(i,{key:1,to:"/profile",class:"account-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Мой аккаунт")])),_:1})):(0,r.Q3)("",!0),n.isLoggedIn()?((0,r.uX)(),(0,r.CE)("button",{key:2,onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},"Выйти")):(0,r.Q3)("",!0)])])}var I=a(4335);const T=I.A.create({baseURL:"http://localhost:8080/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});T.interceptors.request.use((e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Token ${t}`),e}),(e=>Promise.reject(e)));var X={getNews(){return T.get("/news")},getUserProfile(){return T.get("/users/profile/")}},U={name:"Header",data(){return{userProfile:null}},mounted(){const e=localStorage.getItem("authToken");this.isLoggedIn=!!e,e?(X.defaults.headers.common["Authorization"]=`Bearer ${e}`,X.getUserProfile().then((e=>{this.userProfile=e.data})).catch((e=>{console.error("Ошибка при загрузке профиля:",e)}))):console.log("Пользователь не авторизован.")},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},logout(){localStorage.removeItem("authToken"),Xa.push({path:"/"})}}};const S=(0,l.A)(U,[["render",P],["__scopeId","data-v-3d6c3db6"]]);var A=S;const W=e=>((0,r.Qi)("data-v-00b101d0"),e=e(),(0,r.jt)(),e),z={class:"footer"},$={class:"footer-content"},q=W((()=>(0,r.Lk)("a",{href:"mailto:your-email@example.com"},"Контакты",-1)));function V(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("footer",z,[(0,r.Lk)("div",$,[(0,r.bF)(i,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("О нас")])),_:1}),(0,r.bF)(i,{to:"/help"},{default:(0,r.k6)((()=>[(0,r.eW)("Помощь")])),_:1}),q])])}var j={name:"Footer"};const Q=(0,l.A)(j,[["render",V],["__scopeId","data-v-00b101d0"]]);var J=Q;const x={class:"sidebar"},H=(0,r.Fv)("<h3 data-v-1d5a576c>Мои новости</h3><nav data-v-1d5a576c><h4 data-v-1d5a576c>Избранные теги</h4><ul data-v-1d5a576c><li data-v-1d5a576c>Спорт</li><li data-v-1d5a576c>Музыка</li><li data-v-1d5a576c>Кино</li><li data-v-1d5a576c>Наука</li></ul><h4 data-v-1d5a576c>Местные новости</h4><ul data-v-1d5a576c><li data-v-1d5a576c>Москва</li><li data-v-1d5a576c>Липецк</li><li data-v-1d5a576c>Воронеж</li><li data-v-1d5a576c>Пермь</li></ul><h4 data-v-1d5a576c>Мои журналы</h4><ul data-v-1d5a576c><li data-v-1d5a576c>New York Times</li><li data-v-1d5a576c>Биография</li><li data-v-1d5a576c>Esquire</li><li data-v-1d5a576c>Elle</li></ul></nav>",2),N=[H];function O(e,t,a,o,s,n){return(0,r.uX)(),(0,r.CE)("aside",x,N)}var M={name:"Sidebar"};const D=(0,l.A)(M,[["render",O],["__scopeId","data-v-1d5a576c"]]);var K=D,B={name:"NewsSelectionPage",components:{Sidebar:K,Footer:J,Header:A},data(){return{newsList:[],searchQuery:""}},created(){this.fetchNews()},watch:{"$route.query.q":{immediate:!0,handler(e){e?(this.searchQuery=e,this.fetchNewsByTag(e)):this.fetchNews()}}},async mounted(){console.log("Component mounted, fetching news...");const e=localStorage.getItem("authToken");if(e){X.defaults.headers.common["Authorization"]=`Bearer ${e}`;try{const e=await X.getUserProfile();this.userProfile=e.data}catch(t){console.error("Ошибка при загрузке профиля:",t)}}else console.log("Пользователь не авторизован.");try{const e=await X.get("/posts/");this.newsList=e.data}catch(t){console.error("Error fetching news:",t)}},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},async fetchNews(){try{const e=await X.get("/posts/");this.newsList=e.data}catch(e){console.error("Error fetching news:",e)}},async fetchNewsByTag(e){try{const t=await X.get(`/posts/tag/${e}/`);this.newsList=t.data}catch(t){console.error("Error fetching news by tag:",t)}},search(){Xa.push({path:"/",query:{q:this.searchQuery}})},async deletePost(e){try{await X.delete(`/posts/${e}/`),await this.fetchNews()}catch(t){console.error("Error deleting post:",t)}}}};const Y=(0,l.A)(B,[["render",y],["__scopeId","data-v-656ecda2"]]);var R=Y;const G=e=>((0,r.Qi)("data-v-8dc85ef0"),e=e(),(0,r.jt)(),e),Z={class:"registration-page"},ee={class:"registration-form"},te=G((()=>(0,r.Lk)("h2",null,"Регистрация",-1))),ae={class:"form-group"},oe=G((()=>(0,r.Lk)("label",{for:"name"},"Имя пользователя",-1))),re={class:"form-group"},se=G((()=>(0,r.Lk)("label",{for:"surname"},"Фамилия пользователя",-1))),ne={class:"patronymic"},ie=G((()=>(0,r.Lk)("label",{for:"username"},"Отчество пользователя",-1))),le={class:"form-group"},de=G((()=>(0,r.Lk)("label",{for:"login"},"Логин",-1))),ce={class:"form-group"},ue=G((()=>(0,r.Lk)("label",{for:"email"},"Почта",-1))),pe={class:"form-group"},me=G((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),ge={class:"form-group"},he=G((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль",-1))),fe={class:"form-group"},ke={key:0,class:"password-match"},ve={key:1,class:"password-no-match"},we=["disabled"],be=G((()=>(0,r.Lk)("div",{class:"form-group"},[(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль")],-1))),Le={class:"form-group"},ye={for:"confirmPassword"};function _e(e,t,a,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Z,[(0,r.Lk)("div",ee,[te,(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,o.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",ae,[oe,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[o.Jo,n.name]])]),(0,r.Lk)("div",re,[se,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"surname","onUpdate:modelValue":t[1]||(t[1]=e=>n.surname=e),required:""},null,512),[[o.Jo,n.surname]])]),(0,r.Lk)("div",ne,[ie,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"patronymic","onUpdate:modelValue":t[2]||(t[2]=e=>n.patronymic=e),required:""},null,512),[[o.Jo,n.patronymic]])]),(0,r.Lk)("div",le,[de,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"login","onUpdate:modelValue":t[3]||(t[3]=e=>n.login=e),required:""},null,512),[[o.Jo,n.login]])]),(0,r.Lk)("div",ce,[ue,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>n.email=e),required:""},null,512),[[o.Jo,n.email]])]),(0,r.Lk)("div",pe,[me,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),(0,r.Lk)("div",ge,[he,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[6]||(t[6]=e=>n.confirmPassword=e),required:""},null,512),[[o.Jo,n.confirmPassword]])]),(0,r.Lk)("div",fe,[n.passwordsMatch?((0,r.uX)(),(0,r.CE)("p",ke,"Пароли совпадают")):((0,r.uX)(),(0,r.CE)("p",ve,"Пароли не совпадают"))]),(0,r.Lk)("button",{type:"submit",disabled:!n.passwordsMatch},"Зарегистрироваться",8,we),be,(0,r.Lk)("div",Le,[(0,r.Lk)("label",ye,[(0,r.eW)("Есть аккаунт? "),(0,r.bF)(l,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Авторизироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var Ee={name:"Registration",components:{Footer:J},data(){return{name:"",surname:"",patronymic:"",login:"",email:"",password:"",confirmPassword:"",passwordsMatch:!0}},watch:{password(){this.checkPasswordsMatch()},confirmPassword(){this.checkPasswordsMatch()}},methods:{checkPasswordsMatch(){this.passwordsMatch=this.password===this.confirmPassword},isLoggedIn(){return!!localStorage.getItem("authToken")},async register(){try{const e=await I.A.post("api/register/",{name:this.name,surname:this.surname,patronymic:this.patronymic,mail:this.email,login:this.login,password:this.password,confirm_password:this.confirmPassword});console.log("User registered:",e.data),localStorage.setItem("authToken",e.data.token),await Xa.push({name:"/"})}catch(e){console.error("Error registering user:",e)}}}};const Fe=(0,l.A)(Ee,[["render",_e],["__scopeId","data-v-8dc85ef0"]]);var Ce=Fe;const Pe=e=>((0,r.Qi)("data-v-43e540a4"),e=e(),(0,r.jt)(),e),Ie={class:"login-page"},Te={class:"login-form"},Xe=Pe((()=>(0,r.Lk)("h2",null,"Вход",-1))),Ue={class:"form-group"},Se=Pe((()=>(0,r.Lk)("label",{for:"username"},"Логин",-1))),Ae={class:"form-group"},We=Pe((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),ze=Pe((()=>(0,r.Lk)("button",{type:"submit"},"Войти",-1))),$e={class:"form-group"},qe={for:"confirmPassword"};function Ve(e,t,a,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Ie,[(0,r.Lk)("div",Te,[Xe,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",Ue,[Se,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),required:""},null,512),[[o.Jo,n.username]])]),(0,r.Lk)("div",Ae,[We,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),ze,(0,r.Lk)("div",$e,[(0,r.Lk)("label",qe,[(0,r.eW)("Нет аккаунта? "),(0,r.bF)(l,{to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Зарегистрироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var je={name:"LoginPage",data(){return{username:"",password:""}},components:{Footer:J},methods:{submitForm(){console.log("Логин:",this.username),console.log("Пароль:",this.password)}}};const Qe=(0,l.A)(je,[["render",Ve],["__scopeId","data-v-43e540a4"]]);var Je=Qe;const xe={class:"tags-page"},He={class:"tags-container"},Ne=["onClick"];function Oe(e,t,a,o,s,n){const i=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",xe,[(0,r.Lk)("div",He,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.tags,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,p.C4)(["tag",{selected:s.selectedTag===e}]),key:t,onClick:t=>n.selectTag(e)},(0,p.v_)(e),11,Ne)))),128))]),(0,r.bF)(i)])}var Me={name:"Tags",components:{Footer:J},data(){return{tags:[],selectedTag:null}},async mounted(){try{const e=await X.get("/tags/");this.tags=e.data}catch(e){console.error("Error fetching tags:",e)}},methods:{selectTag(e){this.selectedTag=e}}};const De=(0,l.A)(Me,[["render",Oe],["__scopeId","data-v-6758ce90"]]);var Ke=De;const Be={class:"page-container"},Ye={class:"main-content"},Re={class:"magazines-list"},Ge={key:0},Ze=["href"];function et(e,t,a,o,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Be,[(0,r.bF)(i),(0,r.Lk)("div",Ye,[(0,r.bF)(l),(0,r.Lk)("div",Re,[(0,r.Lk)("div",null,[(0,r.Lk)("h1",null,(0,p.v_)(s.news.name),1),(0,r.Lk)("p",null,(0,p.v_)(s.news.description),1),s.news.file?((0,r.uX)(),(0,r.CE)("div",Ge,[(0,r.Lk)("a",{href:s.news.file,target:"_blank"},"Download File",8,Ze)])):(0,r.Q3)("",!0)])])]),(0,r.bF)(d)])}var tt={name:"MagazinesPage",components:{Header:A,Sidebar:K,Footer:J},props:{id:{type:String,required:!0}},data(){return{news:{}}},async mounted(){try{const e=await X.get(`/posts/${this.id}/`);this.news=e.data}catch(e){console.error("Error fetching news detail:",e)}}};const at=(0,l.A)(tt,[["render",et],["__scopeId","data-v-7a6bf7b8"]]);var ot=at;const rt={class:"page-container"},st={class:"main-content"},nt={class:"magazines-list"};function it(e,t,a,o,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",rt,[(0,r.bF)(i),(0,r.Lk)("div",st,[(0,r.bF)(l),(0,r.Lk)("div",nt,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.magazines,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"magazine-card",key:e.id},(0,p.v_)(e.name),1)))),128))])]),(0,r.bF)(d)])}var lt={name:"MagazinesPage",components:{Header:A,Sidebar:K,Footer:J},data(){return{magazines:[{id:1,name:"New York Times"},{id:2,name:"Биография"},{id:3,name:"Esquire"},{id:4,name:"Elle"}]}}};const dt=(0,l.A)(lt,[["render",it],["__scopeId","data-v-71e174e7"]]);var ct=dt;const ut=e=>((0,r.Qi)("data-v-2a48207b"),e=e(),(0,r.jt)(),e),pt={class:"profile"},mt=ut((()=>(0,r.Lk)("h1",null,"Мой профиль",-1))),gt={class:"avatar"},ht=ut((()=>(0,r.Lk)("div",{class:"avatar-placeholder"},"+",-1))),ft={class:"form-group"},kt=ut((()=>(0,r.Lk)("label",{for:"email"},"e-mail",-1))),vt={class:"form-group"},wt=ut((()=>(0,r.Lk)("label",{for:"first_name"},"Имя",-1))),bt={class:"form-group"},Lt=ut((()=>(0,r.Lk)("label",{for:"last_name"},"Фамилия",-1))),yt=ut((()=>(0,r.Lk)("button",{type:"submit"},"Сохранить данные",-1))),_t=ut((()=>(0,r.Lk)("h2",null,"Смена пароля",-1))),Et={class:"form-group"},Ft=ut((()=>(0,r.Lk)("label",{for:"new_password"},"Старый пароль",-1))),Ct={class:"form-group"},Pt=ut((()=>(0,r.Lk)("label",{for:"new_password"},"Новый пароль",-1))),It={class:"form-group"},Tt=ut((()=>(0,r.Lk)("label",{for:"confirm_password"},"Повтор пароля",-1))),Xt=ut((()=>(0,r.Lk)("button",{type:"submit"},"Изменить пароль",-1))),Ut={key:0},St={key:1};function At(e,t,a,s,n,i){const l=(0,r.g2)("Header-wide"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.Lk)("div",pt,[mt,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",gt,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.uploadAvatar&&i.uploadAvatar(...e))},"Добавить аватар"),ht]),(0,r.Lk)("div",ft,[kt,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.user.email=e),id:"email",readonly:""},null,512),[[o.Jo,n.user.email]])]),(0,r.Lk)("div",vt,[wt,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.user.first_name=e),id:"first_name"},null,512),[[o.Jo,n.user.first_name]])]),(0,r.Lk)("div",bt,[Lt,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.user.last_name=e),id:"last_name"},null,512),[[o.Jo,n.user.last_name]])]),yt],32),_t,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,o.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,r.Lk)("div",Et,[Ft,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password.old=e),id:"new_password"},null,512),[[o.Jo,n.password.old]])]),(0,r.Lk)("div",Ct,[Pt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=e=>n.password.new=e),id:"new_password"},null,512),[[o.Jo,n.password.new]])]),(0,r.Lk)("div",It,[Tt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>n.password.confirm=e),id:"confirm_password"},null,512),[[o.Jo,n.password.confirm]])]),Xt,n.error?((0,r.uX)(),(0,r.CE)("p",Ut,(0,p.v_)(n.error),1)):(0,r.Q3)("",!0),n.success?((0,r.uX)(),(0,r.CE)("p",St,(0,p.v_)(n.success),1)):(0,r.Q3)("",!0)],32)]),(0,r.bF)(d)],64)}const Wt={class:"header-wide"},zt={class:"header-content"};function $t(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",Wt,[(0,r.Lk)("div",zt,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/journals"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/today"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})])])}var qt={name:"HeaderWide"};const Vt=(0,l.A)(qt,[["render",$t],["__scopeId","data-v-4b598fd8"]]);var jt=Vt,Qt={name:"account",components:{HeaderWide:jt,Footer:J},data(){return{user:{email:"",first_name:"",last_name:"",date_of_birth:""},password:{new:"",confirm:"",old:""},error:null,success:null}},created(){this.fetchProfile()},methods:{async fetchProfile(){try{const e=await X.get("/api/profile/");this.user=e.data}catch(e){console.error("Error fetching profile:",e)}},async updateProfile(){try{await X.put("/api/profile/",this.user),alert("Данные профиля обновлены")}catch(e){console.error("Error updating profile:",e)}},async changePassword(){if(this.password.new===this.password.confirm)try{const e=await X.post("/api/change-password/",{new_password:this.password.new,confirm_password:this.password.confirm,old_password:this.password.old});this.success=e.data.success,this.error=null}catch(e){this.error=e.response.data.error,this.success=null,console.error("Error changing password:",e)}else alert("Пароли не совпадают")},uploadAvatar(){}}};const Jt=(0,l.A)(Qt,[["render",At],["__scopeId","data-v-2a48207b"]]);var xt=Jt;const Ht=e=>((0,r.Qi)("data-v-c4e5ec5a"),e=e(),(0,r.jt)(),e),Nt={class:"page-container"},Ot={class:"main-content"},Mt={class:"content"},Dt=Ht((()=>(0,r.Lk)("h2",null,"Создание публикации",-1))),Kt={class:"form-group"},Bt=Ht((()=>(0,r.Lk)("label",{for:"title"},"Заголовок:",-1))),Yt={class:"form-group"},Rt=Ht((()=>(0,r.Lk)("label",{for:"content"},"Текст публикации:",-1))),Gt={class:"form-group"},Zt=Ht((()=>(0,r.Lk)("label",{for:"preview"},"Превью:",-1))),ea={class:"form-group"},ta=Ht((()=>(0,r.Lk)("label",{for:"tags"},"Теги:",-1))),aa=["value"],oa=Ht((()=>(0,r.Lk)("button",{type:"submit"},"Опубликовать",-1)));function ra(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Nt,[(0,r.bF)(l),(0,r.Lk)("div",Ot,[(0,r.bF)(d),(0,r.Lk)("div",Mt,[Dt,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",Kt,[Bt,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.title=e),required:""},null,512),[[o.Jo,n.title]])]),(0,r.Lk)("div",Yt,[Rt,(0,r.bo)((0,r.Lk)("textarea",{id:"content","onUpdate:modelValue":t[1]||(t[1]=e=>n.content=e),required:""},null,512),[[o.Jo,n.content]])]),(0,r.Lk)("div",Gt,[Zt,(0,r.Lk)("input",{type:"file",id:"preview",onChange:t[2]||(t[2]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32)]),(0,r.Lk)("div",ea,[ta,(0,r.bo)((0,r.Lk)("select",{id:"tags","onUpdate:modelValue":t[3]||(t[3]=e=>n.selectedTag=e)},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.tags,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,aa)))),128))],512),[[o.u1,n.selectedTag]])]),oa],32)])]),(0,r.bF)(c)])}var sa={name:"CreatePostPage",components:{Header:A,Sidebar:K,Footer:J},data(){return{title:"",content:"",selectedTag:"",tags:["Спорт","Музыка","Кино","Наука","Москва","Липецк","Воронеж","Пермь"]}},created(){this.$route.params.id&&this.fetchPost()},methods:{handleFileUpload(e){},async submitForm(){this.$route.params.id?await this.updatePost():await this.createPost()},async createPost(){try{await X.post("/api/posts/",{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error creating post:",e)}},async fetchPost(){try{const e=await X.get(`/posts/${this.$route.params.id}/`);this.post=e.data}catch(e){console.error("Error fetching post:",e)}},async updatePost(){try{await X.put(`/api/posts/${this.$route.params.id}/`,{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error updating post:",e)}}}};const na=(0,l.A)(sa,[["render",ra],["__scopeId","data-v-c4e5ec5a"]]);var ia=na;const la=e=>((0,r.Qi)("data-v-22b56a0d"),e=e(),(0,r.jt)(),e),da={class:"page-container"},ca={class:"main-content"},ua={class:"content"},pa=la((()=>(0,r.Lk)("h2",null,"Добавить редактора",-1))),ma={class:"form-group"},ga=la((()=>(0,r.Lk)("label",{for:"name"},"Л:",-1))),ha={class:"form-group"},fa=la((()=>(0,r.Lk)("label",{for:"email"},"Почта:",-1))),ka={class:"form-group"},va=la((()=>(0,r.Lk)("label",{for:"magazines"},"Журналы:",-1))),wa=["value"],ba=la((()=>(0,r.Lk)("button",{type:"submit"},"Добавить",-1))),La=la((()=>(0,r.Lk)("h2",null,"Список редакторов",-1))),ya=la((()=>(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Редакторы"),(0,r.Lk)("th",null,"Журналы"),(0,r.Lk)("th",null,"e-mail"),(0,r.Lk)("th",null,"Удалить")])],-1))),_a=["onClick"];function Ea(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",da,[(0,r.bF)(l),(0,r.Lk)("div",ca,[(0,r.bF)(d),(0,r.Lk)("div",ua,[pa,(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>i.addEditor&&i.addEditor(...e)),["prevent"]))},[(0,r.Lk)("div",ma,[ga,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.newEditor.login=e),required:""},null,512),[[o.Jo,n.newEditor.login]])]),(0,r.Lk)("div",ha,[fa,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.newEditor.email=e),required:""},null,512),[[o.Jo,n.newEditor.email]])]),(0,r.Lk)("div",ka,[va,(0,r.bo)((0,r.Lk)("select",{id:"magazines","onUpdate:modelValue":t[2]||(t[2]=e=>n.newEditor.magazines=e),multiple:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.magazines,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,p.v_)(e),9,wa)))),128))],512),[[o.u1,n.newEditor.magazines]])]),ba],32),La,(0,r.Lk)("table",null,[ya,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.editors,((e,t)=>((0,r.uX)(),(0,r.CE)("tr",{key:t},[(0,r.Lk)("td",null,(0,p.v_)(t+1)+". "+(0,p.v_)(e.name),1),(0,r.Lk)("td",null,(0,p.v_)(e.magazines.join(", ")),1),(0,r.Lk)("td",null,(0,p.v_)(e.email),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:e=>i.removeEditor(t)},"Удалить",8,_a)])])))),128))])])])]),(0,r.bF)(c)])}var Fa={name:"ManageEditorsPage",components:{Header:A,Sidebar:K,Footer:J},data(){return{newEditor:{name:"",email:"",magazines:[]},magazines:["7 дней","Elle","New York Times","Биография","Esquire"],editors:[{name:"Петров Иван В.",email:"petrov12@mail.ru",magazines:["7 дней","Elle"]}],users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await X.get("/users/");this.users=e.data}catch(e){console.error("Error fetching users:",e)}},async deleteUser(e){try{await X.delete(`/users/${e}/`),await this.fetchUsers()}catch(t){console.error("Error deleting user:",t)}},async addEditor(){try{await X.post("/api/editors/",{name:this.newEditor.name,email:this.newEditor.email,magazines:this.newEditor.magazines}),this.newEditor.name="",this.newEditor.email="",this.newEditor.magazines=[],await this.fetchUsers()}catch(e){console.error("Error adding editor:",e)}},async removeEditor(e){const t=this.editors[e];try{await X.delete(`/api/editors/${t.email}/`),this.editors.splice(e,1)}catch(a){console.error("Error removing editor:",a)}}}};const Ca=(0,l.A)(Fa,[["render",Ea],["__scopeId","data-v-22b56a0d"]]);var Pa=Ca;const Ia=[{path:"/",component:R,name:R},{path:"/signup",component:Ce,name:Ce},{path:"/login",component:Je,name:Je},{path:"/choose-tags",component:Ke,name:Ke},{path:"/news",component:ot,name:ot},{path:"/magazines",component:ct,name:ct},{path:"/profile",component:xt,name:xt},{path:"/create-post",component:ia,name:ia},{path:"/admin",component:Pa,name:Pa}],Ta=(0,u.aE)({history:(0,u.LA)(),base:"static/",routes:Ia});var Xa=Ta;const Ua=(0,o.Ef)(c);Ua.use(Xa),Ua.mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,s){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,r,s]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,n=o[0],i=o[1],l=o[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(t&&t(o);d<n.length;d++)s=n[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(9546)}));o=a.O(o)})();
//# sourceMappingURL=app.764894a3.js.map