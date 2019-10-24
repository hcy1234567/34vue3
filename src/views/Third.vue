<template>
    <div class="demo3">
        <h1>问卷调查表填写</h1>
        <p>3.请介绍一下自己</p>
        <p>{{this.$store.state.checked}}</p>
        <textarea v-model="txt"></textarea><br>
        <a @click="doClick()">提交</a>
        <router-link to="/Second">上一步</router-link>
        <a>重置</a>
    </div>
</template>

<script>
    export default {
        name: "Third",
        data(){
            return{
                txt: ''
            }
        },
        methods:{
            doClick(){
                this.$router.push('/Four')
                this.$store.commit("doClick",this.txt)
            }
        }
    }
</script>

<style scoped>
    .demo3{
        width: 400px;
        height: 400px;
        margin: 100px auto;
        text-align: center;
    }
    a{margin-left: 30px;text-decoration: none}
</style>