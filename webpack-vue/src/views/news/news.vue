<template>
    <div class="news">
        {{ newslist }}
    </div>
    
</template>

<script>
    export default {
        name: "news",
        data(){
           return {
               newslist:'this is newslist'
           }
        },
        methods:{
            getNewsList:function(){
                console.log("请求数据");
                this.$http.get("/getnewslist",).
                then(function (res) {
                    console.log("请求成功:"+res);
                }).
                catch(function (error) {
                    console.log("请求失败:"+error);
                })
            }
        },
        created(){
            this.getNewsList();
        }
    }
</script>

<style scoped>

</style>