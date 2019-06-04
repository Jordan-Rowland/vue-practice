<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button
      @click="navigateToHome"
      class="btn btn-primary">Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
/* jshint esversion: 9 */
export default {
  name: 'User',
  methods: {
    navigateToHome(){
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>

</style>
