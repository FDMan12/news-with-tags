import { createRouter, createWebHistory } from 'vue-router';
import Main from './../views/main.vue';
import Signup from './../views/signup.vue';
import Login from './../views/login.vue';
import ChooseTags from './../views/choose_tags.vue';
import News from './../views/news.vue';
import Magazines from './../views/magazines.vue';
import Account from './../views/account.vue';
import Add_news from "@/views/add_news.vue";
import Admin from "@/views/admin.vue";

const routes = [
  { path: '/', component: Main, name: Main },
  { path: '/signup', component: Signup, name: Signup },
  { path: '/login', component: Login, name: Login },
  { path: '/choose-tags', component: ChooseTags, name: ChooseTags },
  { path: '/news', component: News, name: News },
  { path: '/magazines', component: Magazines, name: Magazines },
  { path: '/account', component: Account, name: Account },
  { path: '/add_news', component: Add_news, name: Add_news },
  { path: '/admin', component: Admin, name: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
});

export default router;
