// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import OurWork from '../views/OurWork.vue';
import AboutUs from '../views/AboutUs.vue';

const routes = [
  {
    path: '/',
    name: 'OurWork',
    component: OurWork
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
