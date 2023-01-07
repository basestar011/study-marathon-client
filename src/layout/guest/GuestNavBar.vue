<script>
  export default {
    name: 'GuestNavBar',
  };
</script>

<script setup>
  import { useRoute, useRouter } from 'vue-router';
  const router = useRouter();
  const route = useRoute();
</script>

<template>
  <nav class="navbar navbar-light fixed-top py-0">
    <div
      v-if="route.path !== '/'"
      class="container gx-0 d-flex justify-content-between"
    >
      <b-button
        to=""
        @click="router.go(-1)"
        variant="link"
        class="fs-4 text-dark fw-bold"
      >
        <i class="bi bi-chevron-left"></i>
      </b-button>
      <b-button to="/" variant="link" class="fs-4 text-dark fw-bold">
        <i class="bi bi-house"></i>
      </b-button>
    </div>
  </nav>
</template>

<style scoped></style>
