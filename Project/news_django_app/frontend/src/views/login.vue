<template>
  <div class="login-page">
    <div class="login-form">
      <h2>Вход</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Логин</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Войти</button>
        <div class="form-group">
          <label for="signup">Нет аккаунта? <router-link to="/signup">Зарегистрироваться</router-link></label>
        </div>
        <div class="form-group">
          <router-link to="/">На главную</router-link>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import router from "@/router/router";
import api from "@/api";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    Footer,
  },
  methods: {
    getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    },
    async login() {
      try {
        console.log('Запуск скрипта...');

        axios.defaults.headers.common['X-CSRFToken'] = this.getCookie('csrftoken');

        console.log('Получение заголовка...');

        const response = api.login({
          username: this.username,
          password: this.password,
        });

        console.log('Получение ответа от сервера...');

        localStorage.setItem('authToken', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;

        console.log('Токен:', localStorage.getItem('authToken'));

        await router.push({ path: '/' });
        window.location.reload();

        return response;
      } catch (error) {
        console.error('Ошибка при входе в аккаунт:', error.response ? error.response.data : error.message);
      }
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Helvetica', sans-serif;
}


body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a, a:link, a:visited  {
    text-decoration: none;
}

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.login-form {
  background-color: #b2a38f;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

button {
  background-color: #3fa046;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

footer {
  background-color: #333;
  color: white;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}

footer nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

footer nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
