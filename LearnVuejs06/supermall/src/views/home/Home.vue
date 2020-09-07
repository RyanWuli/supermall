<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control-up"
      :titleList="titleList"
      @tabClick="tabClick"
      ref="tabControlUp"
      v-show="isTabFixed"
    ></tab-control>

    <!-- @pullingUp="loadMore" -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banner" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend :recommends="recommend"></recommend>
      <home-feature></home-feature>
      <tab-control class="tab-control" :titleList="titleList" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="btClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Recommend from 'components/common/recommend/Recommend'
import TabControl from 'components/common/tabControl/TabControl'
import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComp/HomeSwiper'
import HomeFeature from './childComp/HomeFeature'

import { getHomeMultidata, getHomeGoods } from 'network/home'

import { debounce } from 'common/utils'
import { itemListMixin } from 'common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    Recommend,
    TabControl,
    Scroll,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeFeature,
  },
  mixins: [itemListMixin],
  created() {
    // 请求广告推荐数据
    this.getHomeMultidata()

    // 请求商品信息
    for (const item of this.titleParams) {
      this.getHomeGoods(item)
    }
  },
  mounted() {
    // 等200ms执行
    // 这部分和detail中的重复，可以放入mixin中去
    // const refresh = debounce(this.$refs.scroll.refresh, 200)
    // // 监听item中的图片加载完成,$bus事件总线,并且赋值给itemImgListener，取消时使用
    // this.itemImgListener = () => {
    //   // console.log('Home 监听 item 图片加载完成')
    //   // this.$refs.scroll && this.$refs.scroll.refresh()
    //   refresh()
    // }
    // this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  // 如果keepalive存在问题就记录位置
  activated() {
    // console.log('activated')
    // console.log(this.scrollY)
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 记录y值
    // console.log(this.$refs.scroll.scrollY())
    this.scrollY = this.$refs.scroll.scrollY()
    // 取消home中的监听事件，可以解决在其他位置使用相同组件的时候图片加载完了，与这里无关，这里就不用了刷新了 ===== 另一种方法是直接
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  data() {
    return {
      banner: [],
      recommend: [],
      titleList: ['流行', '新款', '精选'],
      titleParams: ['pop', 'new', 'sell'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      titleIndex: 0,
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY: 0,
      // itemImgListener: null // mixin 中管理
    }
  },
  computed: {
    currentType() {
      return this.titleParams[this.titleIndex]
    },
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  methods: {
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(sort) {
      const page = this.goods[sort].page + 1
      getHomeGoods(page, sort).then((res) => {
        // console.log(res)
        this.goods[sort].list.push(...res.wall.list)
        this.goods[sort].page += 1
      })
    },
    // 事件监听相关的方法
    tabClick(current) {
      // console.log(current)
      this.titleIndex = current
      this.$refs.tabControlUp.currentIndex = current
      this.$refs.tabControl.currentIndex = current
    },
    btClick() {
      // console.log('-----------------------')
      // 前两个参数代表 位置，最后参数代表时间
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // 判断 backtop 是否显示
      // console.log(position)
      this.isShow = -position.y > 1000

      // 判断tab-control 是否固定
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    // 下拉到底时间监听事件
    loadMore() {
      // console.log('加载更多中。。。')
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    swiperImgLoad() {
      // 获取 tabcontrol 的 offsettop
      // 所有组件都有一个属性叫 el，可以拿到组件的元素,受到图片加载的影响，需要监听图片加载完成然后再获取才是准确的
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },

    // 其它处理方法
  },
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-high-text);
  color: #ffffff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99; */
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.tab-control-up {
  position: relative;
  z-index: 66;
  background-color: #ffffff;
}

/* 用了better-scroll没有效果了 */
/* .tab-control { */
/* 设置定点固定 */
/* position: sticky;
  top: 44px;
  background-color: #fff;
} */
.tab-control {
  margin-bottom: 10px;
}
.content {
  /* height: calc(100% - 93px); */
  /* margin-top: 44px; */
  /* height: 500px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>

