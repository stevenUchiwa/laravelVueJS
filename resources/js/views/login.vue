<template>
    <div class="container-login">
        <div class="second-container">
            <section>
                <h1>Laravel and VueJS test</h1>

            </section>
            <section class="container-right">
                <div class="container-form">
                    <p>Login</p>
                    <input placeholder="mail"/>
                    <input aria-label="password" placeholder="password"/>
                    <button class="btn-login">Sign In</button>
                    <router-link to="/register">Sign Up</router-link>
                </div>
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