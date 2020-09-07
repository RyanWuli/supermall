<!--  -->
<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="scroll-container" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info class="shop-info" :shopInfo="shop"></detail-shop-info>
      <detail-info :detail="detail" @imageLoad="imageLoad"></detail-info>
      <detail-params-info ref="params" class="params-info" :paramsInfo="itemParams"></detail-params-info>
      <detail-comment ref="comment" :comment="commentInfo"></detail-comment>
      <detail-prefer-info ref="prefer" :goods="preferInfo"></detail-prefer-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailInfo from './childComps/DetailInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailComment from './childComps/DetailComment'
import DetailPreferInfo from './childComps/DetailPreferInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetailData, Goods } from 'network/detail'

import { debounce } from 'common/utils'
import { itemListMixin } from 'common/mixin'

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      detail: {},
      itemParams: {},
      commentInfo: [],
      preferInfo: [],
      themeTopYs: [0, 1000, 2000, 3000], // 可以在update
      currentIndex: 0
      // itemImgListener: null // mixin 中管理
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParamsInfo,
    DetailComment,
    DetailPreferInfo,
    Scroll,
  },
  mixins: [itemListMixin],
  created() {
    // console.log(this.$route.params.iid)
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    this.getDetailData(this.iid)
  },
  mounted() {
    // // 等200ms执行
    // 放入 mixin 中通 home 共同使用
    // const refresh = debounce(this.$refs.scroll.refresh, 200)
    // // 监听item中的图片加载完成,$bus事件总线,并且赋值给itemImgListener，取消时使用
    // this.itemImgListener = () => {
    //   // console.log('Home 监听 item 图片加载完成')
    //   // this.$refs.scroll && this.$refs.scroll.refresh()
    //   refresh()
    // }
    // this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  activated() {},
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  // 图片加载会影响高度计算所以值不准确，计算各个跳转位置的y值
  // updated() {
  //   this.themeTopYs = []
  //   this.themeTopYs.push(0)
  //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
  //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
  //   this.themeTopYs.push(this.$refs.prefer.$el.offsetTop)
  //   console.log(this.themeTopYs)
  // },
  methods: {
    getDetailData(iid) {
      getDetailData(iid)
        .then((res) => {
          // console.log(res)
          // let array = []
          // for (const item of res.data) {
          //   array.push(item.url)
          // }
          // this.topImages = array
          // console.log(this.topImages)
          let data = res.result
          this.topImages = data.itemInfo.topImages
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
          this.shop = data.shopInfo
          this.detail = data.detailsInfo
          this.itemParams = data.itemParams
          this.commentInfo = data.commontInfo
          this.preferInfo = data.preferInfo

          // 渲染完成执行这个里面的方法,但是还是会受到图片加载的影响拿不到准确的值
          // this.$nextTick(() => {
          //   this.themeTopYs = []
          //   this.themeTopYs.push(0)
          //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          //   this.themeTopYs.push(this.$refs.prefer.$el.offsetTop)
          //   console.log(this.themeTopYs)
          // })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    imageLoad() {
      this.$refs.scroll.refresh()
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.prefer.$el.offsetTop)
      console.log(this.themeTopYs)
    },
    titleClick(index) {
      // console.log(index)
      // better-scroll 滚动到某个位置（x坐标，y坐标，时间毫秒跳到位置的时间 ）
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position) {
      // console.log(position)
      const y = -position.y
      let length = this.themeTopYs.length
      // for 循环 in 里面的index是字符串
      for (let i = 0; i < length; i++) {
        // 最后一个没哟 i+1 所以判断分开前几个和最后一个
        if (this.currentIndex !== i && ((i < length - 1 && y >= this.themeTopYs[i] && y < this.themeTopYs[i+1]) || (i === length - 1 && y >= this.themeTopYs[i]))) {
          // console.log(i)
          this.currentIndex = i
          console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex // 对组件内的属性进行操作
        }
      }
    }
  },
}
</script>

<style  scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 100;
  /* overflow: hidden; */
  background-color: #ffffff;
}
.scroll-container {
  position: absolute;
  top: 44px;
  bottom: 60px;
  width: 100%;
  /* overflow: hidden; */
}
.nav-bar {
  position: relative;
  z-index: 101;
  background-color: #fff;
}
/* .params-info {
  padding-bottom: 20px;
  border-bottom: #f5f5f5 solid 5px;
} */
/* .shop-info::before, .shop-info::after {
  content: '';
  display: block;
  width: 100%;
  border-bottom: 5px solid #f5f5f5;
} */
</style>
