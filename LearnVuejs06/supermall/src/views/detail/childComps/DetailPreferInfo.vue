<!--  -->
<template>
  <div>
    <little-bar class="little-bar" :barTitle="barTitle">
      <img src="~assets/img/detail/更多.svg" alt="">
    </little-bar>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import LittleBar from 'components/common/littlebar/LittleBar'
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'DetailPreferInfo',
  data () {
    return {
      barTitle: '猜你喜欢'
    }
  },
  components: {
    LittleBar,
    GoodsList
  },
  props: {
    goods: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less"  scoped>
  .little-bar {
    margin: 0 10px;
    img {
      height: 16px;
    }
  }
</style>
