<!--  -->
<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name: 'GoodsList',
  data () {
    return {
    }
  },
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default: []
    }
  }
}
</script>

<style  scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: unset;
    /* margin: 0 2%; */
  }
  .goods::after {
    content: '';
    /* flex: auto; */
    width: 47%;
  }
</style>
