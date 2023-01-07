<script>
  export default {
    name: 'LayoutWrapper',
  };
</script>

<script setup>
  import SideBar from './SideBar.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-dark bg-primary fixed-top">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <SideBar
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
