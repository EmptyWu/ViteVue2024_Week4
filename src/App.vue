<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo-color.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <button class="btn btn-primary">按鈕</button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="conatiner">
    <RouterView />
  </div>
</template>

<style scoped>


</style>
