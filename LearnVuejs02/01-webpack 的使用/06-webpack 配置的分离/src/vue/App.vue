<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="btnClick">点击</button>
		<h2>{{name}}</h2>
		<Cpn></Cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn.vue'
	export default {
		name: 'App',
		components: {
			Cpn
		},
		data() {
			return {
				message: '你好啊，李银河',
				name: 'Ryan'
			}
		},
		methods: {
			btnClick() {
				console.log('btnClick');
			}
		}
	}
</script>

<style scoped>
	.title {
		color: darkcyan;
	}
</style>
