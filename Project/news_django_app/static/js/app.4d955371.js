(function(){"use strict";var e={899:function(e,t,a){var o=a(3751),s=a(641);const r={id:"app"};function n(e,t,a,o,n,i){const l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bF)(l)])}var i={name:"App"},l=a(6262);const d=(0,l.A)(i,[["render",n]]);var c=d,u=a(5220),g=a(33);const h=e=>((0,s.Qi)("data-v-2c6843f0"),e=e(),(0,s.jt)(),e),p={class:"news-selection-page"},m={class:"main-content"},f={class:"news-content"},k=h((()=>(0,s.Lk)("h1",null,"Новости для вас",-1))),v={class:"news-grid"},w=h((()=>(0,s.Lk)("div",{class:"news-image"},null,-1))),L={class:"news-details"},b=["onClick"];function y(e,t,a,r,n,i){const l=(0,s.g2)("Header"),d=(0,s.g2)("Sidebar"),c=(0,s.g2)("TagsList"),u=(0,s.g2)("router-link"),h=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",p,[(0,s.bF)(l),(0,s.Lk)("div",m,[(0,s.bF)(d),(0,s.Lk)("div",f,[k,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),placeholder:"Поиск по тегу"},null,512),[[o.Jo,n.searchQuery]]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.search&&i.search(...e))},"Поиск"),(0,s.bF)(c,{onUpdateTags:i.fetchNewsByTag},null,8,["onUpdateTags"]),n.isEditorOrAdmin?((0,s.uX)(),(0,s.Wv)(u,{key:0,to:"/create-post"},{default:(0,s.k6)((()=>[(0,s.eW)("Создать новость")])),_:1})):(0,s.Q3)("",!0),(0,s.Lk)("div",v,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.newsFilteredList,(e=>((0,s.uX)(),(0,s.CE)("div",{class:"news-card",key:e.id},[w,(0,s.Lk)("div",L,[(0,s.Lk)("h3",null,[(0,s.bF)(u,{to:"/news/"+e.id},{default:(0,s.k6)((()=>[(0,s.eW)((0,g.v_)(e.name),1)])),_:2},1032,["to"])])]),n.isEditorOrAdmin?((0,s.uX)(),(0,s.Wv)(u,{key:0,to:"#"},{default:(0,s.k6)((()=>[(0,s.Lk)("button",{onClick:t=>i.deletePost(e.id)},"Delete",8,b)])),_:2},1024)):(0,s.Q3)("",!0)])))),128))])])]),(0,s.bF)(h)])}a(4114);const F=e=>((0,s.Qi)("data-v-ac4f0514"),e=e(),(0,s.jt)(),e),_={class:"header"},E={class:"header-content"},T=F((()=>(0,s.Lk)("h1",null,"Мои Новости",-1)));function C(e,t,a,o,r,n){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",_,[(0,s.Lk)("div",E,[T,(0,s.Lk)("nav",null,[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>[(0,s.eW)("Новости для вас")])),_:1}),(0,s.bF)(i,{to:"/magazines"},{default:(0,s.k6)((()=>[(0,s.eW)("Журналы")])),_:1}),(0,s.bF)(i,{to:"/choose-tags"},{default:(0,s.k6)((()=>[(0,s.eW)("Выбор тегов")])),_:1}),n.isLoggedIn()?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(i,{key:0,to:"/signup"},{default:(0,s.k6)((()=>[(0,s.eW)("Регистрация")])),_:1})),n.isLoggedIn()?((0,s.uX)(),(0,s.Wv)(i,{key:1,to:"/profile",class:"account-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Мой аккаунт")])),_:1})):(0,s.Q3)("",!0),n.isLoggedIn()?((0,s.uX)(),(0,s.CE)("button",{key:2,onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},"Выйти")):(0,s.Q3)("",!0)])])])}var z=a(4335);const I=z.A.create({baseURL:"http://localhost:8080/api",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});function P(e){let t=null;if(document.cookie&&""!==document.cookie){const a=document.cookie.split(";");for(let o=0;o<a.length;o++){const s=a[o].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}}return t}I.interceptors.request.use((e=>{if(!e.url.includes("/posts")){const t=localStorage.getItem("authToken");t&&(e.headers.Authorization=`Token ${t}`)}return e}),(e=>Promise.reject(e)));var S={getTags(){return console.log("Получение тегов"),I.get("/tags",{withCredentials:!0})},getNews(){return console.log("Получение новостей"),I.get("/posts",{withCredentials:!0})},getNewsById(e){return console.log(`Получение новости с ID: ${e}`),I.get(`/posts/${e}/`,{withCredentials:!0})},async getNewsByTags(e){return await z.A.get("/posts/",{params:{tags:e.join(",")}})},getMagazines(){return console.log("Получение журналов"),I.get("/magazines",{withCredentials:!0})},getMagazinesById(e){return console.log(`Получение журнала с ID: ${e}`),I.get(`/magazines/${e}/`,{withCredentials:!0})},getUserProfile(){return console.log("Получение профиля"),I.get("/users/profile/")},login(e){console.log("Отправка данных для входа:",e);const t=P("csrftoken");return I.post("/login/",e,{headers:{"X-CSRFToken":t}})}},A={name:"Header",data(){return{userProfile:null}},mounted(){const e=localStorage.getItem("authToken");this.isLoggedIn=!!e,e?(S.defaults.headers.common["Authorization"]=`Bearer ${e}`,S.getUserProfile().then((e=>{this.userProfile=e.data})).catch((e=>{console.error("Ошибка при загрузке профиля:",e)}))):console.log("Пользователь не авторизован.")},methods:{isLoggedIn(){return!!localStorage.getItem("authToken")},logout(){localStorage.removeItem("authToken"),co.push({path:"/"}).then((()=>{window.location.reload()}))}}};const X=(0,l.A)(A,[["render",C],["__scopeId","data-v-ac4f0514"]]);var U=X;const $=e=>((0,s.Qi)("data-v-00b101d0"),e=e(),(0,s.jt)(),e),Q={class:"footer"},W={class:"footer-content"},M=$((()=>(0,s.Lk)("a",{href:"mailto:your-email@example.com"},"Контакты",-1)));function q(e,t,a,o,r,n){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("footer",Q,[(0,s.Lk)("div",W,[(0,s.bF)(i,{to:"/about"},{default:(0,s.k6)((()=>[(0,s.eW)("О нас")])),_:1}),(0,s.bF)(i,{to:"/help"},{default:(0,s.k6)((()=>[(0,s.eW)("Помощь")])),_:1}),M])])}var N={name:"Footer"};const J=(0,l.A)(N,[["render",q],["__scopeId","data-v-00b101d0"]]);var O=J;const j=e=>((0,s.Qi)("data-v-dce1eb9a"),e=e(),(0,s.jt)(),e),V={class:"sidebar"},x=j((()=>(0,s.Lk)("h3",null,"Мои новости",-1))),H=(0,s.Fv)("<h4 data-v-dce1eb9a>Избранные теги</h4><ul data-v-dce1eb9a><li data-v-dce1eb9a>Спорт</li><li data-v-dce1eb9a>Музыка</li><li data-v-dce1eb9a>Кино</li><li data-v-dce1eb9a>Наука</li></ul><h4 data-v-dce1eb9a>Местные новости</h4><ul data-v-dce1eb9a><li data-v-dce1eb9a>Москва</li><li data-v-dce1eb9a>Липецк</li><li data-v-dce1eb9a>Воронеж</li><li data-v-dce1eb9a>Пермь</li></ul>",4),D={key:0},B={key:1},K={key:2},R=j((()=>(0,s.Lk)("li",null,"New York Times",-1))),Y=j((()=>(0,s.Lk)("li",null,"Биография",-1))),G=j((()=>(0,s.Lk)("li",null,"Esquire",-1))),Z=j((()=>(0,s.Lk)("li",null,"Elle",-1))),ee=[R,Y,G,Z];function te(e,t,a,o,r,n){return(0,s.uX)(),(0,s.CE)("aside",V,[x,(0,s.Lk)("nav",null,[H,n.isLoggedIn()?((0,s.uX)(),(0,s.CE)("h4",D,"Мои журналы")):(0,s.Q3)("",!0),n.isLoggedIn()?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("h4",B,"Зарегистрируйтесь для получения доступа к журналам")),n.isLoggedIn()?((0,s.uX)(),(0,s.CE)("ul",K,ee)):(0,s.Q3)("",!0)])])}var ae={name:"Sidebar",methods:{isLoggedIn(){return!!localStorage.getItem("authToken")}}};const oe=(0,l.A)(ae,[["render",te],["__scopeId","data-v-dce1eb9a"]]);var se=oe;const re={class:"tags-list"};function ne(e,t,a,o,r,n){return(0,s.uX)(),(0,s.CE)("div",re,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.selectedTags,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,g.C4)(["tag",{selected:n.isSelected(e)}]),key:t},(0,g.v_)(e.tag_name)+"/"+(0,g.v_)(e.category),3)))),128))])}var ie=a(8987),le={name:"TagsList",data(){return{tags:[],selectedTags:[]}},async mounted(){try{const e=await S.getTags();this.tags=e.data,this.selectedTags=this.getSavedTags(),console.log("Selected tags: ",this.selectedTags),this.$emit("update-tags",this.selectedTags)}catch(e){console.error("Ошибка при получении тегов:",e)}},methods:{isSelected(e){return this.selectedTags.includes(e)},getSavedTags(){const e=ie.A.get("selectedTags");return e?JSON.parse(e):[]}}};const de=(0,l.A)(le,[["render",ne],["__scopeId","data-v-8461fa00"]]);var ce=de,ue={name:"NewsSelectionPage",components:{TagsList:ce,Sidebar:se,Footer:O,Header:U},data(){return{newsList:[],selectedTags:[],newsFilteredList:[],searchQuery:"",userProfile:null,isEditorOrAdmin:!1}},created(){this.fetchUserProfile(),this.fetchNews()},watch:{"$route.query.q":{immediate:!0,handler(e){e?(this.searchQuery=e,this.fetchNewsByTag(e)):this.fetchNews()}}},methods:{async fetchUserProfile(){const e=localStorage.getItem("authToken");if(e){console.log("Fetching user profile with token:",e);try{const e=await S.getUserProfile();this.userProfile=e.data,console.log(this.userProfile.role),"Admin"!==this.userProfile.role&&"Editor"!==this.userProfile.role||(this.isEditorOrAdmin=!0)}catch(t){console.error("Ошибка при загрузке профиля:",t)}}else console.log("Пользователь не авторизован.")},isLoggedIn(){return!!localStorage.getItem("authToken")},async fetchNews(){try{const e=await S.getNews();this.newsList=e.data,console.log("Fetched news: ",e.data),this.newsList.forEach((e=>{console.log("News ID:",e.id)}))}catch(e){console.error("Error fetching news:",e)}},async fetchNewsByTag(e){if(console.log("Fetching news by tag..."),console.log("Selected tags:",e),e&&0!==e.length)try{this.newsFilteredList=this.newsList.filter((t=>e.every((e=>t.tags.includes(e))))),console.log("Fetched news by tag: ",this.newsFilteredList)}catch(t){console.error("Error fetching news by tag:",t)}else{console.log("No tags, fetching news...");const e=await S.getNews();this.newsList=e.data,this.newsFilteredList=this.newsList,console.log("Fetched news by tag: ",this.newsFilteredList)}},search(){co.push({path:"/",query:{q:this.searchQuery}})},async deletePost(e){try{await S.delete(`/posts/${e}/`),await this.fetchNews()}catch(t){console.error("Error deleting post:",t)}}}};const ge=(0,l.A)(ue,[["render",y],["__scopeId","data-v-2c6843f0"]]);var he=ge;const pe=e=>((0,s.Qi)("data-v-5607d629"),e=e(),(0,s.jt)(),e),me={class:"registration-page"},fe={class:"registration-form"},ke=pe((()=>(0,s.Lk)("h2",null,"Регистрация",-1))),ve={class:"form-group"},we=pe((()=>(0,s.Lk)("label",{for:"name"},"Имя пользователя",-1))),Le={class:"form-group"},be=pe((()=>(0,s.Lk)("label",{for:"surname"},"Фамилия пользователя",-1))),ye={class:"patronymic"},Fe=pe((()=>(0,s.Lk)("label",{for:"username"},"Отчество пользователя",-1))),_e={class:"form-group"},Ee=pe((()=>(0,s.Lk)("label",{for:"login"},"Логин",-1))),Te={class:"form-group"},Ce=pe((()=>(0,s.Lk)("label",{for:"email"},"Почта",-1))),ze={class:"form-group"},Ie=pe((()=>(0,s.Lk)("label",{for:"password"},"Пароль",-1))),Pe={class:"form-group"},Se=pe((()=>(0,s.Lk)("label",{for:"confirmPassword"},"Повторите пароль",-1))),Ae={class:"form-group"},Xe={key:0,class:"password-match"},Ue={key:1,class:"password-no-match"},$e=["disabled"],Qe=pe((()=>(0,s.Lk)("div",{class:"form-group"},[(0,s.Lk)("label",{for:"confirmPassword"},"Повторите пароль")],-1))),We={class:"form-group"},Me={for:"confirmPassword"},qe={class:"form-group"};function Ne(e,t,a,r,n,i){const l=(0,s.g2)("router-link"),d=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",me,[(0,s.Lk)("div",fe,[ke,(0,s.Lk)("form",{onSubmit:t[7]||(t[7]=(0,o.D$)(((...e)=>i.register&&i.register(...e)),["prevent"]))},[(0,s.Lk)("div",ve,[we,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[o.Jo,n.name]])]),(0,s.Lk)("div",Le,[be,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"surname","onUpdate:modelValue":t[1]||(t[1]=e=>n.surname=e),required:""},null,512),[[o.Jo,n.surname]])]),(0,s.Lk)("div",ye,[Fe,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"patronymic","onUpdate:modelValue":t[2]||(t[2]=e=>n.patronymic=e),required:""},null,512),[[o.Jo,n.patronymic]])]),(0,s.Lk)("div",_e,[Ee,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"login","onUpdate:modelValue":t[3]||(t[3]=e=>n.login=e),required:""},null,512),[[o.Jo,n.login]])]),(0,s.Lk)("div",Te,[Ce,(0,s.bo)((0,s.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>n.email=e),required:""},null,512),[[o.Jo,n.email]])]),(0,s.Lk)("div",ze,[Ie,(0,s.bo)((0,s.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),(0,s.Lk)("div",Pe,[Se,(0,s.bo)((0,s.Lk)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[6]||(t[6]=e=>n.confirmPassword=e),required:""},null,512),[[o.Jo,n.confirmPassword]])]),(0,s.Lk)("div",Ae,[n.passwordsMatch?((0,s.uX)(),(0,s.CE)("p",Xe,"Пароли совпадают")):((0,s.uX)(),(0,s.CE)("p",Ue,"Пароли не совпадают"))]),(0,s.Lk)("button",{type:"submit",disabled:!n.passwordsMatch},"Зарегистрироваться",8,$e),Qe,(0,s.Lk)("div",We,[(0,s.Lk)("label",Me,[(0,s.eW)("Есть аккаунт? "),(0,s.bF)(l,{to:"/login"},{default:(0,s.k6)((()=>[(0,s.eW)("Авторизироваться")])),_:1})])]),(0,s.Lk)("div",qe,[(0,s.bF)(l,{to:"/"},{default:(0,s.k6)((()=>[(0,s.eW)("На главную")])),_:1})])],32)]),(0,s.bF)(d)])}var Je={name:"Registration",components:{Footer:O},data(){return{name:"",surname:"",patronymic:"",login:"",email:"",password:"",confirmPassword:"",passwordsMatch:!0}},watch:{password(){this.checkPasswordsMatch()},confirmPassword(){this.checkPasswordsMatch()}},methods:{checkPasswordsMatch(){this.passwordsMatch=this.password===this.confirmPassword},isLoggedIn(){return!!localStorage.getItem("authToken")},async register(){try{const e=await z.A.post("api/register/",{name:this.name,surname:this.surname,patronymic:this.patronymic,mail:this.email,login:this.login,password:this.password,confirm_password:this.confirmPassword});console.log("User registered:",e.data),localStorage.setItem("authToken",e.data.token),await co.push({path:"/"}),window.location.reload()}catch(e){console.error("Error registering user:",e)}}}};const Oe=(0,l.A)(Je,[["render",Ne],["__scopeId","data-v-5607d629"]]);var je=Oe;const Ve=e=>((0,s.Qi)("data-v-1d33100c"),e=e(),(0,s.jt)(),e),xe={class:"login-page"},He={class:"login-form"},De=Ve((()=>(0,s.Lk)("h2",null,"Вход",-1))),Be={class:"form-group"},Ke=Ve((()=>(0,s.Lk)("label",{for:"username"},"Логин",-1))),Re={class:"form-group"},Ye=Ve((()=>(0,s.Lk)("label",{for:"password"},"Пароль",-1))),Ge=Ve((()=>(0,s.Lk)("button",{type:"submit"},"Войти",-1))),Ze={class:"form-group"},et={for:"signup"},tt={class:"form-group"};function at(e,t,a,r,n,i){const l=(0,s.g2)("router-link"),d=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",xe,[(0,s.Lk)("div",He,[De,(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,s.Lk)("div",Be,[Ke,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),required:""},null,512),[[o.Jo,n.username]])]),(0,s.Lk)("div",Re,[Ye,(0,s.bo)((0,s.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),required:""},null,512),[[o.Jo,n.password]])]),Ge,(0,s.Lk)("div",Ze,[(0,s.Lk)("label",et,[(0,s.eW)("Нет аккаунта? "),(0,s.bF)(l,{to:"/signup"},{default:(0,s.k6)((()=>[(0,s.eW)("Зарегистрироваться")])),_:1})])]),(0,s.Lk)("div",tt,[(0,s.bF)(l,{to:"/"},{default:(0,s.k6)((()=>[(0,s.eW)("На главную")])),_:1})])],32)]),(0,s.bF)(d)])}var ot={name:"LoginPage",data(){return{username:"",password:""}},components:{Footer:O},methods:{getCookie(e){let t=null;if(document.cookie&&""!==document.cookie){const a=document.cookie.split(";");for(let o=0;o<a.length;o++){const s=a[o].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}}return t},async login(){try{console.log("Запуск скрипта..."),z.A.defaults.headers.common["X-CSRFToken"]=this.getCookie("csrftoken"),console.log("Получение заголовка...");const e=S.login({username:this.username,password:this.password});return console.log("Получение ответа от сервера..."),localStorage.setItem("authToken",e.data.token),z.A.defaults.headers.common["Authorization"]=`Token ${e.data.token}`,console.log("Токен:",localStorage.getItem("authToken")),await co.push({path:"/"}),window.location.reload(),e}catch(e){console.error("Ошибка при входе в аккаунт:",e.response?e.response.data:e.message)}}}};const st=(0,l.A)(ot,[["render",at],["__scopeId","data-v-1d33100c"]]);var rt=st;const nt={class:"tags-page"},it={class:"tags-container"},lt=["onClick"];function dt(e,t,a,o,r,n){const i=(0,s.g2)("HeaderWide"),l=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(i),(0,s.Lk)("div",nt,[(0,s.Lk)("div",it,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.tags,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,g.C4)(["tag",{selected:n.isSelected(e)}]),key:t,onClick:t=>n.toggleTag(e)},(0,g.v_)(e.tag_name)+"/"+(0,g.v_)(e.category),11,lt)))),128))]),(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.clearAllTags&&n.clearAllTags(...e)),class:"clear-tags-button"},"Удалить все теги"),(0,s.bF)(l)])],64)}const ct={class:"header-wide"},ut={class:"header-content"};function gt(e,t,a,o,r,n){const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",ct,[(0,s.Lk)("div",ut,[(0,s.bF)(i,{to:"/"},{default:(0,s.k6)((()=>[(0,s.eW)("Новости для вас")])),_:1}),(0,s.bF)(i,{to:"/magazines"},{default:(0,s.k6)((()=>[(0,s.eW)("Мои журналы")])),_:1}),(0,s.bF)(i,{to:"/choose-tags"},{default:(0,s.k6)((()=>[(0,s.eW)("Выбор тегов")])),_:1})])])}var ht={name:"HeaderWide"};const pt=(0,l.A)(ht,[["render",gt],["__scopeId","data-v-7d27f29a"]]);var mt=pt,ft={name:"Tags",components:{HeaderWide:mt,Footer:O},data(){return{tags:[],selectedTags:[]}},async mounted(){try{const e=await S.getTags();e.data&&Array.isArray(e.data)?(this.tags=e.data,console.log("Fetched tags:",this.tags),this.selectedTags=this.getSavedTags(),console.log("Loaded saved tags:",this.selectedTags)):console.error("Invalid tags data format:",e.data)}catch(e){console.error("Error fetching tags:",e)}},methods:{toggleTag(e){const t=this.selectedTags.findIndex((t=>t.tag_name===e.tag_name&&t.category===e.category));-1!==t?(this.selectedTags.splice(t,1),console.log(`Tag ${e} removed. Selected tags:`,this.selectedTags)):(this.selectedTags.push(e),console.log(`Tag ${e} added. Selected tags:`,this.selectedTags)),this.saveTags(this.selectedTags),this.$emit("update-tags",this.selectedTags)},isSelected(e){return this.selectedTags.some((t=>t.tag_name===e.tag_name&&t.category===e.category))},getSavedTags(){try{const e=ie.A.get("selectedTags");if(e){const t=JSON.parse(e);return Array.isArray(t)?t:(console.error("Saved tags format is invalid:",e),[])}}catch(e){console.error("Error parsing saved tags from cookies:",e)}return[]},saveTags(e){try{ie.A.set("selectedTags",JSON.stringify(e),{expires:7}),console.log("Selected tags saved to cookies:",e)}catch(t){console.error("Error saving tags to cookies:",t)}},clearAllTags(){this.selectedTags=[],this.saveTags(this.selectedTags),this.$emit("update-tags",this.selectedTags)}}};const kt=(0,l.A)(ft,[["render",dt],["__scopeId","data-v-3ada623e"]]);var vt=kt;const wt={class:"page-container"},Lt={class:"main-content"},bt={class:"news-list"},yt={key:0},Ft=["href"];function _t(e,t,a,o,r,n){const i=(0,s.g2)("Header"),l=(0,s.g2)("Sidebar"),d=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",wt,[(0,s.bF)(i),(0,s.Lk)("div",Lt,[(0,s.bF)(l),(0,s.Lk)("div",bt,[(0,s.Lk)("div",null,[(0,s.Lk)("h1",null,(0,g.v_)(r.news.name||"Loading..."),1),(0,s.Lk)("p",null,(0,g.v_)(r.news.description||"Loading description..."),1),r.news.file?((0,s.uX)(),(0,s.CE)("div",yt,[(0,s.Lk)("a",{href:r.news.file,target:"_blank"},"Download File",8,Ft)])):(0,s.Q3)("",!0)])])]),(0,s.bF)(d)])}var Et={name:"NewsDetail",components:{Header:U,Sidebar:se,Footer:O},created(){this.fetchNews()},props:{id:{type:String,required:!0}},data(){return{news:{}}},methods:{async fetchNews(){const e=this.$route.params.id;console.log("Fetching news with ID:",e);try{const t=await S.getNewsById(e);this.news=t.data}catch(t){console.error("Ошибка при загрузке новости:",t)}}}};const Tt=(0,l.A)(Et,[["render",_t],["__scopeId","data-v-5cf39e48"]]);var Ct=Tt;const zt=e=>((0,s.Qi)("data-v-0c27c76c"),e=e(),(0,s.jt)(),e),It={class:"page-container"},Pt={class:"main-content"},St={class:"magazines-list"},At=zt((()=>(0,s.Lk)("h1",null,"Журналы для вас",-1))),Xt={class:"magazines-grid"},Ut=zt((()=>(0,s.Lk)("div",{class:"magazine-image"},null,-1))),$t={class:"magazine-details"},Qt=["onClick"];function Wt(e,t,a,r,n,i){const l=(0,s.g2)("Header"),d=(0,s.g2)("Sidebar"),c=(0,s.g2)("TagsList"),u=(0,s.g2)("router-link"),h=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",It,[(0,s.bF)(l),(0,s.Lk)("div",Pt,[(0,s.bF)(d),(0,s.Lk)("div",St,[At,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),placeholder:"Поиск по тегу"},null,512),[[o.Jo,n.searchQuery]]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.search&&i.search(...e))},"Поиск"),(0,s.bF)(c,{onTagSelected:i.fetchMagazinesByTag},null,8,["onTagSelected"]),n.isEditorOrAdmin?((0,s.uX)(),(0,s.Wv)(u,{key:0,to:"/create-post"},{default:(0,s.k6)((()=>[(0,s.eW)("Создать журнал")])),_:1})):(0,s.Q3)("",!0),(0,s.Lk)("div",Xt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.magazineList,(e=>((0,s.uX)(),(0,s.CE)("div",{class:"magazine-card",key:e.id},[Ut,(0,s.Lk)("div",$t,[(0,s.Lk)("h3",null,[(0,s.bF)(u,{to:"/magazine/"+e.id},{default:(0,s.k6)((()=>[(0,s.eW)((0,g.v_)(e.name),1)])),_:2},1032,["to"])])]),n.isEditorOrAdmin?((0,s.uX)(),(0,s.Wv)(u,{key:0,to:"#"},{default:(0,s.k6)((()=>[(0,s.Lk)("button",{onClick:t=>i.deleteMagazine(e.id)},"Delete",8,Qt)])),_:2},1024)):(0,s.Q3)("",!0)])))),128))])])]),(0,s.bF)(h)])}var Mt={name:"MagazinesPage",components:{Header:U,Sidebar:se,Footer:O},data(){return{magazineList:[],searchQuery:"",userProfile:null,isEditorOrAdmin:!1}},created(){this.fetchUserProfile(),this.fetchMagazines()},watch:{"$route.query.q":{immediate:!0,handler(e){e?(this.searchQuery=e,this.fetchMagazinesByTag(e)):this.fetchMagazines()}}},methods:{async fetchUserProfile(){const e=localStorage.getItem("authToken");if(e){console.log("Fetching user profile with token:",e);try{const e=await S.getUserProfile();this.userProfile=e.data,console.log(this.userProfile.role),"Admin"!==this.userProfile.role&&"Editor"!==this.userProfile.role||(this.isEditorOrAdmin=!0)}catch(t){console.error("Ошибка при загрузке профиля:",t)}}else console.log("Пользователь не авторизован.")},isLoggedIn(){return!!localStorage.getItem("authToken")},async fetchMagazines(){try{const e=await S.getMagazines();this.magazineList=e.data,console.log("Fetched magazines: ",e.data),this.magazineList.forEach((e=>{console.log("News ID:",e.id)}))}catch(e){console.error("Error fetching news:",e)}},async fetchMagazinesByTag(e){try{const t=await S.get(`/magazines/tag/${e}/`);this.magazineList=t.data,console.log("Fetched news by tag: ",t.data)}catch(t){console.error("Error fetching news by tag:",t)}},search(){co.push({path:"/",query:{q:this.searchQuery}})},async deleteMagazine(e){try{await S.delete(`/magazines/${e}/`),await this.fetchMagazines()}catch(t){console.error("Error deleting magazine:",t)}}}};const qt=(0,l.A)(Mt,[["render",Wt],["__scopeId","data-v-0c27c76c"]]);var Nt=qt;const Jt=e=>((0,s.Qi)("data-v-72eaf60e"),e=e(),(0,s.jt)(),e),Ot={class:"profile"},jt=Jt((()=>(0,s.Lk)("h1",null,"Мой профиль",-1))),Vt={class:"avatar"},xt=Jt((()=>(0,s.Lk)("div",{class:"avatar-placeholder"},"+",-1))),Ht={class:"form-group"},Dt=Jt((()=>(0,s.Lk)("label",{for:"email"},"e-mail",-1))),Bt={class:"form-group"},Kt=Jt((()=>(0,s.Lk)("label",{for:"first_name"},"Имя",-1))),Rt={class:"form-group"},Yt=Jt((()=>(0,s.Lk)("label",{for:"last_name"},"Фамилия",-1))),Gt=Jt((()=>(0,s.Lk)("button",{type:"submit"},"Сохранить данные",-1))),Zt=Jt((()=>(0,s.Lk)("h2",null,"Смена пароля",-1))),ea={class:"form-group"},ta=Jt((()=>(0,s.Lk)("label",{for:"new_password"},"Старый пароль",-1))),aa={class:"form-group"},oa=Jt((()=>(0,s.Lk)("label",{for:"new_password"},"Новый пароль",-1))),sa={class:"form-group"},ra=Jt((()=>(0,s.Lk)("label",{for:"confirm_password"},"Повтор пароля",-1))),na=Jt((()=>(0,s.Lk)("button",{type:"submit"},"Изменить пароль",-1))),ia={key:0},la={key:1};function da(e,t,a,r,n,i){const l=(0,s.g2)("Header-wide"),d=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(l),(0,s.Lk)("div",Ot,[jt,(0,s.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.updateProfile&&i.updateProfile(...e)),["prevent"]))},[(0,s.Lk)("div",Vt,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.uploadAvatar&&i.uploadAvatar(...e))},"Добавить аватар"),xt]),(0,s.Lk)("div",Ht,[Dt,(0,s.bo)((0,s.Lk)("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.user.email=e),id:"email",readonly:""},null,512),[[o.Jo,n.user.email]])]),(0,s.Lk)("div",Bt,[Kt,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>n.user.first_name=e),id:"first_name"},null,512),[[o.Jo,n.user.first_name]])]),(0,s.Lk)("div",Rt,[Yt,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>n.user.last_name=e),id:"last_name"},null,512),[[o.Jo,n.user.last_name]])]),Gt],32),Zt,(0,s.Lk)("form",{onSubmit:t[8]||(t[8]=(0,o.D$)(((...e)=>i.changePassword&&i.changePassword(...e)),["prevent"]))},[(0,s.Lk)("div",ea,[ta,(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.password.old=e),id:"new_password"},null,512),[[o.Jo,n.password.old]])]),(0,s.Lk)("div",aa,[oa,(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=e=>n.password.new=e),id:"new_password"},null,512),[[o.Jo,n.password.new]])]),(0,s.Lk)("div",sa,[ra,(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[7]||(t[7]=e=>n.password.confirm=e),id:"confirm_password"},null,512),[[o.Jo,n.password.confirm]])]),na,n.error?((0,s.uX)(),(0,s.CE)("p",ia,(0,g.v_)(n.error),1)):(0,s.Q3)("",!0),n.success?((0,s.uX)(),(0,s.CE)("p",la,(0,g.v_)(n.success),1)):(0,s.Q3)("",!0)],32)]),(0,s.bF)(d)],64)}var ca={name:"account",components:{HeaderWide:mt,Footer:O},data(){return{user:{email:"",first_name:"",last_name:"",date_of_birth:""},password:{new:"",confirm:"",old:""},error:null,success:null}},created(){this.fetchProfile()},methods:{async fetchProfile(){try{const e=await S.get("/api/profile/");this.user=e.data}catch(e){console.error("Error fetching profile:",e)}},async updateProfile(){try{await S.put("/api/profile/",this.user),alert("Данные профиля обновлены")}catch(e){console.error("Error updating profile:",e)}},async changePassword(){if(this.password.new===this.password.confirm)try{const e=await S.post("/api/change-password/",{new_password:this.password.new,confirm_password:this.password.confirm,old_password:this.password.old});this.success=e.data.success,this.error=null}catch(e){this.error=e.response.data.error,this.success=null,console.error("Error changing password:",e)}else alert("Пароли не совпадают")},uploadAvatar(){}}};const ua=(0,l.A)(ca,[["render",da],["__scopeId","data-v-72eaf60e"]]);var ga=ua;const ha=e=>((0,s.Qi)("data-v-c4e5ec5a"),e=e(),(0,s.jt)(),e),pa={class:"page-container"},ma={class:"main-content"},fa={class:"content"},ka=ha((()=>(0,s.Lk)("h2",null,"Создание публикации",-1))),va={class:"form-group"},wa=ha((()=>(0,s.Lk)("label",{for:"title"},"Заголовок:",-1))),La={class:"form-group"},ba=ha((()=>(0,s.Lk)("label",{for:"content"},"Текст публикации:",-1))),ya={class:"form-group"},Fa=ha((()=>(0,s.Lk)("label",{for:"preview"},"Превью:",-1))),_a={class:"form-group"},Ea=ha((()=>(0,s.Lk)("label",{for:"tags"},"Теги:",-1))),Ta=["value"],Ca=ha((()=>(0,s.Lk)("button",{type:"submit"},"Опубликовать",-1)));function za(e,t,a,r,n,i){const l=(0,s.g2)("Header"),d=(0,s.g2)("Sidebar"),c=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",pa,[(0,s.bF)(l),(0,s.Lk)("div",ma,[(0,s.bF)(d),(0,s.Lk)("div",fa,[ka,(0,s.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.submitForm&&i.submitForm(...e)),["prevent"]))},[(0,s.Lk)("div",va,[wa,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.title=e),required:""},null,512),[[o.Jo,n.title]])]),(0,s.Lk)("div",La,[ba,(0,s.bo)((0,s.Lk)("textarea",{id:"content","onUpdate:modelValue":t[1]||(t[1]=e=>n.content=e),required:""},null,512),[[o.Jo,n.content]])]),(0,s.Lk)("div",ya,[Fa,(0,s.Lk)("input",{type:"file",id:"preview",onChange:t[2]||(t[2]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,32)]),(0,s.Lk)("div",_a,[Ea,(0,s.bo)((0,s.Lk)("select",{id:"tags","onUpdate:modelValue":t[3]||(t[3]=e=>n.selectedTag=e)},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.tags,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e,value:e},(0,g.v_)(e),9,Ta)))),128))],512),[[o.u1,n.selectedTag]])]),Ca],32)])]),(0,s.bF)(c)])}var Ia={name:"CreatePostPage",components:{Header:U,Sidebar:se,Footer:O},data(){return{title:"",content:"",selectedTag:"",tags:["Спорт","Музыка","Кино","Наука","Москва","Липецк","Воронеж","Пермь"]}},created(){this.$route.params.id&&this.fetchPost()},methods:{handleFileUpload(e){},async submitForm(){this.$route.params.id?await this.updatePost():await this.createPost()},async createPost(){try{await S.post("/api/posts/",{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error creating post:",e)}},async fetchPost(){try{const e=await S.get(`/posts/${this.$route.params.id}/`);this.post=e.data}catch(e){console.error("Error fetching post:",e)}},async updatePost(){try{await S.put(`/api/posts/${this.$route.params.id}/`,{title:this.title,content:this.content,selectedTag:this.selectedTag}),this.$router.push("/")}catch(e){console.error("Error updating post:",e)}}}};const Pa=(0,l.A)(Ia,[["render",za],["__scopeId","data-v-c4e5ec5a"]]);var Sa=Pa;const Aa=e=>((0,s.Qi)("data-v-22b56a0d"),e=e(),(0,s.jt)(),e),Xa={class:"page-container"},Ua={class:"main-content"},$a={class:"content"},Qa=Aa((()=>(0,s.Lk)("h2",null,"Добавить редактора",-1))),Wa={class:"form-group"},Ma=Aa((()=>(0,s.Lk)("label",{for:"name"},"Л:",-1))),qa={class:"form-group"},Na=Aa((()=>(0,s.Lk)("label",{for:"email"},"Почта:",-1))),Ja={class:"form-group"},Oa=Aa((()=>(0,s.Lk)("label",{for:"magazines"},"Журналы:",-1))),ja=["value"],Va=Aa((()=>(0,s.Lk)("button",{type:"submit"},"Добавить",-1))),xa=Aa((()=>(0,s.Lk)("h2",null,"Список редакторов",-1))),Ha=Aa((()=>(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Редакторы"),(0,s.Lk)("th",null,"Журналы"),(0,s.Lk)("th",null,"e-mail"),(0,s.Lk)("th",null,"Удалить")])],-1))),Da=["onClick"];function Ba(e,t,a,r,n,i){const l=(0,s.g2)("Header"),d=(0,s.g2)("Sidebar"),c=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",Xa,[(0,s.bF)(l),(0,s.Lk)("div",Ua,[(0,s.bF)(d),(0,s.Lk)("div",$a,[Qa,(0,s.Lk)("form",{onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>i.addEditor&&i.addEditor(...e)),["prevent"]))},[(0,s.Lk)("div",Wa,[Ma,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.newEditor.login=e),required:""},null,512),[[o.Jo,n.newEditor.login]])]),(0,s.Lk)("div",qa,[Na,(0,s.bo)((0,s.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.newEditor.email=e),required:""},null,512),[[o.Jo,n.newEditor.email]])]),(0,s.Lk)("div",Ja,[Oa,(0,s.bo)((0,s.Lk)("select",{id:"magazines","onUpdate:modelValue":t[2]||(t[2]=e=>n.newEditor.magazines=e),multiple:""},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.magazines,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e,value:e},(0,g.v_)(e),9,ja)))),128))],512),[[o.u1,n.newEditor.magazines]])]),Va],32),xa,(0,s.Lk)("table",null,[Ha,(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.editors,((e,t)=>((0,s.uX)(),(0,s.CE)("tr",{key:t},[(0,s.Lk)("td",null,(0,g.v_)(t+1)+". "+(0,g.v_)(e.name),1),(0,s.Lk)("td",null,(0,g.v_)(e.magazines.join(", ")),1),(0,s.Lk)("td",null,(0,g.v_)(e.email),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{onClick:e=>i.removeEditor(t)},"Удалить",8,Da)])])))),128))])])])]),(0,s.bF)(c)])}var Ka={name:"ManageEditorsPage",components:{Header:U,Sidebar:se,Footer:O},data(){return{newEditor:{name:"",email:"",magazines:[]},magazines:["7 дней","Elle","New York Times","Биография","Esquire"],editors:[{name:"Петров Иван В.",email:"petrov12@mail.ru",magazines:["7 дней","Elle"]}],users:[]}},created(){this.fetchUsers()},methods:{async fetchUsers(){try{const e=await S.get("/users/");this.users=e.data}catch(e){console.error("Error fetching users:",e)}},async deleteUser(e){try{await S.delete(`/users/${e}/`),await this.fetchUsers()}catch(t){console.error("Error deleting user:",t)}},async addEditor(){try{await S.post("/api/editors/",{name:this.newEditor.name,email:this.newEditor.email,magazines:this.newEditor.magazines}),this.newEditor.name="",this.newEditor.email="",this.newEditor.magazines=[],await this.fetchUsers()}catch(e){console.error("Error adding editor:",e)}},async removeEditor(e){const t=this.editors[e];try{await S.delete(`/api/editors/${t.email}/`),this.editors.splice(e,1)}catch(a){console.error("Error removing editor:",a)}}}};const Ra=(0,l.A)(Ka,[["render",Ba],["__scopeId","data-v-22b56a0d"]]);var Ya=Ra;const Ga={class:"page-container"},Za={class:"main-content"},eo={class:"magazines-list"},to={key:0},ao=["href"];function oo(e,t,a,o,r,n){const i=(0,s.g2)("Header"),l=(0,s.g2)("Sidebar"),d=(0,s.g2)("Footer");return(0,s.uX)(),(0,s.CE)("div",Ga,[(0,s.bF)(i),(0,s.Lk)("div",Za,[(0,s.bF)(l),(0,s.Lk)("div",eo,[(0,s.Lk)("div",null,[(0,s.Lk)("h1",null,(0,g.v_)(r.magazine.name||"Loading..."),1),(0,s.Lk)("p",null,(0,g.v_)(r.magazine.description||"Loading description..."),1),r.magazine.file?((0,s.uX)(),(0,s.CE)("div",to,[(0,s.Lk)("a",{href:r.magazine.file,target:"_blank"},"Download File",8,ao)])):(0,s.Q3)("",!0)])])]),(0,s.bF)(d)])}var so={name:"MagazinesPage",components:{Header:U,Sidebar:se,Footer:O},created(){this.fetchMagazines()},props:{id:{type:String,required:!0}},data(){return{magazine:{}}},methods:{async fetchMagazines(){const e=this.$route.params.id;console.log("Fetching magazine with ID:",e);try{const t=await S.getMagazinesById(e);this.magazine=t.data}catch(t){console.error("Ошибка при загрузке журнала:",t)}}}};const ro=(0,l.A)(so,[["render",oo],["__scopeId","data-v-5e81f0ec"]]);var no=ro;const io=[{path:"/",component:he,name:he},{path:"/signup",component:je,name:je},{path:"/login",component:rt,name:rt},{path:"/choose-tags",component:vt,name:vt},{path:"/news/:id",component:Ct,name:Ct},{path:"/magazines",component:Nt,name:Nt},{path:"/magazine/:id",component:no,name:no},{path:"/profile",component:ga,name:ga},{path:"/create-post",component:Sa,name:Sa},{path:"/admin",component:Ya,name:Ya}],lo=(0,u.aE)({history:(0,u.LA)(),base:"static/",routes:io});var co=lo;const uo=(0,o.Ef)(c);uo.use(co),uo.mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,r){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],r=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<n&&(n=r));if(i){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,s,r]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,n=o[0],i=o[1],l=o[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var c=l(a)}for(t&&t(o);d<n.length;d++)r=n[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(899)}));o=a.O(o)})();
//# sourceMappingURL=app.4d955371.js.map