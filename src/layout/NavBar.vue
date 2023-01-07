<script>
  export default {
    name: 'NavBar',
  };
</script>

<script setup></script>

<template>
  <nav class="navbar navbar-light fixed-top py-0">
    <div class="container">
      <template v-if="showGoBackBtn">
        <b-button to="/" variant="link" class="fs-4 text-dark">
          <i class="bi bi-chevron-left"></i>
        </b-button>
      </template>
    </div>
  </nav>
</template>

<style scoped></style>
