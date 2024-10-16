<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="header-content">
      <h1>Мои Новости</h1>
      <nav>
        <router-link to="/">Новости для вас</router-link>
        <router-link to="/my-magazines">Мои журналы</router-link>
        <router-link to="/latest-news">Сегодняшнее</router-link>
        <router-link v-if="!isLoggedIn()" to="/signup">Регистрация</router-link>
        <router-link v-if="isLoggedIn()" to="/profile" class="account-link">Мой аккаунт</router-link>
        <button v-if="isLoggedIn()" @click="logout">Выйти</button>
      </nav>
    </div>
  </header>
</template>

<script>
import api from "@/api";
// eslint-disable-next-line no-unused-vars
import router from "@/router/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  data() {
    return {
      userProfile: null
    };
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    this.isLoggedIn = !!token;

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      api.getUserProfile()
      .then(response => {
        this.userProfile = response.data;
      })
      .catch(error => {
        console.error('Ошибка при загрузке профиля:', error);
      });

    } else {
      console.log('Пользователь не авторизован.');
    }
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
* {
  font-family: 'Helvetica', sans-serif;
}

.header {
  background-color: #6D8444;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-content {
  display: flex;
  align-items: center;
}
nav {
  margin-left: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
}
.account-link {
  margin-left: auto;
  text-decoration: none;
  color: white;
}
button {
  background-color: #425029;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin: 5px;
}
</style>
