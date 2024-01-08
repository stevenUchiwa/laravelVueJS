<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';
import axios from 'axios';

const USER = ref({});



const store = useStore()
const router = useRouter();

onMounted(async() => {
  USER.value = JSON.parse(sessionStorage.getItem('user'))
  // const DATA = {
  //   idUser: USER.value.id
  // }
  const DATA = {
    idUser: 10
  }
  const user_subjects = await axios.post('http://localhost:8000/api/user_posts',DATA)
  store.dispatch('increment', user_subjects.data.subjects)
})


function logout(){
    store.dispatch('increment', [])
    router.push('/');
}


</script>
<template>
    <h1 class="titleDashbord">Welcome {{ USER.name }}, <a @click="logout" class="txtLogout">Logout</a></h1>
   
    <template v-if="store.getters.allSubjects.length !== 0">
      <div class="containerSubject">
          <h2>Liste of subjects</h2>
          <li v-for="item in store.getters.allSubjects">
                {{ item.name }}
          </li>
      </div>
    </template>
    <div v-else>
      <p class="txtEmpty">Empty subject</p>
    </div>
</template>
<style>
.titleDashbord {
  text-align: center;
}
.txtEmpty {
  text-align: center;
  margin-top: 5rem;
}
.containerSubject{
  text-align: center;
  margin-top: 5rem;
}
.containerSubject > li {
  list-style: none;
  text-align: left;
  margin: 2rem;
}
.containerSubject > li::after {
  content: "";
  display: block;
  width: 100%;
  height: 0.1rem;
  background-color: rgb(123, 121, 124);
  margin-top: 1.5rem;
}
.containerSubject > li:last-child::after {
  display: none;
}
.txtLogout {
  color: rgb(92, 203, 207);
  cursor: pointer;
  font-size: 1.5rem;
}

</style>