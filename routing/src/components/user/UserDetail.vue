<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded: {{ $route.params.id }}</p>

    <router-link
        tag="button"
        class="btn btn-primary"
        :to="{
                name: 'userEdit',
                params: {
                  id: $route.params.id
                },
                query: {
                  locale: 'en',
                  q: 100
                },
                hash: '#element'
              }">
            Edit User
      </router-link>

  </div>
</template>
