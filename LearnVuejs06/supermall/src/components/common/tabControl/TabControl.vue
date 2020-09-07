<!--  -->
<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titleList" :key="item" :class="{active_item: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data () {
      return {
        currentIndex: 0
      }
    },
    props: {
      titleList: {
        type: Array,
        default: []
      }
    },
    methods: {
      itemClick(current) {
        this.currentIndex = current
        this.$emit('tabClick', current)
      }
    }
  }
</script>

<style  scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    z-index: 99;
  }
  .tab-control-item {
    flex: 1;
    height: 44px;
    line-height: 44px;
  }
  .active_item {
    color: var(--color-text);
  }
  .active_item span {
    border-bottom: 3px solid var(--color-text);
    padding: 5px;
  }
  
</style>
