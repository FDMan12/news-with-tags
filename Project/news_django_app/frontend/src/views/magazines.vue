<template>
  <div class="page-container">
    <Header />
    <div class="main-content">
      <Sidebar />
      <div class="up">
        <h1>Журналы для вас</h1>
        <TagsList @tag-selected="fetchMagazinesByTag" />
      </div>
      <router-link v-if="isEditorOrAdmin" to="/create-magazine">Создать журнал</router-link>
      <div class="magazines-list">
        <div class="magazines-grid">
            <div class="magazine-card" v-for="magazine in magazineList" :key="magazine.id">
              <div class="magazine-image"></div>
              <div class="magazine-details">
                <h3>
                <router-link :to="'/magazine/' + magazine.id">{{ magazine.name }}</router-link>
                </h3>
              </div>
              <router-link v-if="isEditorOrAdmin" :to="'/edit-magazine/' + magazine.id">
                <button>Обновить</button>
              </router-link>
              <button v-if="isEditorOrAdmin" @click="deleteMagazine(magazine.id)">Удалить</button>

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
// eslint-disable-next-line no-unused-vars
import api from "@/api";
// eslint-disable-next-line no-unused-vars
import router from '@/router/router';
import TagsList from "@/components/TagsList.vue";

export default {
  name: 'MagazinesPage',
  components: {
    TagsList,
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      magazineList: [],
      selectedTags: [],
      magazineFilteredList: [],
      searchQuery: '',
      userProfile: null,
      isEditorOrAdmin: false
    };
  },
  created() {
    this.fetchUserProfile();
    this.fetchMagazines();
  },
  watch: {
    '$route.query.q': {
      immediate: true,
      handler(query) {
        if (query) {
          this.searchQuery = query;
          this.fetchMagazinesByTag(query);
        } else {
          this.fetchMagazines();
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
          const response = await api.getUserProfile();
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
    async fetchMagazines() {
      try {
        console.log('Start fetching magazines...');
        const response = await api.getMagazines();
        this.magazineList = response.data;
        console.log('Fetched magazines: ', response.data);

        this.magazineList.forEach(news => {
          console.log('News ID:', news.id);
        });
      } catch (error) {
        console.error('Error fetching magazines:', error);
      }
    },
    async fetchMagazinesByTag(selectedTags) {
      const response = await api.getMagazines();
      this.magazineList = response.data;
      if (!selectedTags || selectedTags.length === 0) {
        console.log('No tags, fetching magazines...');
        this.magazineFilteredList = this.magazineList;
        console.log('Fetched magazines without tags: ', this.magazineFilteredList);
      } else {
        try {
          console.log('Selected tags are not empty, starting filter process...');
          console.log('Fetched magazines (yet without tags): ', this.newsList);
          this.magazineFilteredList = this.magazineList.filter(magazine => {
            console.log('Checking magazines:', magazine.name, 'with tags:', magazine.tags);

            selectedTags.forEach(tag => {
              console.log('Checking if magazines contains tag:', tag.id);
            });

            const isMatch = selectedTags.every(tag => magazine.tags.includes(tag.id));

            console.log('Does magazines match selected tags?', isMatch);
            return isMatch;
          });
          console.log('Fetched magazines by tag: ', this.magazineFilteredList);
        } catch (error) {
          console.error('Error fetching magazines by tag:', error);
        }
      }
    },
    search() {
      router.push({path: '/', query: {q: this.searchQuery}});
    },
    async deleteMagazine(magazineId) {
      try {
        const token = localStorage.getItem('authToken');

        if (!token) {
          console.error('Token not found!');
          return;
        }

        const headers = {
          Authorization: `Token ${token}`
        };

        await api.deletePost(magazineId, { headers });

        await this.fetchMagazines();

        window.location.reload();
      } catch (error) {
        console.error('Error deleting magazine:', error);
      }
    }
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

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a, a:link, a:visited  {
    text-decoration: none;
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
  display: flex;
  flex: 1;
}

.sidebar {
  width: 250px;
}

.magazine-selection-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
.magazine-content {
  flex: 1;
  padding: 20px;
}
.magazine-image {
  width: 100%;
  height: 150px;
  background-color: #6D8444;
  margin-bottom: 10px;
}
.magazine-details {
  text-align: center;
}

button {
  background-color: #6D8444;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}

.up {
  margin: 10px;
  padding: 20px;
}
</style>

