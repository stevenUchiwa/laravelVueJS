<script setup>
import { ref } from 'vue';
import Message from './message/message.vue';
import Loader from './loder/loader.vue';
import axios from 'axios';
import { useRouter } from 'vue-router'

const email = ref('');
const password = ref('');
const isError = ref(false);
const isLoading = ref(false);
const message = ref('');
const router = useRouter();

const doLogin = async () => {
    const EMAIL = email.value;
    const PASSWORD = password.value;
    isError.value = false;
    isLoading.value = true;

   if(EMAIL === '' || PASSWORD === ''){
        isLoading.value = false;
        isError.value = true;
        message.value = "Incorrect username or password";
        return false;
   }

   try{
    const DATA = {
        email: EMAIL,
        password:PASSWORD
    }
    const response = await axios.post('http://localhost:8000/api/login',DATA);
    if(response.data.status){
        sessionStorage.setItem('user',JSON.stringify(response.data.user));
        isLoading.value = false;
        router.push('/dashboard');
    }else{
        isLoading.value = false;
        isError.value = true;
        message.value = response.data.msg;
    }
   
   }catch(e){
        isError.value = false;
        message.value = "Error in server";
   }
   
   
}

</script>
<template>
    <div class="container-login">
        <div class="second-container">
            <section>
                <h1>Laravel and VueJS test</h1>
            </section>
            <section class="container-right">
                <div class="container-form">
                    <p>Login</p>
                    <input aria-label="email" placeholder="mail" v-model="email"/>
                    <input aria-label="password" type="password" placeholder="password" v-model="password" />
                    <button class="btn-login" @click="doLogin">Sign In</button>
                    <router-link to="/register">Sign Up</router-link>
                </div>
                <!-- conditional rendering -->
                <Message v-if="isError" :msg="message" />
                <Loader v-if="isLoading " class="loginLoader"/>
            </section>
        </div>
    </div>
</template>
<style>
.container-login{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    min-height: 100vh;
    height: 100vh;
}
.second-container {
    /* background-color: yellowgreen; */
    width: 70vw;
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 0 0.50rem rgb(204, 203, 203);

}

.loginLoader{
    margin: 2rem auto 0 auto;
}


.container-right {
    text-align: center;
}

.container-form{
    display: flex;
    flex-direction: column;
}
input {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    outline: none;
    border-radius: 5px;
    border: solid  rgb(204, 203, 203) 1px;
    padding: 0.5rem 0.3rem;
    width: 20rem;
}

.btn-login {
    padding: 0.5rem 0;
    border-radius: 5px;
    margin-top: 1.5rem;
    border: none;
    background-color: aqua;
    margin-bottom: 25px;
}


</style>