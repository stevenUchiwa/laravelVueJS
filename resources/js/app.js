import './bootstrap';


import { createApp } from 'vue/dist/vue.esm-bundler.js'
import router from './router/router';
import App from './views/app.vue'



createApp(App).use(router).mount('#app')
