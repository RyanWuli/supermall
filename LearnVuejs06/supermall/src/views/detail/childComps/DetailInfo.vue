<!--  -->
<template>
  <div class="detail-info" v-if="Object.keys(detail).length !== 0">
    <div class="detail-desc">
      <div class="top">
        <i></i>
      </div>
      <p>{{detail.desc}}</p>
      <p>{{detail.detailImage.desc}}</p>
      <div class="bottom">
        <i></i>
      </div>
    </div>
    <div class="detail-img">
      <p>{{detail.detailImage.key}}</p>
      <!-- @load="imgLoad"图片加载完成触发事件 -->
      <img v-for="item in detail.detailImage.list" :key="item" :src="item" @load="imgLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  data() {
    return {
      counter: 0,
      imgListLength: 0
    }
  },
  props: {
    detail: {
      type: Object,
      default: {},
    },
  },
  methods: {
    imgLoad() {
      // 判断所有的图片加载完成之后然后再进行触发刷新方法
      if (++this.counter === this.imgListLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detail() {
      this.imgListLength = this.detail.detailImage.list.length
    }
  }
}
</script>

<style lang="less" scoped>
.detail-info {
  width: 100%;
  .detail-desc {
    padding: 20px 0;
    margin: 0 10px;
    p {
      clear: both;
      font-size: 12px;
      text-indent: 2em;
      margin: 20px 10px;
      line-height: 16px;
    }
    .top {
      float: left;
      position: relative;
      height: 1px;
      width: 100px;
      display: block;
      background-color: var(--color-text);
      i {
        left: 0;
        position: absolute;
        height: 5px;
        width: 5px;
        top: -2.5px;
        background-color: var(--color-text);
        border-radius: 2.5px;
      }
    }
    .bottom {
      float: right;
      position: relative;
      height: 1px;
      width: 100px;
      display: block;
      background-color: var(--color-text);
      i {
        right: 0;
        position: absolute;
        height: 5px;
        width: 5px;
        top: -2.5px;
        background-color: var(--color-text);
        border-radius: 2.5px;
      }
    }
  }
  .detail-img {
    margin-left: 10px;
    margin-right: 10px;
    p {
      font-size: 12px;
    }
    // width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
