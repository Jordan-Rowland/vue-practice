<template>
  <ul class="nav nav-pills">
    <router-link
      to="/"
      tag="li"
      active-class="active"
      exact>
        <a>Home</a>
      </router-link>

    <router-link
      to="/user"
      tag="li"
      active-class="active"
      exact>
        <a>User</a>
      </router-link>


  </ul>
</template>

<script>
/* jshint esversion: 9 */
export default {
  name: 'Header',
  data() {
    return {

    };
  },

};
</script>

<style scoped>

</style>
