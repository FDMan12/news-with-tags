<template>
  <div class="page-container">
    <Header />
    <div class="main-content">
      <Sidebar />
      <div class="content">
        <h2>Создание публикации</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="title">Заголовок:</label>
            <input type="text" id="title" v-model="title" required />
          </div>
          <div class="form-group">
            <label for="content">Текст публикации:</label>
            <textarea id="content" v-model="content" required></textarea>
          </div>
          <div class="form-group">
            <label for="tags">Теги:</label>
            <select id="tags" v-model="selectedTag">
              <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.tag_name }}</option>
            </select>
          </div>
          <button type="submit">Опубликовать</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import Footer from '../components/Footer.vue';
import api from '../api';

export default {
  name: 'CreateMagazinePage',
  components: {
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      title: '',
      content: '',
      selectedTag: '',
      tags: [],
    };
  },
  created() {
    if (this.$route.params.id) {
      this.fetchMagazine();
    }
    this.fetchTags();
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleFileUpload(event) {
      // const file = event.target.files[0];
    },
    async submitForm() {
      if (this.$route.params.id) {
        await this.updateMagazine();
      } else {
        await this.createMagazine();
      }
    },
    async fetchTags() {
      try {
        const response = await api.getTags();
        this.tags = response.data;
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    },
    async createMagazine() {
      try {
        const magazineData = {
          name: this.title,
          description: this.content,
          tags: [this.selectedTag]
        };

        const token = localStorage.getItem('authToken');

        if (!token) {
          console.error('Token not found!');
          return;
        }

        const headers = {
          Authorization: `Token ${token}`
        };

        await api.createMagazine(magazineData, { headers });
        this.$router.push('/');
      } catch (error) {
        console.error('Error creating magazine:', error);
      }
    },
    async fetchMagazine() {
      try {
        const response = await api.getMagazinesById(this.$route.params.id);
        this.title = response.data.name;
        this.content = response.data.description;
        this.selectedTag = response.data.tags[0];
      } catch (error) {
        console.error('Error fetching magazine:', error);
      }
    },
    async updateMagazine() {
      try {
          const magazineData = {
              name: this.title,
              description: this.content,
              tags: [this.selectedTag]
          };

          const token = localStorage.getItem('authToken');

          if (!token) {
            console.error('Token not found!');
            return;
          }

          const headers = {
            Authorization: `Token ${token}`
          };

          await api.updateMagazine(this.$route.params.id, magazineData, { headers });
          this.$router.push('/');
      } catch (error) {
          console.error('Error updating magazine:', error);
      }
    }


  },
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

.content {
  flex-grow: 1;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>

