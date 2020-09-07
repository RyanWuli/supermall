<!--  -->
<template>
  <div class="shop-info">
    <div class="shop-base">
      <img :src="shopInfo.shopLogo" :alt="shopInfo.name">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="middle">
      <div class="count">
        <div>
          <span class="num">{{shopInfo.cSells | sellCount}}</span>
          <span class="words">总销量</span>
        </div>
        <div>
          <span class="num">{{shopInfo.cGoods}}</span>
          <span class="words">全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <!-- <div v-for="item in shopInfo.score" :key="item.name">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span :class="">{{item.isBetter ? '高' : '低'}}</span>
        </div> -->
        <table border="1">
          <tr v-for="item in shopInfo.score" :key="item.name">
            <td>{{item.name}}</td>
            <td :class="{'better-score':item.isBetter, 'lower-score':!item.isBetter}">{{item.score}}</td>
            <td class="score-text" :class="{'better-high':item.isBetter, 'lower-text':!item.isBetter}" >{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="into-shop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data () {
    return {
    }
  },
  props: {
    shopInfo: {
      type: Object,
      default: {}
    }
  },
  filters: {
    sellCount(value) {
      if (value >= 10000) {
        return (value / 10000).toFixed(2) + '万'
      }
      return value
    }
  }
  // computed: {
  //   sellCount() {
  //     if (Object.keys(shopInfo).length <= 0) {
  //       return 0
  //     }
  //     let count = shopInfo.cSells
  //     let sells = ''
  //     if (count >= 10000) {
  //       sells = (count / 10000).toFixed(2) + '万'
  //       return sells
  //     }
  //     return count
  //   },
  //   highOrLow(isBetter) {
  //     if (isBetter) {
  //       return '高'
  //     }
  //     return '低'
  //   }
  // }
}
</script>

<style  scoped>
  .shop-info {
    /* margin: 24px 10px; */
    border-bottom: 5px solid #f5f5f5;
    padding: 24px 10px;
  }
  .shop-base {
    height: 32px;
    margin-bottom: 24px;
  }
  .shop-base span {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
  }
  .shop-base img {
    height: 32px;
    width: 32px;
    border-radius: 16px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .count {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    border-right: 1px solid #f5f5f5;
  }
  .count div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* .count::after {
    content: '';
    height: 50px;
    border-left: 1px solid #f5f5f5;
  } */
  .num {
    font-size: 14px;
    margin: 5px 0;
  }
  .words {
    font-size: 12px;
    margin: 5px 0;
  }
  .score {
    flex: 1;
  }
  .score table {
    /* display: inline-block; */
    margin: auto;
    /* vertical-align: middle; */
    border-collapse: separate;
    border-spacing: 8px 3px;
    border-color: rgba(100, 100, 100, 0);
    /* font-size: 12px; */
  }
  .score td {
    /* padding: 0 5px; */
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    /* width: 100%; */
    /* padding: 5px 3px; */
    margin: 5px 3px;
    /* background: red; */
  }
  .middle {
    display: flex;
  }
  .score-text {
    color: #ffffff;
  }
  .better-score {
    color: rgb(253, 76, 76);
  }
  .better-high {
    background-color: rgb(253, 76, 76);
  }
  .lower-score {
    color: rgb(107, 253, 87);
  }
  .lower-text {
    background-color: rgb(107, 253, 87);
  }
  .into-shop {
    margin: 20px auto 0;
    height: 28px;
    line-height: 28px;
    width: 150px;
    border-radius: 14px;
    text-align: center;
    color: #ffffff;
    background-color: var(--color-high-text);
  }
</style>
