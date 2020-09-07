<!--  -->
<template>
  <!-- <little-title-bar></little-title-bar> -->
  <div class="detail-comment">
    <little-bar class="little-bar">
      <span class="more">更多</span>
    </little-bar>
    <comment-item class="comment-item" v-for="(item,index) in comment" :key="index" :item="item"></comment-item>
  </div>
</template>

<script>
import LittleBar from 'components/common/littlebar/LittleBar'
import CommentItem from 'components/content/commentItem/CommentItem'
export default {
  name: 'DetailComment',
  data () {
    return {
    }
  },
  components: {
    LittleBar,
    CommentItem
  },
  props: {
    comment: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
 .detail-comment {
   padding: 10px 10px;
 }
 .more {
   font-size: 12px;
   color: var(--color-text);
 }
 .little-bar {
   border-bottom: 1px solid #f5f5f5;
   margin-bottom: 10px;
 }
</style>
