import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import i18n from './lang';
import App from './App.vue';

const app = createApp(App);

const options = {
    'transition': 'Vue-Toastification__bounce',
    'maxToasts': 5,
    'newestOnTop': true,
};

app.use(i18n);

app.use(Toast, options);

app.mount('#app');
