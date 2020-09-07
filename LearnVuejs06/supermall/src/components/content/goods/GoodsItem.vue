<!--  -->
<template>
  <div class="goods-item" @click="itemClick">
    <!-- @load="imageLoad"监听图片加载 -->
    <img :src=" 'show' in goodsItem ? goodsItem.show.img : goodsItem.url" @load="imageLoad"/>
    <div class="info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span v-if="'orgPrice' in goodsItem" class="org-price">{{goodsItem.orgPrice}}</span>
      <span v-if="'cfav' in goodsItem" class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  data() {
    return {}
  },
  props: {
    goodsItem: {
      type: Object,
      default: {},
    },
  },
  methods: {
    imageLoad() {
      // console.log('图片加载完成')
      // if (this.$route.path.indexOf('/home')) {
      //   // 通过当前判断去发送事件，可以发送不同事件，不同地方使用组件使用自己的事件, 这个思路可以完成各自监听自己的图片加载
      //   this.$bus.$emit('homeItemImageLoad')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailItemImageLoad')
      // }
      this.$bus.$emit('itemImageLoad') // 事件总线，发射事件，然后监听
    },
    itemClick() {
      // console.log('正在跳转详情页')
      // console.log(this.goodsItem.iid)
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style  scoped>
.goods-item {
  padding-bottom: 15px;
  width: 47%;
  /* padding: 5px; */
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.info {
  /* position: relative; */
  padding: 5px;
}
.info p {
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
}
.info .price {
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  color: var(--color-text);
}
.info .cfav {
  display: inline-block;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  position: relative;
}
.info .cfav::before {
  content: '';
  height: 16px;
  width: 16px;
  position: absolute;
  bottom: 2px;
  left: -16px;
  background: url('~assets/img/home/collect_icon.png');
  background-size: cover;
  /* border: 1px solid rebeccapurple; */
}
.org-price {
  font-size: 12px;
  margin-right: 50px;
  text-decoration: line-through;
}
</style>
