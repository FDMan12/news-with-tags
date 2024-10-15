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
            <label for="preview">Превью:</label>
            <input type="file" id="preview" @change="handleFileUpload" />
          </div>
          <div class="form-group">
            <label for="tags">Теги:</label>
            <select id="tags" v-model="selectedTag">
              <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
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
  name: 'CreatePostPage',
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
      tags: ['Спорт', 'Музыка', 'Кино', 'Наука', 'Москва', 'Липецк', 'Воронеж', 'Пермь'],
    };
  },
  created() {
    if (this.$route.params.id) {
      this.fetchPost();
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleFileUpload(event) {
      // const file = event.target.files[0];
    },
    async submitForm() {
      if (this.$route.params.id) {
        await this.updatePost();
      } else {
        await this.createPost();
      }
    },
    async createPost() {
      try {
        await api.post('/api/posts/', {
          title: this.title,
          content: this.content,
          selectedTag: this.selectedTag
        });
        this.$router.push('/');
      } catch (error) {
        console.error('Error creating post:', error);
      }
    },
    async fetchPost() {
      try {
        const response = await api.get(`/posts/${this.$route.params.id}/`);
        this.post = response.data;
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
    async updatePost() {
      try {
        await api.put(`/api/posts/${this.$route.params.id}/`, {
          title: this.title,
          content: this.content,
          selectedTag: this.selectedTag
        });
        this.$router.push('/');
      } catch (error) {
        console.error('Error updating post:', error);
      }
    }


  },
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

