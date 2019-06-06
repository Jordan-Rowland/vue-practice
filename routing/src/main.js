/*jshint esversion:7*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehaviour(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0,
    };
  }
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  // next() must be called so the program knows
  // to go to the next part of the program
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
