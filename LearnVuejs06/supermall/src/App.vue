<template>
  <div id="app">
    <!-- 让路由中的页面保持原来的状态 -->
    <!-- <router-view></router-view> -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
  export default {
    name: "App",
    components: {
      MainTabBar
    },
  };
</script>

<style scoped>
  @import 'assets/css/base.css';
  .main-tab-bar {
    z-index: 99;
  }
</style>
