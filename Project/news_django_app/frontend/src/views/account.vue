<template>
  <div class="profile">
    <h1>Мой профиль</h1>
    <form @submit.prevent="updateProfile">
      <div class="avatar">
        <button @click="uploadAvatar">Добавить аватар</button>
        <div class="avatar-placeholder">+</div>
      </div>
      <div class="form-group">
        <label for="email">e-mail</label>
        <input type="email" v-model="user.email" id="email" readonly />
      </div>
      <div class="form-group">
        <label for="first_name">Имя</label>
        <input type="text" v-model="user.first_name" id="first_name" />
      </div>
      <div class="form-group">
        <label for="last_name">Фамилия</label>
        <input type="text" v-model="user.last_name" id="last_name" />
      </div>
      <div class="form-group">
        <label for="date_of_birth">Дата рождения</label>
        <input type="date" v-model="user.date_of_birth" id="date_of_birth" />
      </div>
      <button type="submit">Сохранить данные</button>
    </form>

    <h2>Смена пароля</h2>
    <form @submit.prevent="changePassword">
      <div class="form-group">
        <label for="new_password">Старый пароль</label>
        <input type="password" v-model="password.old" id="new_password" />
      </div>
      <div class="form-group">
        <label for="new_password">Новый пароль</label>
        <input type="password" v-model="password.new" id="new_password" />
      </div>
      <div class="form-group">
        <label for="confirm_password">Повтор пароля</label>
        <input type="password" v-model="password.confirm" id="confirm_password" />
      </div>
      <button type="submit">Изменить пароль</button>
      <p v-if="error">{{ error }}</p>
      <p v-if="success">{{ success }}</p>
    </form>
  </div>
</template>

<script>
import api from '../api';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'account',
  data() {
    return {
      user: {
        email: '',
        first_name: '',
        last_name: '',
        date_of_birth: ''
      },
      password: {
        new: '',
        confirm: '',
        old: ''
      },
      error: null,
      success: null
    };
  },
  created() {
    this.fetchProfile();
  },
  methods: {
    async fetchProfile() {
      try {
        const response = await api.get('/api/profile/');
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    },
    async updateProfile() {
      try {
        await api.put('/api/profile/', this.user);
        alert('Данные профиля обновлены');
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    },
    async changePassword() {
      if (this.password.new !== this.password.confirm) {
        alert('Пароли не совпадают');
        return;
      }

      try {
        const response = await api.post('/api/change-password/', {
          new_password: this.password.new,
          confirm_password: this.password.confirm,
          old_password: this.password.old
        });
        this.success = response.data.success;
        this.error = null;

      } catch (error) {
        this.error = error.response.data.error;
        this.success = null;
        console.error('Error changing password:', error);
      }
    },
    uploadAvatar() {
      // Логика для загрузки аватара
    }
  }
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px;
}
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.avatar-placeholder {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
}
</style>
