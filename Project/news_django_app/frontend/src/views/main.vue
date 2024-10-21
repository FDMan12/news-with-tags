<template>
  <div class="news-selection-page">
    <Header />
    <div class="main-content">
      <Sidebar />
        <div class="news-content">
          <h1>Новости для вас</h1>
          <TagsList @update-tags="fetchNewsByTag" />
          <router-link v-if="isEditorOrAdmin" to="/create-post">Создать новость</router-link>
          <div class="news-grid">
            <div class="news-card" v-for="news in newsFilteredList" :key="news.id">
              <div class="news-image"></div>
              <div class="news-details">
                <h3>
                <router-link :to="'/news/' + news.id">{{ news.name }}</router-link>
                </h3>
              </div>
              <router-link v-if="isEditorOrAdmin" :to="'/edit-post/' + news.id">
                <button>Обновить</button>
              </router-link>
              <button v-if="isEditorOrAdmin" @click="deletePost(news.id)">Удалить</button>

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
// eslint-disable-next-line no-unused-vars
import api from "@/api";
// eslint-disable-next-line no-unused-vars
import router from '@/router/router';
import TagsList from "@/components/TagsList.vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  name: "NewsSelectionPage",
  components: {TagsList, Sidebar, Footer, Header},
  data() {
    return {
      newsList: [],
      selectedTags: [],
      newsFilteredList: [],
      searchQuery: '',
      userProfile: null,
      isEditorOrAdmin: false
    };
  },
  created() {
    this.fetchUserProfile();
    this.fetchNews();
  },
  watch: {
    '$route.query.q': {
      immediate: true,
      handler(query) {
        if (query) {
          this.searchQuery = query;
          this.fetchNewsByTag(query);
        } else {
          this.fetchNews();
        }
      }
    }
  },
  methods: {
    async fetchUserProfile() {
      const token = localStorage.getItem('authToken');
      if (token) {
        console.log('Fetching user profile with token:', token);
        try {
          const response = await api.getUserProfile(token);
          this.userProfile = response.data;
          console.log(this.userProfile.role);
          if (this.userProfile.role === 'Admin' || this.userProfile.role === 'Editor') {
            this.isEditorOrAdmin = true;
          }
        } catch (error) {
          console.error('Ошибка при загрузке профиля:', error);
        }
      } else {
        console.log('Пользователь не авторизован.');
      }
    },
    isLoggedIn() {
      return !!localStorage.getItem('authToken');
    },
    async fetchNews() {
      try {
        const response = await api.getNews();
        this.newsList = response.data;
        console.log('Fetched news: ', response.data);

        this.newsList.forEach(news => {
          console.log('News ID:', news.id);
        });
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
    async fetchNewsByTag(selectedTags) {
      console.log('Fetching news by tag...');
      console.log('Selected tags:', selectedTags);
      const response = await api.getNews();
      this.newsList = response.data;
      if (!selectedTags || selectedTags.length === 0) {
        console.log('No tags, fetching news...');
        this.newsFilteredList = this.newsList;
        console.log('Fetched news without tags: ', this.newsFilteredList);
      } else {
        try {
          console.log('Selected tags are not empty, starting filter process...');
          console.log('Fetched news (yet without tags): ', this.newsList);
          this.newsFilteredList = this.newsList.filter(news => {
            console.log('Checking news:', news.name, 'with tags:', news.tags);

            selectedTags.forEach(tag => {
              console.log('Checking if news contains tag:', tag.id);
            });

            const isMatch = selectedTags.every(tag => news.tags.includes(tag.id));

            console.log('Does news match selected tags?', isMatch);
            return isMatch;
          });
          console.log('Fetched news by tag: ', this.newsFilteredList);
        } catch (error) {
          console.error('Error fetching news by tag:', error);
        }
      }

    },
    search() {
      router.push({path: '/', query: {q: this.searchQuery}});
    },
    async deletePost(postId) {
      try {
        const token = localStorage.getItem('authToken');

        if (!token) {
          console.error('Token not found!');
          return;
        }

        const headers = {
          Authorization: `Token ${token}`
        };

        await api.deletePost(postId, { headers });

        await this.fetchNews();

        window.location.reload();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  }
}
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

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a, a:link, a:visited  {
    text-decoration: none;
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

button {
  background-color: #6D8444;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  margin: 5px;
}

</style>
