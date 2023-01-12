<script>
  export default {
    name: 'HomePage',
  };
</script>

<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>

<template>
  <div class="w-100" style="height: 70% !important">
    <img src="@/assets/images/main.svg" class="w-100" alt="" />
    <p v-if="route.path === '/'" class="text-center">
      <strong>26's</strong>
    </p>
  </div>
  <div
    class="w-100 d-flex flex-column justify-content-evenly px-3 pb-3"
    style="height: 30% !important"
  >
    <b-button to="/register" class="bg-primary"> 가입하기 </b-button>
    <b-button to="/login" class="bg-primary"> 로그인 </b-button>
  </div>
</template>

<style scoped></style>
