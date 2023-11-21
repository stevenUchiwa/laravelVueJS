import { createRouter,createWebHashHistory} from 'vue-router'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Dahsboard from '../views/dashbord.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
  ]


const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})




export default router