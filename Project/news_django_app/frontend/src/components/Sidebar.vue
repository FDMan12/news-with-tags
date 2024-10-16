<!-- src/components/Sidebar.vue -->
<template>
  <aside class="sidebar">
    <h3>Мои новости</h3>
    <nav>
      <h4>Избранные теги</h4>
      <ul>
        <li>Спорт</li>
        <li>Музыка</li>
        <li>Кино</li>
        <li>Наука</li>
      </ul>
      <h4>Местные новости</h4>
      <ul>
        <li>Москва</li>
        <li>Липецк</li>
        <li>Воронеж</li>
        <li>Пермь</li>
      </ul>
      <h4 v-if="isLoggedIn()">Мои журналы</h4>
      <h4 v-if="!isLoggedIn()">Зарегистрируйтесь для получения доступа к журналам</h4>
      <ul v-if="isLoggedIn()">
        <li>New York Times</li>
        <li>Биография</li>
        <li>Esquire</li>
        <li>Elle</li>
      </ul>
    </nav>
  </aside>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import router from "@/router/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  methods: {
    isLoggedIn() {
      return !!localStorage.getItem('authToken');
    },
  }
};
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
	border: none;
  font-family: 'Helvetica', sans-serif;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

.sidebar {
  width: 200px;
  background-color: #E5E5E5;
  padding: 10px;
}
input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
h3, h4 {
  margin: 10px 0;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  margin: 5px 0;
}
</style>
