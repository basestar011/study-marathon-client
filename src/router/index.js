import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { layout: 'guest' },
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/register',
      meta: { layout: 'guest', title: '가입하기' },
      component: () => import('../views/RegisterPage.vue'),
    },
    {
      path: '/login',
      meta: { layout: 'guest', title: '로그인' },
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/main',
      meta: { layout: 'member', title: '메인 페이지' },
      component: () => import('../views/MainPage.vue'),
    },
  ],
});

export default router;
