import { createRouter,createWebHashHistory} from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Dahsboard from '../components/dashbord.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard',component: Dahsboard}
  ]


const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})




export default router
