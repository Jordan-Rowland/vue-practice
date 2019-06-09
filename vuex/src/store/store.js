/*jshint esversion:6*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0,
  },
  // for complex calculated values used in multiple
  //   places, use getters
  getters: {
    doubleCounter: state => state.counter * 2,
    stringCounter: state => state.counter + ' Clicks',
    value: state => state.value
  },
  mutations: {
    increment: state => state.counter++,
    decrement: state => state.counter--,
    updateValue: (state, payload) => state.value = payload
  },
  actions: {
    increment: context => context.commit('increment'),
    decrement: context => context.commit('decrement'),
    asyncIncrement: context => {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
    asyncDecrement: context => {
      setTimeout(() => {
        context.commit('decrement');
      }, 1000);
    },
    updateValue(context, payload) {
      context.commit('updateValue', payload);
    }
  }
});
