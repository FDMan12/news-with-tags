<!-- src/views/Registration.vue -->
<template>
  <div class="registration-page">
    <div class="registration-form">
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Имя пользователя</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="username">Фамилия пользователя</label>
          <input type="text" id="surname" v-model="surname" required />
        </div>
        <div class="form-group">
          <label for="username">Отчество пользователя</label>
          <input type="text" id="patronymic" v-model="patronymic" required />
        </div>
        <div class="form-group">
          <label for="email">Логин</label>
          <input type="email" id="login" v-model="login" required />
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
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import api from "@/api";
import axios from 'axios';

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
    async register() {
      try {
        const response = await axios.post('api/register/', {
          name: this.name,
          surname: this.surname,
          patronymic: this.patronymic,
          mail: this.email,
          login: this.login,
          password: this.password,
          confirm_password: this.confirmPassword
        });
        console.log('User registered:', response.data);
        localStorage.setItem('authToken', response.data.token);
        this.$router.push({ name: 'HomePage' });
      } catch (error) {
        console.error('Error registering user:', error);
      }

    }
  }
};
</script>

<style scoped>
.registration-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 50px; /* чтобы был отступ для футера */
}
.registration-form {
  background-color: #B5A688;
  padding: 20px;
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
  padding: 8px;
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
