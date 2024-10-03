<template>
  <div class="login-page">
    <div class="login-form">
      <h2>Вход</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Логин</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

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
    submitForm() {
      // Логика обработки формы
      console.log("Логин:", this.username);
      console.log("Пароль:", this.password);
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
