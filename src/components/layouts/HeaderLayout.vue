<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios';
import { usersStore } from '@/stores/usersStore';
import {SignoutUrl} from '@/api/url/usersurl';
import { res,MsgResponse,SinguoutResponseData } from '@/types/users';


const store =usersStore();
const {clearToken}=usersStore();
const router = useRouter();

const signoutFn =async():res=>{
    try{
        const response:SinguoutResponseData=await axios.post(SignoutUrl,{},{
            headers: {Authorization: store.userData?.token}
        });
        clearToken();
        //console.log(response.data);
        //router.push('/');
    }catch(error:any){
        const e=error.response.data as MsgResponse;
        console.log(e.status);
        e.message.forEach((msg)=>{
            console.log("Error",msg);
        });
    }
};

</script>
<template>
    <nav class="nav nav-pills nav-justified">
        <RouterLink to="/">
            <div class="mb-2">
                <img src="/logo_text.svg" alt="logo">
            </div>
        </RouterLink>
        <div class="d-lg-flex gap-3">
                <div class="text-primary no-underline">
                    {{store.userData?.nickname  }} 的代辦
                </div>
            <RouterLink to="/">
                <button type="button" @click="signoutFn">登出</button>
            </RouterLink>
        </div>        
    </nav>
</template>