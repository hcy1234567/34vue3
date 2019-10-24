<template>
    <div class="demo2">
        <h1>问卷调查表填写 </h1>
        <p>2.请选择您的兴趣爱好</p>
        <label><input type="checkbox" name="like" v-model="like" value="看书" >看书</label>
        <label><input type="checkbox" name="like" v-model="like" value="游泳">游泳</label>
        <label><input type="checkbox" name="like" v-model="like" value="跑步">跑步</label>
        <label><input type="checkbox" name="like" v-model="like" value="看电影">看电影</label>
        <label><input type="checkbox" name="like" v-model="like" value="听音乐">听音乐</label>
        <label><input type="checkbox" name="like" v-model="like" value="动漫">动漫</label><br>
        <a @click="doChoice()"> 下一步</a>
        <router-link to="/">上一步</router-link>
        <a>重置</a>
    </div>
</template>

<script>
    export default {
        name: "Second",
        data(){
            return{
               like:[]
            }
        },
        methods:{
            doChoice(){
                this.$router.push("/Third")
                this.$store.commit("doChoice",this.like)
            }
        }
    }
</script>

<style scoped>
    .demo2{
        width: 400px;
        height: 400px;
        margin: 100px auto;
        text-align: center;
    }
    a{margin-left: 30px;text-decoration: none}
</style>