// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import OurWork from '../views/OurWork.vue';
import AboutUs from '../views/AboutUs.vue';

const routes = [
  {
    path: '/our-work',
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
