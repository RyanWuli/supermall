
import { debounce } from 'common/utils'


export const itemListMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 等200ms执行
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 监听item中的图片加载完成,$bus事件总线,并且赋值给itemImgListener，取消时使用
    this.itemImgListener = () => {
      // console.log('Home 监听 item 图片加载完成')
      // this.$refs.scroll && this.$refs.scroll.refresh()
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    // console.log("我是 mixin 中的内容")
  }
}
