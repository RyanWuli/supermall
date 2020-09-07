<template>
  <div>
    <h2>我是 About 页</h2>
    <p>我是 About 页内容，╰(￣▽￣)╮</p>
  </div>
</template>

<script>
  export default {
    // created() {
    //   document.title = '关于'
    // }
    name: 'About',
    created() {
      console.log('创建-----About');
    },
    destroyed() {
      console.log('About-----销毁');
    }
  }
</script>

<style>
</style>
