// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '../components/HomeScreen.vue';
import SecondPage from '../components/SecondPage.vue';

const routes = [
  { path: '/', component: HomeScreen },
  { path: '/second-page', component: SecondPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
