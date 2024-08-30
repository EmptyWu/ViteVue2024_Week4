<script setup lang="ts">
import {ref,onMounted } from 'vue';
import axios from 'axios';
import { Plus,XIcon } from 'lucide-vue-next';
import { usersStore } from '@/stores/usersStore';
import Header from '../components/layouts/HeaderLayout.vue'
import { useRouter } from 'vue-router';
import { res,MsgResponse,SigninResponseData } from '@/types/users';
import { GetTodoResponseData,Todo} from '@/types/todo';
import { TodosUrl,TodosToggleUrl,TodosPutDelUrl } from '@/api/url/todosUrl';
import {CheckoutUrl} from '@/api/url/usersurl';

const {setToken}=usersStore();
const token=document.cookie.match(/(?:^|;\s*)emptyTodo=([^;]*)/)?.[1]
const content=ref('');
const router = useRouter();
const isHasData=ref(true);

const todoList=ref<Todo[]>([])

const AddTodos=async():res=>{
    try{
        await axios.post(TodosUrl,{
            content:content.value
        },{
            headers: {Authorization: token}
        });
        getTodos();
    }catch(error:any){
        if (error.response) {
            const e=error.response.data as MsgResponse;
            if(!e.status){
                router.push('/');
            }       
        }else {
            alert(error.message);
        }
    }
};

const getTodos=async():res=>{
    try{
        const response:GetTodoResponseData=await axios.get(TodosUrl,{
            headers: {Authorization: token}
        });
        if(response.data.data.length >0){
            todoList.value=response.data.data;
            isHasData.value=true;
        }else {
            isHasData.value=false;
        }
    }catch(error:any){
        const e=error.response.data as MsgResponse;
            if(!e.status){
                alert(e.message);
            }     
    }
};

const checkOut =async():res=>{
    try{
        const { data: responseData }: { data: SigninResponseData } = await axios.get(CheckoutUrl, {
            headers: { Authorization: token },
        });
 
        setToken({
            status :responseData.status,
            token :token,
            nickname: responseData.nickname,
        });
    }catch(error:any){
        if (error.response) {
            const e=error.response.data as MsgResponse;
            if(!e.status){
                router.push('/');
            }       
        }else {
            alert(error.message);
        }
    }
};

const toggle=async(id:string):res=>{
    try{
        await axios.patch(TodosToggleUrl(id),{},{
            headers: {Authorization: token}
        });
        getTodos();
       
    }catch(error:any){
        const e=error.response.data as MsgResponse;
            if(!e.status){
                alert(e.message);
            }       
    }
};

const delTodo=async(id:string):res=>{
    try{
        await axios.delete(TodosPutDelUrl(id),{
            headers: {Authorization: token}
        });
        getTodos();
    }catch(error:any){
        const e=error.response.data as MsgResponse;
        if(!e.status){
            alert(e.message);
        }     
    }
};

onMounted(()=>{
    checkOut();
    getTodos();
});

</script>
<template>
    <Header></Header>
    <div class="bg-half">
        <div>
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" v-model="content" placeholder="請輸入待辦事項" >
                    <a class="input-group-text rounded-md  right-0 " @click="AddTodos">
                    <Plus class="bg-primary w-20 top-0 text-white absolute" />
                    </a>
                </div>
                <div v-if="isHasData" class="card shadow border-0">
                    <ul class="d-flex list-unstyled timeLine mb-0">
                        <li class="text-center py-3">
                            <a class="text-decoration-none text-dark fw-bold">全部</a>
                        </li>
                        <li class="text-center py-3">
                            <a class="text-decoration-none text-dark fw-bold">待完成</a>
                        </li>
                        <li class="text-center py-3">
                            <a class="text-decoration-none text-dark fw-bold">已完成</a>
                        </li>
                    </ul>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li v-for="(item,index) in todoList" :key="item.id" class="d-flex align-items-center">
                                <input type="checkbox" @change="toggle(item.id)" :checked="item.status" :id="item.id">
                                <span class="ms-3">{{item.content}}</span>
                                <div @click="delTodo(item.id)">
                                    <XIcon />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>{{ todoList.length }}待完成項目</div>
                </div>
                <div v-else>
                    <h5>目前尚無待辦事項</h5>
                    <img src="/empty.png" alt="empty">
                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg-half {
  background-image: linear-gradient(175deg, #ffd370 60%, #fff 40%);
}
</style>