import { defineStore } from 'pinia';


interface users {
    exp:number;
    nickname:string;
    token:string;
}

export const usersStore=defineStore('users',{
    state:()=>({
        userData:null as users | null,
    }),
    actions:{
        setToken(data:users) {
            this.userData = data;
          },
        clearToken() {
            this.userData = null;
          },
    },
    getters:{
        isAuthenticated: (state) => !!state.userData,
        getNickname : (state) => state.userData?.nickname,
    },
    persist:true
})