
<!-- src/components/HeaderWide.vue -->
<template>
  <header class="header-wide">
    <div class="header-content">
      <router-link to="/">Новости для вас</router-link>
      <router-link v-if="isLoggedIn()" to="/magazines">Мои журналы</router-link>
      <router-link to="/choose-tags">Выбор тегов</router-link>
    </div>
  </header>
</template>

<script>
import router from "@/router/router";

export default {
  name: 'HeaderWide',
  data() {
    return {
      userProfile: null
    };
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    this.isLoggedIn = !!token;
  },
  methods: {
    isLoggedIn() {
      return !!localStorage.getItem('authToken');
    },
    logout() {
      localStorage.removeItem('authToken');
      router.push({ path: '/' }).then(() => {
        window.location.reload();
      });
    },
  }
};
</script>

<style scoped>
.header-wide {
  background-color: #6D8444;
  padding: 1em;
  text-align: center;
}
.header-content a {
  color: white;
  margin: 0 1em;
  text-decoration: none;
}
.header-content a:hover {
  text-decoration: underline;
}
</style>
