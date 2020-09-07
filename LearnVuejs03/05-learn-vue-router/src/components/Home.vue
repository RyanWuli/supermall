<template>
  <div>
    <h2>我是 Home 页</h2>
    <p>我是 Home 页内容，o(∩_∩)o 哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // 笨办法跳转后显示标题更改
    // created() {
    //   document.title = '首页'
    // }
    name: 'Home',
    data() {
      return {
        path: '/home/news'
      }
    },
    created() {
      console.log('创建-----Home');
    },
    destroyed() {
      console.log('Home-----销毁');
    },
    // activated 和 disactivated 两个函数必须在 keepalive 才会调用
    activated() {
      this.$router.push(this.path)
    },
    // 路由离开的时候
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
  }
</script>

<style>
</style>
