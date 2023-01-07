<script setup>
  import GuestLayout from './layout/guest/index.vue';
  import MemberLayout from './layout/member/index.vue';
  import { computed } from 'vue';
  import { useRoute, RouterView } from 'vue-router';

  const route = useRoute();
  const layoutComponent = computed(() => {
    switch (route.meta.layout) {
      case 'member':
        return MemberLayout;
      case 'guest':
      default:
        return GuestLayout;
    }
  });
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<style scoped></style>
