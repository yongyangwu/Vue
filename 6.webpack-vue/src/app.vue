<template>
    <div id="app">
        <!--<img src="images/logo.png" alt="logo" >-->
        <!--{{msg}}-->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {
                msg: 'hello vue111 sdd!!'
            }
        }
    }
</script>
