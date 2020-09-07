<template>
  <div>
    <h2>我是 Profile</h2>
    <h2>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
      <p>{{$route.query.height}}</p>
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    created() {
      console.log('profile-----创建');
    },
    destroyed() {
      console.log('profile-----销毁');
    }
  }
</script>

<style>
</style>
