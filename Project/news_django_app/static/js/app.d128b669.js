(function(){"use strict";var e={7329:function(e,t,a){var o=a(3751),r=a(641);const s={id:"app"};function n(e,t,a,o,n,i){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(l)])}var i={name:"App"},l=a(6262);const d=(0,l.A)(i,[["render",n]]);var c=d,u=a(5220);const p={class:"news-selection-page"},m={class:"main-content"};function f(e,t,a,o,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",p,[(0,r.bF)(i),(0,r.Lk)("div",m,[(0,r.bF)(l)]),(0,r.bF)(d)])}const g=e=>((0,r.Qi)("data-v-c6566934"),e=e(),(0,r.jt)(),e),h={class:"header"},v={class:"header-content"},k=g((()=>(0,r.Lk)("h1",null,"Мои Новости",-1)));function b(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",h,[(0,r.Lk)("div",v,[k,(0,r.Lk)("nav",null,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/my-magazines"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/latest-news"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})]),n.isLoggedIn()?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(i,{key:0,to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Регистрация")])),_:1}))])])}var w=a(4335);const L=w.A.create({baseURL:"http://localhost:8080/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});L.interceptors.request.use((e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Token ${t}`),e}),(e=>Promise.reject(e)));var y={getNews(){return L.get("/news")},getUserProfile(){return L.get("/users/profile/")}},_={name:"Header",data(){return{userProfile:null}},mounted(){y.getUserProfile().then((e=>{this.userProfile=e.data})).catch((e=>{console.error("Ошибка при загрузке профиля:",e)}));try{const e=localStorage.getItem("authToken");this.isLoggedIn=!!e}catch(e){console.error("Error fetching news:",e)}},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")}}};const E=(0,l.A)(_,[["render",b],["__scopeId","data-v-c6566934"]]);var F=E;const P=e=>((0,r.Qi)("data-v-00b101d0"),e=e(),(0,r.jt)(),e),C={class:"footer"},U={class:"footer-content"},X=P((()=>(0,r.Lk)("a",{href:"mailto:your-email@example.com"},"Контакты",-1)));function S(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("footer",C,[(0,r.Lk)("div",U,[(0,r.bF)(i,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("О нас")])),_:1}),(0,r.bF)(i,{to:"/help"},{default:(0,r.k6)((()=>[(0,r.eW)("Помощь")])),_:1}),X])])}var I={name:"Footer"};const T=(0,l.A)(I,[["render",S],["__scopeId","data-v-00b101d0"]]);var A=T;const z={class:"sidebar"},V=(0,r.Fv)("<h3 data-v-994d7f5e>Мои новости</h3><nav data-v-994d7f5e><h4 data-v-994d7f5e>Избранные теги</h4><ul data-v-994d7f5e><li data-v-994d7f5e>Спорт</li><li data-v-994d7f5e>Музыка</li><li data-v-994d7f5e>Кино</li><li data-v-994d7f5e>Наука</li></ul><h4 data-v-994d7f5e>Местные новости</h4><ul data-v-994d7f5e><li data-v-994d7f5e>Москва</li><li data-v-994d7f5e>Липецк</li><li data-v-994d7f5e>Воронеж</li><li data-v-994d7f5e>Пермь</li></ul><h4 data-v-994d7f5e>Мои журналы</h4><ul data-v-994d7f5e><li data-v-994d7f5e>New York Times</li><li data-v-994d7f5e>Биография</li><li data-v-994d7f5e>Esquire</li><li data-v-994d7f5e>Elle</li></ul></nav>",2),j=[V];function J(e,t,a,o,s,n){return(0,r.uX)(),(0,r.CE)("aside",z,j)}var q={name:"Sidebar"};const W=(0,l.A)(q,[["render",J],["__scopeId","data-v-994d7f5e"]]);var $=W,x={name:"NewsSelectionPage",components:{Sidebar:$,Footer:A,Header:F},data(){return{newsList:[],searchQuery:""}},mounted(){console.log("MainComponent mounted")}};const H=(0,l.A)(x,[["render",f],["__scopeId","data-v-16b1cdb6"]]);var M=H;const O=e=>((0,r.Qi)("data-v-7670cd55"),e=e(),(0,r.jt)(),e),Q={class:"registration-page"},D={class:"registration-form"},K=O((()=>(0,r.Lk)("h2",null,"Регистрация",-1))),N={class:"form-group"},Y=O((()=>(0,r.Lk)("label",{for:"name"},"Имя пользователя",-1))),R={class:"form-group"},B=O((()=>(0,r.Lk)("label",{for:"surname"},"Фамилия пользователя",-1))),G={class:"patronymic"},Z=O((()=>(0,r.Lk)("label",{for:"username"},"Отчество пользователя",-1))),ee={class:"form-group"},te=O((()=>(0,r.Lk)("label",{for:"login"},"Логин",-1))),ae={class:"form-group"},oe=O((()=>(0,r.Lk)("label",{for:"email"},"Почта",-1))),re={class:"form-group"},se=O((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),ne={class:"form-group"},ie=O((()=>(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль",-1))),le={class:"form-group"},de={key:0,class:"password-match"},ce={key:1,class:"password-no-match"},ue=["disabled"],pe=O((()=>(0,r.Lk)("div",{class:"form-group"},[(0,r.Lk)("label",{for:"confirmPassword"},"Повторите пароль")],-1))),me={class:"form-group"},fe={for:"confirmPassword"};function ge(e,t,a,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Q,[(0,r.Lk)("div",D,[K,(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,o.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,r.Lk)("div",N,[Y,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[o.Jo,n.name]])]),(0,r.Lk)("div",R,[B,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"surname","onUpdate:modelValue":t[1]||(t[1]=e=>n.surname=e),required:""},null,512),[[o.Jo,n.surname]])]),(0,r.Lk)("div",G,[Z,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"patronymic","onUpdate:modelValue":t[2]||(t[2]=e=>n.patronymic=e),required:""},null,512),[[o.Jo,n.patronymic]])]),(0,r.Lk)("div",ee,[te,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"login","onUpdate:modelValue":t[3]||(t[3]=e=>n.login=e),required:""},null,512),[[o.Jo,n.login]])]),(0,r.Lk)("div",ae,[oe,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>n.email=e),required:""},null,512),[[o.Jo,n.email]])]),(0,r.Lk)("div",re,[se,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),(0,r.Lk)("div",ne,[ie,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[6]||(t[6]=e=>n.confirmPassword=e),required:""},null,512),[[o.Jo,n.confirmPassword]])]),(0,r.Lk)("div",le,[n.passwordsMatch?((0,r.uX)(),(0,r.CE)("p",de,"Пароли совпадают")):((0,r.uX)(),(0,r.CE)("p",ce,"Пароли не совпадают"))]),(0,r.Lk)("button",{type:"submit",disabled:!n.passwordsMatch},"Зарегистрироваться",8,ue),pe,(0,r.Lk)("div",me,[(0,r.Lk)("label",fe,[(0,r.eW)("Есть аккаунт? "),(0,r.bF)(l,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Авторизироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}a(4114);var he={name:"Registration",components:{Footer:A},data(){return{name:"",surname:"",patronymic:"",login:"",email:"",password:"",confirmPassword:"",passwordsMatch:!0}},watch:{password(){this.checkPasswordsMatch()},confirmPassword(){this.checkPasswordsMatch()}},methods:{checkPasswordsMatch(){this.passwordsMatch=this.password===this.confirmPassword},isLoggedIn(){return!!localStorage.getItem("authToken")},async register(){try{const e=await w.A.post("api/register/",{name:this.name,surname:this.surname,patronymic:this.patronymic,mail:this.email,login:this.login,password:this.password,confirm_password:this.confirmPassword});console.log("User registered:",e.data),localStorage.setItem("authToken",e.data.token),await _a.push({name:"/"})}catch(e){console.error("Error registering user:",e)}}}};const ve=(0,l.A)(he,[["render",ge],["__scopeId","data-v-7670cd55"]]);var ke=ve;const be=e=>((0,r.Qi)("data-v-d8220e92"),e=e(),(0,r.jt)(),e),we={class:"login-page"},Le={class:"login-form"},ye=be((()=>(0,r.Lk)("h2",null,"Вход",-1))),_e={class:"form-group"},Ee=be((()=>(0,r.Lk)("label",{for:"username"},"Логин",-1))),Fe={class:"form-group"},Pe=be((()=>(0,r.Lk)("label",{for:"password"},"Пароль",-1))),Ce=be((()=>(0,r.Lk)("button",{type:"submit"},"Войти",-1))),Ue={class:"form-group"},Xe={for:"confirmPassword"};function Se(e,t,a,s,n,i){const l=(0,r.g2)("router-link"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",we,[(0,r.Lk)("div",Le,[ye,(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",_e,[Ee,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),required:""},null,512),[[o.Jo,n.username]])]),(0,r.Lk)("div",Fe,[Pe,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),Ce,(0,r.Lk)("div",Ue,[(0,r.Lk)("label",Xe,[(0,r.eW)("Нет аккаунта? "),(0,r.bF)(l,{to:"/signup"},{default:(0,r.k6)((()=>[(0,r.eW)("Зарегистрироваться")])),_:1})]),(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("На главную")])),_:1})])],32)]),(0,r.bF)(d)])}var Ie={name:"LoginPage",data(){return{username:"",password:""}},components:{Footer:A},methods:{submitForm(){console.log("Логин:",this.username),console.log("Пароль:",this.password)}}};const Te=(0,l.A)(Ie,[["render",Se],["__scopeId","data-v-d8220e92"]]);var Ae=Te,ze=a(33);const Ve={class:"tags-page"},je={class:"tags-container"},Je=["onClick"];function qe(e,t,a,o,s,n){const i=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Ve,[(0,r.Lk)("div",je,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.tags,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{class:(0,ze.C4)(["tag",{selected:s.selectedTag===e}]),key:t,onClick:t=>n.selectTag(e)},(0,ze.v_)(e),11,Je)))),128))]),(0,r.bF)(i)])}var We={name:"Tags",components:{Footer:A},data(){return{tags:[],selectedTag:null}},async mounted(){try{const e=await y.get("/tags/");this.tags=e.data}catch(e){console.error("Error fetching tags:",e)}},methods:{selectTag(e){this.selectedTag=e}}};const $e=(0,l.A)(We,[["render",qe],["__scopeId","data-v-28fa0276"]]);var xe=$e;const He={class:"page-container"},Me={class:"main-content"},Oe={class:"magazines-list"},Qe={key:0},De=["href"];function Ke(e,t,a,o,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",He,[(0,r.bF)(i),(0,r.Lk)("div",Me,[(0,r.bF)(l),(0,r.Lk)("div",Oe,[(0,r.Lk)("div",null,[(0,r.Lk)("h1",null,(0,ze.v_)(s.news.name),1),(0,r.Lk)("p",null,(0,ze.v_)(s.news.description),1),s.news.file?((0,r.uX)(),(0,r.CE)("div",Qe,[(0,r.Lk)("a",{href:s.news.file,target:"_blank"},"Download File",8,De)])):(0,r.Q3)("",!0)])])]),(0,r.bF)(d)])}var Ne={name:"MagazinesPage",components:{Header:F,Sidebar:$,Footer:A},props:{id:{type:String,required:!0}},data(){return{news:{}}},async mounted(){try{const e=await y.get(`/posts/${this.id}/`);this.news=e.data}catch(e){console.error("Error fetching news detail:",e)}}};const Ye=(0,l.A)(Ne,[["render",Ke],["__scopeId","data-v-13b3311e"]]);var Re=Ye;const Be={class:"page-container"},Ge={class:"main-content"},Ze={class:"magazines-list"};function et(e,t,a,o,s,n){const i=(0,r.g2)("Header"),l=(0,r.g2)("Sidebar"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Be,[(0,r.bF)(i),(0,r.Lk)("div",Ge,[(0,r.bF)(l),(0,r.Lk)("div",Ze,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.magazines,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"magazine-card",key:e.id},(0,ze.v_)(e.name),1)))),128))])]),(0,r.bF)(d)])}var tt={name:"MagazinesPage",components:{Header:F,Sidebar:$,Footer:A},data(){return{magazines:[{id:1,name:"New York Times"},{id:2,name:"Биография"},{id:3,name:"Esquire"},{id:4,name:"Elle"}]}}};const at=(0,l.A)(tt,[["render",et],["__scopeId","data-v-6a0ceb98"]]);var ot=at;const rt=e=>((0,r.Qi)("data-v-4108ea88"),e=e(),(0,r.jt)(),e),st={class:"profile"},nt=rt((()=>(0,r.Lk)("h1",null,"Мой профиль",-1))),it={class:"avatar"},lt=rt((()=>(0,r.Lk)("div",{class:"avatar-placeholder"},"+",-1))),dt={class:"form-group"},ct=rt((()=>(0,r.Lk)("label",{for:"email"},"e-mail",-1))),ut={class:"form-group"},pt=rt((()=>(0,r.Lk)("label",{for:"first_name"},"Имя",-1))),mt={class:"form-group"},ft=rt((()=>(0,r.Lk)("label",{for:"last_name"},"Фамилия",-1))),gt=rt((()=>(0,r.Lk)("button",{type:"submit"},"Сохранить данные",-1))),ht=rt((()=>(0,r.Lk)("h2",null,"Смена пароля",-1))),vt={class:"form-group"},kt=rt((()=>(0,r.Lk)("label",{for:"new_password"},"Старый пароль",-1))),bt={class:"form-group"},wt=rt((()=>(0,r.Lk)("label",{for:"new_password"},"Новый пароль",-1))),Lt={class:"form-group"},yt=rt((()=>(0,r.Lk)("label",{for:"confirm_password"},"Повтор пароля",-1))),_t=rt((()=>(0,r.Lk)("button",{type:"submit"},"Изменить пароль",-1))),Et={key:0},Ft={key:1};function Pt(e,t,a,s,n,i){const l=(0,r.g2)("Header-wide"),d=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(l),(0,r.Lk)("div",st,[nt,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,r.Lk)("div",it,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.uploadAvatar&&i.uploadAvatar(...e))},"Добавить аватар"),lt]),(0,r.Lk)("div",dt,[ct,(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.user.email=e),id:"email",readonly:""},null,512),[[o.Jo,n.user.email]])]),(0,r.Lk)("div",ut,[pt,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.user.first_name=e),id:"first_name"},null,512),[[o.Jo,n.user.first_name]])]),(0,r.Lk)("div",mt,[ft,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.user.last_name=e),id:"last_name"},null,512),[[o.Jo,n.user.last_name]])]),gt],32),ht,(0,r.Lk)("form",{onSubmit:t[8]||(t[8]=(0,o.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,r.Lk)("div",vt,[kt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password.old=e),id:"new_password"},null,512),[[o.Jo,n.password.old]])]),(0,r.Lk)("div",bt,[wt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=e=>n.password.new=e),id:"new_password"},null,512),[[o.Jo,n.password.new]])]),(0,r.Lk)("div",Lt,[yt,(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>n.password.confirm=e),id:"confirm_password"},null,512),[[o.Jo,n.password.confirm]])]),_t,n.error?((0,r.uX)(),(0,r.CE)("p",Et,(0,ze.v_)(n.error),1)):(0,r.Q3)("",!0),n.success?((0,r.uX)(),(0,r.CE)("p",Ft,(0,ze.v_)(n.success),1)):(0,r.Q3)("",!0)],32)]),(0,r.bF)(d)],64)}const Ct={class:"header-wide"},Ut={class:"header-content"};function Xt(e,t,a,o,s,n){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",Ct,[(0,r.Lk)("div",Ut,[(0,r.bF)(i,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Новости для вас")])),_:1}),(0,r.bF)(i,{to:"/journals"},{default:(0,r.k6)((()=>[(0,r.eW)("Мои журналы")])),_:1}),(0,r.bF)(i,{to:"/today"},{default:(0,r.k6)((()=>[(0,r.eW)("Сегодняшнее")])),_:1})])])}var St={name:"HeaderWide"};const It=(0,l.A)(St,[["render",Xt],["__scopeId","data-v-4b598fd8"]]);var Tt=It,At={name:"account",components:{HeaderWide:Tt,Footer:A},data(){return{user:{email:"",first_name:"",last_name:"",date_of_birth:""},password:{new:"",confirm:"",old:""},error:null,success:null}},created(){this.fetchProfile()},methods:{async fetchProfile(){try{const e=await y.get("/api/profile/");this.user=e.data}catch(e){console.error("Error fetching profile:",e)}},async updateProfile(){try{await y.put("/api/profile/",this.user),alert("Данные профиля обновлены")}catch(e){console.error("Error updating profile:",e)}},async changePassword(){if(this.password.new===this.password.confirm)try{const e=await y.post("/api/change-password/",{new_password:this.password.new,confirm_password:this.password.confirm,old_password:this.password.old});this.success=e.data.success,this.error=null}catch(e){this.error=e.response.data.error,this.success=null,console.error("Error changing password:",e)}else alert("Пароли не совпадают")},uploadAvatar(){}}};const zt=(0,l.A)(At,[["render",Pt],["__scopeId","data-v-4108ea88"]]);var Vt=zt;const jt=e=>((0,r.Qi)("data-v-3a8abae0"),e=e(),(0,r.jt)(),e),Jt={class:"page-container"},qt={class:"main-content"},Wt={class:"content"},$t=jt((()=>(0,r.Lk)("h2",null,"Создание публикации",-1))),xt={class:"form-group"},Ht=jt((()=>(0,r.Lk)("label",{for:"title"},"Заголовок:",-1))),Mt={class:"form-group"},Ot=jt((()=>(0,r.Lk)("label",{for:"content"},"Текст публикации:",-1))),Qt={class:"form-group"},Dt=jt((()=>(0,r.Lk)("label",{for:"preview"},"Превью:",-1))),Kt={class:"form-group"},Nt=jt((()=>(0,r.Lk)("label",{for:"tags"},"Теги:",-1))),Yt=["value"],Rt=jt((()=>(0,r.Lk)("button",{type:"submit"},"Опубликовать",-1)));function Bt(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",Jt,[(0,r.bF)(l),(0,r.Lk)("div",qt,[(0,r.bF)(d),(0,r.Lk)("div",Wt,[$t,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",xt,[Ht,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.title=e),required:""},null,512),[[o.Jo,n.title]])]),(0,r.Lk)("div",Mt,[Ot,(0,r.bo)((0,r.Lk)("textarea",{id:"content","onUpdate:modelValue":t[1]||(t[1]=e=>n.content=e),required:""},null,512),[[o.Jo,n.content]])]),(0,r.Lk)("div",Qt,[Dt,(0,r.Lk)("input",{type:"file",id:"preview",onChange:t[2]||(t[2]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32)]),(0,r.Lk)("div",Kt,[Nt,(0,r.bo)((0,r.Lk)("select",{id:"tags","onUpdate:modelValue":t[3]||(t[3]=e=>n.selectedTag=e)},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.tags,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,ze.v_)(e),9,Yt)))),128))],512),[[o.u1,n.selectedTag]])]),Rt],32)])]),(0,r.bF)(c)])}var Gt={name:"CreatePostPage",components:{Header:F,Sidebar:$,Footer:A},data(){return{title:"",content:"",selectedTag:"",tags:["Спорт","Музыка","Кино","Наука","Москва","Липецк","Воронеж","Пермь"]}},created(){this.$route.params.id&&this.fetchPost()},methods:{handleFileUpload(e){},async submitForm(){this.$route.params.id?await this.updatePost():await this.createPost()},async createPost(){try{await y.post("/api/posts/",{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error creating post:",e)}},async fetchPost(){try{const e=await y.get(`/posts/${this.$route.params.id}/`);this.post=e.data}catch(e){console.error("Error fetching post:",e)}},async updatePost(){try{await y.put(`/api/posts/${this.$route.params.id}/`,{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error updating post:",e)}}}};const Zt=(0,l.A)(Gt,[["render",Bt],["__scopeId","data-v-3a8abae0"]]);var ea=Zt;const ta=e=>((0,r.Qi)("data-v-f4c2e1c0"),e=e(),(0,r.jt)(),e),aa={class:"page-container"},oa={class:"main-content"},ra={class:"content"},sa=ta((()=>(0,r.Lk)("h2",null,"Добавить редактора",-1))),na={class:"form-group"},ia=ta((()=>(0,r.Lk)("label",{for:"name"},"Л:",-1))),la={class:"form-group"},da=ta((()=>(0,r.Lk)("label",{for:"email"},"Почта:",-1))),ca={class:"form-group"},ua=ta((()=>(0,r.Lk)("label",{for:"magazines"},"Журналы:",-1))),pa=["value"],ma=ta((()=>(0,r.Lk)("button",{type:"submit"},"Добавить",-1))),fa=ta((()=>(0,r.Lk)("h2",null,"Список редакторов",-1))),ga=ta((()=>(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Редакторы"),(0,r.Lk)("th",null,"Журналы"),(0,r.Lk)("th",null,"e-mail"),(0,r.Lk)("th",null,"Удалить")])],-1))),ha=["onClick"];function va(e,t,a,s,n,i){const l=(0,r.g2)("Header"),d=(0,r.g2)("Sidebar"),c=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",aa,[(0,r.bF)(l),(0,r.Lk)("div",oa,[(0,r.bF)(d),(0,r.Lk)("div",ra,[sa,(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>i.addEditor&&i.addEditor(...e)),["prevent"]))},[(0,r.Lk)("div",na,[ia,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.newEditor.login=e),required:""},null,512),[[o.Jo,n.newEditor.login]])]),(0,r.Lk)("div",la,[da,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.newEditor.email=e),required:""},null,512),[[o.Jo,n.newEditor.email]])]),(0,r.Lk)("div",ca,[ua,(0,r.bo)((0,r.Lk)("select",{id:"magazines","onUpdate:modelValue":t[2]||(t[2]=e=>n.newEditor.magazines=e),multiple:""},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.magazines,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e,value:e},(0,ze.v_)(e),9,pa)))),128))],512),[[o.u1,n.newEditor.magazines]])]),ma],32),fa,(0,r.Lk)("table",null,[ga,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.editors,((e,t)=>((0,r.uX)(),(0,r.CE)("tr",{key:t},[(0,r.Lk)("td",null,(0,ze.v_)(t+1)+". "+(0,ze.v_)(e.name),1),(0,r.Lk)("td",null,(0,ze.v_)(e.magazines.join(", ")),1),(0,r.Lk)("td",null,(0,ze.v_)(e.email),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{onClick:e=>i.removeEditor(t)},"Удалить",8,ha)])])))),128))])])])]),(0,r.bF)(c)])}var ka={name:"ManageEditorsPage",components:{Header:F,Sidebar:$,Footer:A},data(){return{newEditor:{name:"",email:"",magazines:[]},magazines:["7 дней","Elle","New York Times","Биография","Esquire"],editors:[{name:"Петров Иван В.",email:"petrov12@mail.ru",magazines:["7 дней","Elle"]}],users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await y.get("/users/");this.users=e.data}catch(e){console.error("Error fetching users:",e)}},async deleteUser(e){try{await y.delete(`/users/${e}/`),await this.fetchUsers()}catch(t){console.error("Error deleting user:",t)}},async addEditor(){try{await y.post("/api/editors/",{name:this.newEditor.name,email:this.newEditor.email,magazines:this.newEditor.magazines}),this.newEditor.name="",this.newEditor.email="",this.newEditor.magazines=[],await this.fetchUsers()}catch(e){console.error("Error adding editor:",e)}},async removeEditor(e){const t=this.editors[e];try{await y.delete(`/api/editors/${t.email}/`),this.editors.splice(e,1)}catch(a){console.error("Error removing editor:",a)}}}};const ba=(0,l.A)(ka,[["render",va],["__scopeId","data-v-f4c2e1c0"]]);var wa=ba;const La=[{path:"/",component:M,name:M},{path:"/signup",component:ke,name:ke},{path:"/login",component:Ae,name:Ae},{path:"/choose-tags",component:xe,name:xe},{path:"/news",component:Re,name:Re},{path:"/magazines",component:ot,name:ot},{path:"/profile",component:Vt,name:Vt},{path:"/create-post",component:ea,name:ea},{path:"/admin",component:wa,name:wa}],ya=(0,u.aE)({history:(0,u.LA)(),base:"static/",routes:La});var _a=ya;const Ea=(0,o.Ef)(c);Ea.use(_a),Ea.mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,s){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,r,s]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,n=o[0],i=o[1],l=o[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var c=l(a)}for(t&&t(o);d<n.length;d++)s=n[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(7329)}));o=a.O(o)})();
//# sourceMappingURL=app.d128b669.js.map