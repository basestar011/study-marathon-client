<script>
  export default {
    name: 'GuestLayout',
  };
</script>

<script setup>
  import { useRoute } from 'vue-router';
  import NavBar from './GuestNavBar.vue';
  const route = useRoute();
</script>

<template>
  <div class="container-fluid vh-100 gx-0">
    <div class="row vh-100 gx-0">
      <div class="col vh-100">
        <NavBar />
        <main class="vh-100 pt-5">
          <div class="container h-100 px-0">
            <div class="row w-100 gx-0" style="height: 20% !important">
              <div v-if="route.meta.title" class="col h-100">
                <div class="w-100 pt-2 ps-2 fs-5" style="height: 5rem">
                  <span class="fw-bold">26'S</span>
                  <span class="text-primary fw-semibold d-block">
                    {{ route.meta.title }}
                  </span>
                </div>
              </div>
            </div>
            <div class="row w-100 gx-0" style="height: 80% !important">
              <div class="col h-100">
                <slot></slot>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
