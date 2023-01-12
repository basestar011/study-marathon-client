<script>
  export default {
    name: 'RegisterMainPage',
  };
</script>

<script setup></script>

<template>
  <div class="w-100" style="height: 63% !important">
    <div
      class="w-100 d-flex flex-column justify-content-evenly px-3"
      style="height: 90% !important"
    >
      <b-button to="/register/form" class="bg-primary">이메일로 가입</b-button>
      <b-button to="" class="bg-primary">구글로 가입</b-button>
      <b-button to="" class="bg-primary">카카오로 가입</b-button>
      <b-button to="" class="bg-primary">네이버로 가입</b-button>
    </div>
    <div class="w-100 d-flex justify-content-around">
      <b-button to="" class="text-dark" variant="link"
        >개인정보 처리 방침</b-button
      >
      <b-button to="" class="text-dark" variant="link">이용약관</b-button>
    </div>
  </div>
</template>

<style scoped></style>
