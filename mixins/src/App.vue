<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

            <!-- <p>{{ text | reverseFilter | lengthFilter }}</p> -->

            <p>{{ reverseComputed }}</p>
            <p>{{ lengthComputed }}</p>

            </div>
        </div>
    </div>
</template>

<script>
import { mixinStuff } from './mixin';

export default {
    data() {
        return {
            text: 'hello'
        }
    },
    filters: {
        reverseFilter(value) {
            return value.split('').reverse().join('')
        },
        lengthFilter(value) {
            return value + ` (${value.length})`
        }
    },
    computed: {
        reverseComputed() {
            return this.text.split('').reverse().join('')
        },
        lengthComputed() {
            return this.text + ` (${this.text.length})`
        }
    },
    mixins: [mixinStuff]
}
</script>

<style>
</style>
