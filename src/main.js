import { createApp } from 'vue';
import { createPinia } from 'pinia';
import BootstrapVue3 from 'bootstrap-vue-3';

import App from './App.vue';
import router from './router';

import './assets/css/bootstrap.custom.css';

const app = createApp(App);

app.use(createPinia());
app.use(BootstrapVue3);
app.use(router);

app.mount('#app');
