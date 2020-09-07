<!--  -->
<template>
  <div class="feature">
    <a :href="imgUrl">
      <img src="~assets/img/home/recommendnew.png"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeFeature',
  data () {
    return {
    }
  },
  props: {
    imgUrl: {
      type: String,
      default: 'https://act.mogujie.com/zzlx67'
    }
  }
}
</script>

<style  scoped>
  .feature img{
    width: 100%;
  }
</style>
