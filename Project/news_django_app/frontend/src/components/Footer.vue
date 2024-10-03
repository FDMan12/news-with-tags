<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <router-link to="/about">О нас</router-link>
      <router-link to="/help">Помощь</router-link>
      <a href="mailto:your-email@example.com">Контакты</a>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 1em;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.footer-content a {
  color: white;
  margin: 0 1em;
  text-decoration: none;
}
.footer-content a:hover {
  text-decoration: underline;
}
</style>
