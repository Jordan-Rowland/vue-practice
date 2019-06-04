/* jshint esversion:6 */

import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

// Set a base URL to use
Vue.http.options.root = 'https://vue-resource-practice-ba5c4.firebaseio.com/';
// Intercept requests, next method tells the function
// when to move forward with response
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  // Add argument here for response interceptor
  next(response => {
    response.json = () => { return {messages: response.body}; };
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
