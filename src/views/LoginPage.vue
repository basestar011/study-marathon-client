<script>
  export default {
    name: 'LoginPage',
  };
</script>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, computed } from 'vue';

  const router = useRouter();
  const showPasswordText = ref(false);
  const passwordInputType = computed(() =>
    showPasswordText.value ? 'text' : 'password',
  );

  const login = () => {
    router.push('/main');
  };
</script>

<template>
  <div class="w-100 h-100 px-3">
    <div class="w-100" style="height: 30% !important">
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
    </div>
    <div
      class="w-100 d-flex flex-column justify-content-evenly"
      style="height: 30% !important"
    >
      <b-button class="bg-primary" @click.prevent="login"> 로그인 </b-button>
      <b-button class="bg-primary"> 시작하기 </b-button>
    </div>
    <div
      class="w-100 text-center text-decoration-none"
      style="height: 10% !important"
    >
      <b-button to="/find-password" class="text-dark" variant="link">
        비밀번호 찾기
      </b-button>
    </div>
  </div>
</template>

<style scoped>
  .form-control,
  .form-select {
    font-size: 0.8rem;
  }
</style>
