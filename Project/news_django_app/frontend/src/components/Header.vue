<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="header-content">
      <h1>Мои Новости</h1>
      <nav>
        <router-link to="/news-for-you">Новости для вас</router-link>
        <router-link to="/my-magazines">Мои журналы</router-link>
        <router-link to="/latest-news">Сегодняшнее</router-link>
      </nav>
      <router-link to="/profile" class="account-link">Мой аккаунт</router-link>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header'
};
</script>

<style scoped>
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
</style>
