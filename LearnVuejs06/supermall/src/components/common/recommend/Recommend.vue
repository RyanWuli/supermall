<!--  -->
<template>
  <div class="recommend">
    <recommend-item class="item" v-for="item in recommends" :key="item.acm" :image-url="item.image" :title="item.title" :link-url="item.link"></recommend-item>
  </div>
</template>

<script>
  import RecommendItem from './RecommendItem'
  export default {
    name: "Recommend",
    data() {
      return {};
    },
    components: {
      RecommendItem
    },
    props: {
      recommends: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style  scoped>
  .recommend {
    display: flex;
    padding: 10px 0 15px 0;
    border-bottom: 10px solid #eee;
  }
  .item {
    flex: 1;
  }
</style>
