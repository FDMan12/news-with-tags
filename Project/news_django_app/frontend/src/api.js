import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

apiClient.interceptors.request.use(
  (config) => {
    if (!config.url.includes('/posts')) {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  getTags() {
    console.log('Получение тегов');
    return apiClient.get('/tags', { withCredentials: true });
  },
  getNews() {
    console.log('Получение новостей');
    return apiClient.get('/posts', { withCredentials: true });
  },
  getNewsById(id) {
    console.log(`Получение новости с ID: ${id}`);
    return apiClient.get(`/posts/${id}/`, { withCredentials: true });
  },
  async getNewsByTags(tags) {
    return await axios.get('/posts/', {
      params: { tags: tags.join(',') },
    });
  },
  getMagazines() {
    console.log('Получение журналов');
    return apiClient.get('/magazines', { withCredentials: true });
  },
  getMagazinesById(id) {
    console.log(`Получение журнала с ID: ${id}`);
    return apiClient.get(`/magazines/${id}/`, { withCredentials: true });
  },
  async getMagazinesByTags(tags) {
    return await axios.get('/magazines/', {
      params: { tags: tags.join(',') },
    });
  },
  getUserProfile(token) {
    console.log('Получение профиля');
    return apiClient.get('/users/profile/', {
        headers: {
          'Authorization': `Token ${token}`
        }
    });
  },
  login(credentials) {
    console.log('Отправка данных для входа:', credentials);
    const csrfToken = getCookie('csrftoken');
    return apiClient.post('/login/', credentials, {
        headers: {
            'X-CSRFToken': csrfToken,
        },
    });
  },
  register(credentials) {
    console.log('Отправка данных для регистрации:', credentials);
    const csrfToken = getCookie('csrftoken');
    return apiClient.post('/register/', credentials, {
        headers: {
            'X-CSRFToken': csrfToken,
        },
    });
  },
  createPost(postData, config) {
    console.log('Отправка данных для создания поста:', postData, " ", config);

    return apiClient.post('/posts/', postData, config);
  },
  deletePost(postId, config) {
    console.log('Отправка данных для удаления поста с ID:', postId, " ", config);

    return apiClient.delete(`/posts/${postId}/`, config);
  },
  updatePost(postId, postData, config) {
    console.log('Отправка данных для обновления поста с ID:', postId, " ", postData, " ", config);

    return apiClient.put(`/posts/${postId}/`, postData, config);
  },
  createMagazine(magazineData, config) {
    console.log('Отправка данных для создания поста:', magazineData, " ", config);

    return apiClient.post('/magazines/', magazineData, config);
  },
  deleteMagazine(magazineId, config) {
    console.log('Отправка данных для удаления поста с ID:', magazineId, " ", config);

    return apiClient.delete(`/magazines/${magazineId}/`, config);
  },
  updateMagazine(magazineId, magazineData, config) {
    console.log('Отправка данных для обновления поста с ID:', magazineId, " ", magazineData, " ", config);

    return apiClient.put(`/magazines/${magazineId}/`, magazineData, config);
  },
};