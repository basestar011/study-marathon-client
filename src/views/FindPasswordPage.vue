<script>
  export default {
    name: 'FindPasswordPage',
  };
</script>

<script setup>
  import { ref } from 'vue';
  const showModal = ref(false);
</script>

<template>
  <div class="w-100 h-100 px-3">
    <div class="w-100">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="사용자 이메일"
          aria-label="사용자 이메일"
          style="width: 25%"
        />
        <span class="input-group-text">@</span>
        <select class="form-select">
          <option value="gmail.com" selected>gmail.com</option>
          <option value="naver.com">naver.com</option>
        </select>
      </div>
    </div>
    <div class="w-100 mt-4 d-flex flex-column justify-content-evenly">
      <b-button class="bg-primary" @click="showModal = true">
        메일 전송
      </b-button>
    </div>
    <b-modal v-model="showModal" centered hide-header hide-footer>
      <h3 class="mb-5">비밀번호 변경 메일 전송</h3>
      <p>이메일이 발송되었습니다.</p>
      <p>받은 메일을 통해서 비밀번호를 변경해주세요.</p>
      <b-button class="w-100 bg-primary mt-5" @click="showModal = false"
        >확인</b-button
      >
    </b-modal>
  </div>
</template>

<style scoped>
  .form-control,
  .form-select {
    font-size: 0.8rem;
  }
</style>
