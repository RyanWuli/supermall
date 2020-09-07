<!--  -->
<template>
  <!-- v-if="Object.keys(paramsInfo).length !== 0" -->
  <div v-if="Object.keys(paramsInfo).length !== 0" class="params-info">
    <table class="size">
      <tr v-for="(item,index) in paramsInfo.rule.table" :key="index">
        <td v-for="td in item" :key="td">{{td}}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="item in paramsInfo.info.set" :key="item.key">
        <td class="info-key">{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  data() {
    return {}
  },
  props: {
    paramsInfo: {
      type: Object,
      default: {},
    },
  },
  created() {
    // console.log(this.paramsInfo)
  },
  watch: {
    paramsInfo() {
      // console.log(this.paramsInfo)
    },
  },
}
</script>

<style lang="less"  scoped>
.params-info {
  padding: 0 20px;
  .size {
    width: 100%;
    // text-align: center;
    margin: auto;
    font-size: 14px;
    // border-collapse: separate;
    // border-spacing: 0 0;
    // border-color: rgba(100, 100, 100, 0);
    tr {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid rgba(207, 206, 206, 0.5);
    }
  }
  .info {
    font-size: 14px;
    width: 100%;
    color: var(--color-text);
    // border-collapse: separate;
    // border-spacing: 0 10;
    // border-color: rgba(100, 100, 100, 0);
    tr {
      height: 40px;
      border-bottom: 1px solid rgba(207, 206, 206, 0.5);
      // text-align: center;
    }
    .info-key {
      width: 30%;
    }
  }
}
</style>
