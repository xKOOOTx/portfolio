import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../components/Resume.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../components/Portfolio.vue'),
  },
  {
    path: '/contacts',
    name: 'ContactMe',
    component: () => import('../components/ContactMe.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
