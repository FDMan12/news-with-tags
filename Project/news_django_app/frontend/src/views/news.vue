<template>
  <div class="page-container">
    <Header />
    <div class="main-content">
      <Sidebar />
      <div class="magazines-list">

        <div>
          <h1>{{ news.name }}</h1>
          <p>{{ news.description }}</p>
          <div v-if="news.file">
            <a :href="news.file" target="_blank">Download File</a>
          </div>
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
import api from "@/api";

export default {
  name: 'MagazinesPage',
  components: {
    Header,
    Sidebar,
    Footer,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      news: {}
    };
  },
  async mounted() {
    try {
      const response = await api.get(`/posts/${this.id}/`);
      this.news = response.data;
    } catch (error) {
      console.error('Error fetching news detail:', error);
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

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

