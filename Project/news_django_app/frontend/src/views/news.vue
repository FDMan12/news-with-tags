<template>
  <div class="page-container">
    <Header />
    <div class="main-content">
      <Sidebar />
      <div class="news-list">

        <div>
          <h1>{{ news.name || 'Loading...' }}</h1>
          <p>{{ news.description || 'Loading description...' }}</p>
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
  name: 'NewsDetail',
  components: {
    Header,
    Sidebar,
    Footer,
  },
  created() {
    this.fetchNews();
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
  methods: {
    async fetchNews() {
      const id = this.$route.params.id;
      console.log('Fetching news with ID:', id);
      try {
        const response = await api.getNewsById(id);
        this.news = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке новости:', error);
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

.news-list {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.news-card {
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

