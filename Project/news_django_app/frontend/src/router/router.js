import { createRouter, createWebHistory } from 'vue-router';
import Main from './../views/main.vue';
import Signup from './../views/signup.vue';
import Login from './../views/login.vue';
import ChooseTags from './../views/choose_tags.vue';
import News from './../views/news.vue';
import Magazines from './../views/magazines.vue';
import Account from './../views/account.vue';
import Add_news from "@/views/add_news.vue";
import Edit_news from "@/views/add_news.vue";
import Admin from "@/views/admin.vue";
import Magazine from "@/views/magazine.vue";
import Add_magazines from "@/views/add_magazines.vue";
import Edit_magazines from "@/views/add_magazines.vue";

const routes = [
  { path: '/', component: Main, name: Main },
  { path: '/signup', component: Signup, name: Signup },
  { path: '/login', component: Login, name: Login },
  { path: '/choose-tags', component: ChooseTags, name: ChooseTags },
  { path: '/news/:id', component: News, name: News },
  { path: '/magazines', component: Magazines, name: Magazines },
  { path: '/magazine/:id', component: Magazine, name: Magazine },
  { path: '/create-magazine', component: Add_magazines, name: Add_magazines },
  { path: '/edit-magazine/:id', component: Edit_magazines, name: Edit_magazines, props: true },
  { path: '/profile', component: Account, name: Account },
  { path: '/create-post', component: Add_news, name: Add_news },
  { path: '/edit-post/:id', component: Edit_news, name: Edit_news, props: true },
  { path: '/admin', component: Admin, name: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
});

export default router;
