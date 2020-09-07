<!--  -->
<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages" :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  nane: 'DetailSwiper',
  data () {
    return {
    }
  },
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  created() {

  },
  mounted() {
    // console.log(this.topImages)
  }
}
</script>

<style  scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
  /* .detail-swiper img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  } */
</style>
