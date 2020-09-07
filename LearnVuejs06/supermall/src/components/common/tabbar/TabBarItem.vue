<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/首页.png" alt="">
    <div>首页</div> -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
  <!-- <div class="tab-bar-item">
    <img src="../../assets/img/tabbar/分类.png" alt="">
    分类
  </div>
  <div class="tab-bar-item">
    <img src="../../assets/img/tabbar/购物车.png" alt="">
    购物车
  </div>
  <div class="tab-bar-item">
    <img src="../../assets/img/tabbar/我的.png" alt="">
    我的
  </div> -->
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#d4237a'
      }
    },
    data() {
      return {
        // isactive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        console.log('itemClick');
        this.$router.replace(this.path)
      }
    }
  }
</script>
<!-- vertical-align: middle; 去掉图片的边距 -->
<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    color: #707070;
  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
/*  .active {
    color: #d4237a;
  } */
</style>
