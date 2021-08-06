import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import router from './router';
import store from './store';
import './assets/styles/index.css';
import './assets/styles/tailwind.css';

const app = createApp(App);
app.config.performance = true; // para habilitar vue devtools

app.component('app-header', Header)
  .use(store)
  .use(router)
  .mount('#app');
