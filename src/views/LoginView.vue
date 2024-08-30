<script setup lang="ts">
import {ref } from 'vue';
import axios from 'axios';
import { Signin ,SigninResponseData,MsgResponse,res,SingupRes} from '@/types/users';
import { SigninUrl,SignupUrl } from '@/api/url/usersurl';
import { usersStore } from '@/stores/usersStore';
import {useRouter} from 'vue-router';

const isLogin=ref(false);
const router = useRouter();

const {setToken}=usersStore();

const SignPram =ref<Signin>({
    email:'',
    password:'',
    nickname:'',
    cofpwd:''
});
const isemail=ref(false);


const signinFn =async():res=>{
    isemail.value=false;
    if(SignPram.value.email ===""){
        isemail.value=true;
    }
    try{
        const response:SigninResponseData= await axios.post(SigninUrl
            ,{
            email: SignPram.value.email,
            password: SignPram.value.password       
            });
        if(response.data.status){
            setToken(response.data);
            router.push('/todo');
        }
    }
    catch(error:any){
        const e=error.response.data as MsgResponse;
        if(!e.status){
            alert(e.message);
        }
    }

};
const signupFn= async ():res =>{
    try{
        isemail.value=false;
        if(SignPram.value.cofpwd==='' || SignPram.value.password !== SignPram.value.cofpwd){
            throw new Error('密碼輸入有誤');
        }
        
        const response:SingupRes= await axios.post(SignupUrl
            ,{
            email: SignPram.value.email,
            password: SignPram.value.password,
            nickname: SignPram.value.nickname
            });
    }
    catch(error:any){
        if (error.response) {
            const e=error.response.data as MsgResponse;
            if(!e.status){
                alert(e.message);
            }       
        }else {
            alert(error.message);
        }
    }
};


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
                        <h2 v-if="isLogin">註冊帳號</h2>
                        <h2>最實用的線上代辦事項服務</h2>
                        <div v-if="isLogin">
                            <div class="mt-3 text-start">
                                <label for="email" class="fw-bolder">Email</label>
                                <input type="email" class="form-control mb-3" v-model="SignPram.email"  id="email" placeholder="請輸入Email">
                            
                                <label for="nickname" class="fw-bolder">您的暱稱</label>
                                <input type="text" class="form-control mb-3" v-model="SignPram.nickname" id="nickname" placeholder="請輸入您的暱稱">

                                <label for="password" class="fw-bolder">密碼</label>
                                <input type="password" class="form-control mb-3" v-model="SignPram.password" id="password" placeholder="請輸入密碼">
                                
                                <label for="confirm-password" class="fw-bolder">再次輸入密碼</label>
                                <input type="password" class="form-control mb-3" v-model="SignPram.cofpwd" id="confirm-password" placeholder="請再次輸入密碼">                                
                            </div>
                        </div>
                       
                        <div v-else>
                            <div class="mt-3 text-start">
                                <label for="email" class="fw-bolder">Email</label>
                                <input type="email" class="form-control mb-3" v-model="SignPram.email" id="email" placeholder="請輸入Email">
                                <span class="ms-0 text-danger fw-bold" v-if="isemail">此欄位不可留空</span>
                            </div>
                            
                            <div class="mt-3 text-start">
                            <label for="password" class="fw-bolder">密碼</label>
                            <input type="password" class="form-control mb-3" v-model="SignPram.password" id="password" placeholder="請輸入密碼">
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <button v-if="isLogin" class="btn btn-primary btn-lg fw-bolder w-100 mb-3" @click="signupFn">註冊帳號</button>
                            <button v-else class="btn btn-primary btn-lg fw-bolder w-100 mb-3" @click="signinFn">登入</button>
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