<script>
  export default {
    name: 'RegisterFormPage',
  };
</script>

<script setup>
  import { ref, computed } from 'vue';

  const showPasswordText = ref(false);
  const passwordInputType = computed(() =>
    showPasswordText.value ? 'text' : 'password',
  );
  const showModal = ref(false);
</script>

<template>
  <div class="w-100 px-3 pt-4" style="height: 65% !important">
    <div class="w-100 d-flex flex-column">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="닉네임"
          aria-label="닉네임"
        />
      </div>
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
      <div class="input-group mb-3">
        <input
          :type="passwordInputType"
          class="form-control"
          placeholder="비밀번호"
          aria-label="비밀번호"
        />
        <span class="input-group-text">
          <i
            v-if="showPasswordText"
            class="bi bi-eye-slash-fill"
            @click="showPasswordText = !showPasswordText"
          ></i>
          <i
            v-else
            class="bi bi-eye-fill"
            @click="showPasswordText = !showPasswordText"
          ></i>
        </span>
      </div>
      <div class="input-group mb-3">
        <input
          :type="passwordInputType"
          class="form-control"
          placeholder="비밀번호 확인"
          aria-label="비밀번호 확인"
        />
        <span class="input-group-text">
          <i
            v-if="showPasswordText"
            class="bi bi-eye-slash-fill"
            @click="showPasswordText = !showPasswordText"
          ></i>
          <i
            v-else
            class="bi bi-eye-fill"
            @click="showPasswordText = !showPasswordText"
          ></i>
        </span>
      </div>
    </div>
    <div class="w-100 mt-2">
      <b-button class="w-100 bg-primary" @click="showModal = true">
        가입하기
      </b-button>
    </div>
    <b-modal v-model="showModal" centered hide-header hide-footer>
      <h3 class="mb-5">회원가입</h3>
      <p>이메일이 발송되었습니다.</p>
      <p>받은 메일에서 링크를 클릭해주세요.</p>
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
