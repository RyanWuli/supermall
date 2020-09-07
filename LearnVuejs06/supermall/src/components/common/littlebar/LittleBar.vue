<!--  -->
<template>
  <div class="little-bar">
    <div class="title">{{barTitle}}</div>
    <div class="more">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LittleBar',
  data () {
    return {
    }
  },
  props: {
    barTitle: {
      type: String,
      default: '用户评论'
    }
  }
}
</script>

<style lang="less" scoped>
  .little-bar {
    display: flex;
    // margin: 0 10px;
    padding: 10px 0;
    font-size: 14px;
    // border: 1px solid red;
    align-items: center;
  }
  .title {
    flex: 1;
  }
  .more {
    text-align: right;
    vertical-align: middle;
    display: flex;
  }
</style>
