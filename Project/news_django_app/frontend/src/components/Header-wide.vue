
<!-- src/components/HeaderWide.vue -->
<template>
  <header class="header-wide">
    <div class="header-content">
      <router-link to="/">Новости для вас</router-link>
      <router-link to="/journals">Мои журналы</router-link>
      <router-link to="/today">Сегодняшнее</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderWide'
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
