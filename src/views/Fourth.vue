<template>
    <div class="demo4">
      <h1>问卷调查表填写</h1>
        <p>您的性别是：{{this.$store.state.sex}}</p>
        <p> 您的爱好是：{{this.$store.state.like.join(",")}}</p>
        <p>个人简介:{{this.$store.state.txt}}</p>
    </div>
</template>

<script>
    export default {
        name: "Four"
    }
</script>

<style scoped>
    .demo4{
        width: 400px;
        height: 400px;
        margin: 100px auto;
        text-align: center;
    }
    a{margin-left: 30px;text-decoration: none}
</style>