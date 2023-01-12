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
      meta: { layout: 'guest' },
      component: () => import('../views/register/index.vue'),
      redirect: { path: '/register/main' },
      children: [
        {
          path: 'main',
          meta: { title: '가입하기' },
          component: () => import('../views/register/RegisterMainPage.vue'),
        },
        {
          path: 'form',
          meta: { title: '회원가입' },
          component: () => import('../views/register/RegisterFormPage.vue'),
        },
      ],
    },
    {
      path: '/login',
      meta: { layout: 'guest', title: '로그인' },
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/find-password',
      meta: { layout: 'guest', title: '비밀번호 찾기' },
      component: () => import('../views/FindPasswordPage.vue'),
    },
    {
      path: '/main',
      meta: { requireAuth: true, layout: 'member', title: '메인 페이지' },
      component: () => import('../views/MainPage.vue'),
    },
  ],
});

export default router;
