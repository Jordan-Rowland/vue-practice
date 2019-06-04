<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                  <label>Mail</label>
                  <input type="text" class="form-control" v-model="user.mail">
                </div>
                <button class="btn btn-primary"
                @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control"
                v-model="node">
                <br><br>
                <button class="btn btn-primary"
                @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item"
                  v-for="user in users">{{ user.username }} -
                  {{ user.mail }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          mail: ''
        },
        users: [],
        resource: {},
        node: 'data'
      };
    },
    methods: {
      submit() {
        // this.$http.post('data.json', this.user);
        // this.resource.save({}, this.user);
        this.resource.saveAlt(this.user);
        this.user.username = ''
        this.user.mail = ''
      },
      fetchData() {
        // this.$http.get('data.json')
          // .then(response => response.json())
          // .then(data => {
          //   let resultArray = [];
          //   for (let key in data) {
          //     resultArray.push(data[key]);
          //   }
          //   this.users = resultArray;
          // });
        this.resource.getData({node: this.node})
        .then(response => response.json())
          .then(data => {
            let resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
          });
      }
    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET', }
      }
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
</script>

<style>
</style>
