import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';

const app = createApp(App);

const options = {
    'transition': 'Vue-Toastification__bounce',
    'maxToasts': 5,
    'newestOnTop': true,
};

app.use(Toast, options);

app.mount('#app');
