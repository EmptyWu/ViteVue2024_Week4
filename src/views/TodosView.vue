<script setup lang="ts">
import {ref,onMounted } from 'vue';
import { Plus } from 'lucide-vue-next';
import { usersStore } from '@/stores/usersStore';
import Header from '../components/layouts/HeaderLayout.vue'
import {useRouter} from 'vue-router';

const store = usersStore();
console.log(`store:${store.userData?.token}`);

const router = useRouter();
const isHasData=ref(true);


onMounted(()=>{
    if(store.userData==undefined){
        router.push('/');
    }
});

</script>
<template>
    <Header></Header>
    <div class="bg-half">
        <div>
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="請輸入待辦事項" >
                    <a class="input-group-text rounded-md  right-0 ">
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
                            <li>
                                <span class="ms-3">1</span>
                            </li>
                        </ul>
                    </div>
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