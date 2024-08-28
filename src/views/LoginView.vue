<script setup lang="ts">
import {ref} from 'vue';
const isLogin=ref(false);

const reg=(status)=>{
    isLogin.value=status;
};
</script>
<template>
    <section>
        <div class="container">
            <div class="row w-100">
                <div class="col-12 col-md-6 d-flex flex-column align-items-center">
                    <div class="mt-5 mb-2 d-flex align-items-center">
                       <img class="me-2" src="@/assets/images/logo.png" alt="">
                        <!-- <img src="@/assets/images/img.png" alt="workImg"> -->
                    </div>
                    <img src="@/assets/images/img.png" alt="workImg" class="d-none d-md-block img-fluid">
                </div>
            
                <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div class="mt-5 w-100 lg:w-75">
                        <h2>註冊帳號</h2>
                        <h2>最實用的線上代辦事項服務</h2>
                        <div class="d-flex flex-column align-items-center">
                            <button v-if="isLogin" class="btn btn-primary btn-lg fw-bolder w-100 mb-3">註冊帳號</button>
                            <button v-else class="btn btn-primary btn-lg fw-bolder w-100 mb-3">登入</button>
                            <label for="reg" class="fw-bolder" v-on:click="reg(!isLogin)">
                                <a>{{ isLogin ? "登入":"註冊帳號" }}</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<style scoped>

</style>