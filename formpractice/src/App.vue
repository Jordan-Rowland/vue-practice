<template>
    <div class="container">
<form>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <br>
            <br>
<label>First Name
<input type="text" v-model="first">
</label>
<label>Last Name
<input type="text" v-model="last">
</label>
<label>Email
<input type="text" v-model="email">
</label>
<label>Password
<input type="password" v-model="password">
</label>
<br>
<label>Store in databse?
<input type="checkbox" v-model="dbStore">
</label>
<br>
<button class="btn btn-primary"
@click.prevent="showSubmit = true"
>Submit</button>
        </div>
    </div>
</form>
        <hr>
        <div class="row"  v-if="showSubmit">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ first + ' ' + last }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ dbStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
data() {
    return {
        first:'',
        last:'',
        password:'',
        email:'',
        dbStore: false,
        showSubmit: false
    }
}
    }
</script>

<style>
</style>
