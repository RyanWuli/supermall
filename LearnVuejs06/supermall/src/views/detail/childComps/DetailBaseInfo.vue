<!--  -->
<template>
  <!-- goods有内容才展示该div -->
  <div v-if="Object.keys(goods).length !== 0" class="goods-info">
    <div class="title">{{goods.title}}</div>
    <div class="info-price">
      <div class="price">{{goods.price}}</div>
      <div class="org-price">{{goods.orgPrice}}</div>
      <div
        class="discount-desc"
        :style="{backgroundColor:goods.discountBgColor}"
      >{{goods.discountDesc}}</div>
    </div>
    <div class="info-columns">
      <div v-for="item in goods.columns" :key="item">{{item}}</div>
    </div>
    <div class="info-service">
      <div v-for="item in goods.service" :key="item.name">
        <img :src="item.icon" :alt="item.name" />
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  data() {
    return {}
  },
  props: {
    goods: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style  scoped>
.goods-info {
  padding: 10px 10px;
  padding-bottom: 20px;
  border-bottom: 5px solid #f5f5f5;
}
.title {
  font-size: 14px;
  font-weight: bold;
}
.price {
  font-size: 24px;
  color: var(--color-text);
  margin-right: 10px;
}
.org-price {
  font-size: 12px;
  text-decoration-line: line-through;
  margin-right: 10px;
  color: #999;
}
.discount-desc {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  padding: 0 8px;
  margin-bottom: 8px;
  color: white;
  /* background-color: aquamarine; */
}
.info-price {
  display: flex;
  /* 基准线 */
  align-items: flex-end;
  margin-top: 10px;
  margin-bottom: 15px;
}
.info-columns {
  font-size: 12px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  color: #999;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.info-service {
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.info-service img {
  height: 16px;
  width: 16px;
  margin-right: 2px;
}
.info-service div {
  display: flex;
  align-items: center;
  margin: 5px 0;
}
</style>
