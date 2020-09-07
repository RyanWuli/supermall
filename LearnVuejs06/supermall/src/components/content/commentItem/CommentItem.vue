<!--  -->
<template>
  <div v-if="Object.keys(item).length !== 0" class="comment-item">
    <div class="user-info">
      <img :src="item.headImg">
      <span>{{item.name}}</span>
    </div>
    <p class="content">{{item.content}}</p>
    <span class="bottom">{{item.time}}</span>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  data () {
    return {
    }
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less"  scoped>
  .comment-item {
    margin-bottom: 10px;
  }
  .user-info {
    display: flex;
    align-items: center;
    img {
      height: 30px;
      width: 30px;
      border-radius: 15px;
      margin-right: 10px;
    }
    span {
      font-size: 14px;
      font-weight: bold;
      // color: chartreuse;
    }
  }
  .content, .bottom {
    font-size: 12px;
  }
  .content {
    color: #666;
    margin: 8px 0;
    // text-indent: 2em;
    line-height: 16px;
  }
  .bottom {
    color: #999;
  }
</style>
