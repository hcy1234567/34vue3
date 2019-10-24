<template>
    <div class="demo1">
        <h1>问卷调查表填写</h1><br>
        <p>1.请问您的性别是：</p>
        <p><input type="radio" name="sex"  value="男" v-model="sex">男
            <input type="radio" name="sex" value="女" v-model="sex">女
            <input type="radio" name="sex" >保密</p>
        <a href="#" @click="doSex()">下一步</a>
        <a href="#">重置</a>
    </div>
</template>

<script>

    export default {
        name: "Frist",
        data(){
            return{
                sex:''
            }
        },
        methods:{
            doSex(){
                this.$router.push('/Second')
                this.$store.commit("doSex",this.sex)
            }
        }
    }
</script>

<style scoped>
    .demo1{
     width: 400px;
        height: 400px;
        margin: 100px auto;
        text-align: center;
    }
a{margin-left: 30px;text-decoration: none}
</style>