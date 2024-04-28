import Vue from 'vue';
import VueRouter from 'vue-router'
import Main from './../views/main.vue'
import Signup from './../views/signup.vue'
import Login from './../views/login.vue'
import ChooseTags from './../views/choose_tags.vue'
import News from './../views/news.vue'
import Magazines from './../views/magazines.vue'
import Account from './../views/account.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/choose-tags', component: ChooseTags },
  { path: '/news', component: News },
  { path: '/magazines', component: Magazines },
  { path: '/account', component: Account }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
