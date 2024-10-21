<!-- src/views/Registration.vue -->
<template>
  <div class="registration-page">
    <div class="registration-form">
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Имя пользователя</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="surname">Фамилия пользователя</label>
          <input type="text" id="surname" v-model="surname" required />
        </div>
        <div class="patronymic">
          <label for="username">Отчество пользователя</label>
          <input type="text" id="patronymic" v-model="patronymic" required />
        </div>
        <div class="form-group">
          <label for="login">Логин</label>
          <input type="text" id="login" v-model="login" required />
        </div>
        <div class="form-group">
          <label for="email">Почта</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Повторите пароль</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <div class="form-group">
          <p v-if="passwordsMatch" class="password-match">Пароли совпадают</p>
          <p v-else class="password-no-match">Пароли не совпадают</p>
        </div>
        <button type="submit" :disabled="!passwordsMatch">Зарегистрироваться</button>
        <div class="form-group">
          <label for="confirmPassword">Повторите пароль</label>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Есть аккаунт? <router-link to="/login">Авторизироваться</router-link></label>
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
import Footer from '../components/Footer.vue';
// eslint-disable-next-line no-unused-vars
import api from "@/api";
import axios from 'axios';
import router from "@/router/router";
import Cookies from "js-cookie";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Registration',
  components: {
    Footer
  },
  data() {
    return {
      name: '',
      surname: '',
      patronymic: '',
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordsMatch: true,
    };
  },
  watch: {
    password() {
      this.checkPasswordsMatch();
    },
    confirmPassword() {
      this.checkPasswordsMatch();
    },
  },
  methods: {
    checkPasswordsMatch() {
      this.passwordsMatch = this.password === this.confirmPassword;
    },
    isLoggedIn() {
    return !!localStorage.getItem('authToken');
    },
    async register() {
      try {
        const csrftoken = Cookies.get('csrftoken');

        const response = await axios.post('http://localhost:8080/api/register/', {
          name: this.name,
          surname: this.surname,
          patronymic: this.patronymic,
          mail: this.email,
          login: this.login,
          password: this.password,
          confirm_password: this.confirmPassword
        }, {
        headers: {
          'X-CSRFToken': csrftoken
        }});
        console.log('User registered:', response.data);
        localStorage.setItem('authToken', response.data.token);
        await router.push({path: '/'});
        window.location.reload();
      } catch (error) {
        console.error('Error registering user:', error);
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

.registration-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 50px;
}
.registration-form {
  background-color: #B5A688;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.password-match {
  color: green;
}
.password-no-match {
  color: red;
}
button {
  background-color: #6D8444;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
