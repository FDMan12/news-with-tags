<template>
  <div class="page-container">
    <Header />
    <div class="main-content">
      <Sidebar />
      <div class="magazines-list">
        <div class="magazine-card" v-for="magazine in magazines" :key="magazine.id">
          {{ magazine.name }}
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'MagazinesPage',
  components: {
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      magazines: [
        { id: 1, name: 'New York Times' },
        { id: 2, name: 'Биография' },
        { id: 3, name: 'Esquire' },
        { id: 4, name: 'Elle' },
      ],
    };
  },
};
</script>

<style scoped>
/* Добавьте стили для вашей страницы журналов */
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header,
.footer {
  flex-shrink: 0;
}

.main-content {
  flex-grow: 1;
  display: flex;
}

.sidebar {
  width: 250px;
}

.magazines-list {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.magazine-card {
  width: 200px;
  height: 300px;
  background-color: green;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>

