<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpper }}</p>
            </div>
            <input type="text" name="" v-model="filterText">
            <ul>
              <li v-for="fruit in filteredFruits"> {{ fruit }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin'
  export default {
    data() {
      return {
        fruits: ['Apple', 'Banana', 'Mango', 'Pear', 'Melon'],
        filterText: '',
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((element) => {
          return element.match(this.filterText);
        })
      }
    }
  }
</script>

<style>

</style>
