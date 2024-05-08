    import { createApp } from 'vue'
    import App from './App.vue'
    import router from './router/router.js'; // Импортируем файл маршрутизации

    const app = createApp(App);
    app.use(router)
    app.mount('#app');

