<template>
  <tab-bar>
    <!-- activeColor="cyan" -->
    <tab-bar-item path="/home" activeColor="#f96056">
      <img slot='item-icon' src="~assets/img/tabbar/icon01.png">
      <img slot='item-icon-active' src="~assets/img/tabbar/icon01_active.png">
      <div slot='item-text'>首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categore" activeColor="#f96056">
      <img slot='item-icon' src="~assets/img/tabbar/icon02.png">
      <img slot='item-icon-active' src="~assets/img/tabbar/icon02_active.png">
      <div slot='item-text'>分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#f96056">
      <img slot='item-icon' src="~assets/img/tabbar/icon03.png">
      <img slot='item-icon-active' src="~assets/img/tabbar/icon03_active.png">
      <div slot='item-text'>购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#f96056">
      <img slot='item-icon' src="~assets/img/tabbar/icon04.png">
      <img slot='item-icon-active' src="~assets/img/tabbar/icon04_active.png">
      <div slot='item-text'>我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
