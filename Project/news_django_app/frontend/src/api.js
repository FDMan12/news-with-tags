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
            // Проверка, начинается ли cookie с нужного имени
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
  getNews() {
    console.log('Получение новостей');
    return apiClient.get('/posts', { withCredentials: true });
  },
  getNewsById(id) {
    console.log(`Получение новости с ID: ${id}`);
    return apiClient.get(`/posts/${id}/`, { withCredentials: true });
  },
  getUserProfile() {
    console.log('Получение профиля');
    return apiClient.get('/users/profile/');
  },
  login(credentials) {
    console.log('Отправка данных для входа:', credentials);
    const csrfToken = getCookie('csrftoken');
    return apiClient.post('/login/', credentials, {
        headers: {
            'X-CSRFToken': csrfToken, // Добавление токена в заголовок
        },
    });
  }
};