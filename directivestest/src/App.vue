<template>
<div class="container">
    <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 v-my-on:click>Directives Exercise</h1>
    </div>
</div>
</div>
</template>

<script>
export default {
directives: {
    myOn: {
        bind(el, binding) {
            if (binding.arg == 'click') {
                el.addEventListener('click', () => {
                    el.innerText = 'clicked from event';
                })
            }
        }
    }
}
}
</script>

<style>
</style>
