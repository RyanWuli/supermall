<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户信息，编号是：{{userId}},♪(＾∀＾●)ﾉ</p>
		<button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
      userId() {
        return this.$route.params.user_id
      }
    },
		methods: {
			btnClick() {
				console.log(this.$router);
        console.log(this.$route);
			}
		},
    destroyed() {
      console.log('user-----销毁');
    },
    created() {
      // document.title = '用户'
      console.log('user-----创建');
    }
  }
</script>

<style>
</style>
