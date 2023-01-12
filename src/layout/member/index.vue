<script>
  export default {
    name: 'UserLayout',
  };
</script>

<script setup>
  import SideBar from './MemberSideBar.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <nav class="navbar fixed-top bg-primary">
          <div class="container-fluid">
            <button
              class="navbar-toggler ps-0 text-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <i class="bi bi-list"></i>
            </button>
            <span class="text-white">타이틀</span>
            <button class="search-btn text-white" type="button">
              <i class="bi bi-search"></i>
            </button>
            <SideBar
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            />
          </div>
        </nav>
        <main>메인</main>
        <nav class="navbar fixed-bottom bg-primary text-white">
          <div class="container-fluid">
            <b-button variant="link" class="text-decoration-none text-white"
              ><i class="bi bi-suit-heart-fill fs-4"></i> <br /><small
                >favorite</small
              ></b-button
            >
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .navbar-toggler {
    border: none;
  }
  .search-btn {
    background-color: transparent;
    border: none;
  }
</style>
