<template>
  <div class="news-selection-page">
    <Header />
    <div class="main-content">
      <Sidebar />
        <div class="news-content">
          <h1>Новости для вас</h1>
          <input v-model="searchQuery" placeholder="Тег для поиска" />
          <button @click="search">Поиск</button>
          <TagsList @tag-selected="fetchNewsByTag" />
          <router-link to="/create-post">Создать новость</router-link>
          <div class="news-grid">
            <div class="news-card" v-for="news in newsList" :key="news.id">
              <div class="news-image"></div>
              <div class="news-details">
                <h3>
                  <router-link :to="{ name: 'NewsDetail', params: { id: news.id } }">{{ news.title }}</router-link>
                </h3>
                <p>
                  <router-link :to="{ name: 'NewsDetail', params: { id: news.id } }">{{ news.description }}</router-link>
                </p>
              </div>
              <button @click="deletePost(post.id)">Delete</button>
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import api from "@/api";

export default {
  name: "NewsSelectionPage",
  components: {Sidebar, Footer, Header},
  data() {
    return {
      newsList: [],
      searchQuery: ''
    };
  },
  created() {
    this.fetchNews();
  },
  watch: {
    '$route.query.q': {
      immediate: true,
      handler(query) {
        if (query) {
          this.fetchNewsByTag(query);
        } else {
          this.fetchNews();
        }
      }
    }
  },
  async mounted() {
    try {
      const response = await api.get('/posts/');
      this.newsList = response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  },
  methods: {
    async fetchNews() {
      try {
        const response = await api.get('/posts/');
        this.newsList = response.data;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
    async fetchNewsByTag(tagName) {
      try {
        const response = await api.get(`/posts/tag/${tagName}/`);
        this.newsList = response.data;
      } catch (error) {
        console.error('Error fetching news by tag:', error);
      }
    },
    search() {
      this.$router.push({ path: '/', query: { q: this.searchQuery } });
    },
    async deletePost(postId) {
      try {
        await api.delete(`/posts/${postId}/`);
        await this.fetchNews();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }


  }

};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

.news-selection-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #b2a38f;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-buttons button {
  margin: 0 5px;
  padding: 10px 20px;
  background-color: #3fa046;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.main-content {
  display: flex;
  flex: 1;
}

aside {
  width: 200px;
  background-color: #d3c6ac;
  padding: 10px;
}

.my-news h2 {
  margin-top: 0;
}

.my-news ul {
  list-style: none;
  padding: 0;
}

.my-news li {
  margin-bottom: 5px;
}

.news-card {
  background-color: #b2a38f;
  width: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  background-color: #333;
  color: white;
  padding: 10px 0;
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

.news-content {
  flex: 1;
  padding: 20px;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.news-card {
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
}
.news-image {
  width: 100%;
  height: 150px;
  background-color: #6D8444;
  margin-bottom: 10px;
}
.news-details {
  text-align: center;
}

</style>
