<template>
    <div class="register">
        name: <input type="text" v-model="userName">
        <div></div>
        password: <input type="text" v-model="password">
        <div></div>
        submit: <button @click="register">注册</button>
    </div>
    
</template>

<script>
    export default {
        name: "register",
        data(){
           return {
               userName:'',
               password:''
           }
        },
        methods:{
            register:function(){
                console.log("提交数据");
                this.$http.post("/register", {
                    userName:this.userName,password:this.password
                }).
                then(function (res) {
                    console.log("注册成功:"+res);
                    // _this.$router.push({path:'/home'});
                }).
                catch(function (error) {
                    console.log("注册失败:"+error);
                })
            }

        }
    }
</script>

<style scoped>

</style>