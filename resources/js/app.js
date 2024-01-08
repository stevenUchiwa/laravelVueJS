import './bootstrap';


import { createApp } from 'vue/dist/vue.esm-bundler.js'
import router from './router/router';
import App from './components/app.vue';
import subjectStore from './store/subject'



createApp(App).use(router).use(subjectStore).mount('#app')
