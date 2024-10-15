<template>
  <div class="page-container">
    <Header />
    <div class="main-content">
      <Sidebar />
      <div class="content">
        <h2>Добавить редактора</h2>
        <form @submit.prevent="addEditor">
          <div class="form-group">
            <label for="name">Л:</label>
            <input type="text" id="name" v-model="newEditor.login" required />
          </div>
          <div class="form-group">
            <label for="email">Почта:</label>
            <input type="email" id="email" v-model="newEditor.email" required />
          </div>
          <div class="form-group">
            <label for="magazines">Журналы:</label>
            <select id="magazines" v-model="newEditor.magazines" multiple>
              <option v-for="magazine in magazines" :key="magazine" :value="magazine">{{ magazine }}</option>
            </select>
          </div>
          <button type="submit">Добавить</button>
        </form>
        <h2>Список редакторов</h2>
        <table>
          <thead>
            <tr>
              <th>Редакторы</th>
              <th>Журналы</th>
              <th>e-mail</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(editor, index) in editors" :key="index">
              <td>{{ index + 1 }}. {{ editor.name }}</td>
              <td>{{ editor.magazines.join(', ') }}</td>
              <td>{{ editor.email }}</td>
              <td><button @click="removeEditor(index)">Удалить</button></td>
            </tr>
          </tbody>
        </table>
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
  name: 'ManageEditorsPage',
  components: {
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      newEditor: {
        name: '',
        email: '',
        magazines: [],
      },
      magazines: ['7 дней', 'Elle', 'New York Times', 'Биография', 'Esquire'],
      editors: [
        {
          name: 'Петров Иван В.',
          email: 'petrov12@mail.ru',
          magazines: ['7 дней', 'Elle'],
        },
      ],
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await api.get('/users/');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async deleteUser(userId) {
      try {
        await api.delete(`/users/${userId}/`);
        await this.fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async addEditor() {
      try {
        await api.post('/api/editors/', {
          name: this.newEditor.name,
          email: this.newEditor.email,
          magazines: this.newEditor.magazines,
        });
        this.newEditor.name = '';
        this.newEditor.email = '';
        this.newEditor.magazines = [];
        await this.fetchUsers();
        } catch (error) {
        console.error('Error adding editor:', error);
        }
    },
    async removeEditor(index) {
      const editor = this.editors[index];
      try {
        await api.delete(`/api/editors/${editor.email}/`);  // удаление по email или id
        this.editors.splice(index, 1);  // обновляем UI
      } catch (error) {
        console.error('Error removing editor:', error);
      }
    },
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
input[type="email"],
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
