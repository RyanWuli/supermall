<template>
	<div>
		<h2>我是 cpn 组件标题</h2>
		<p>我是 cpn组件内容，o(∩_∩)o 哈哈</p>
		<h2>{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Cpn',
		data() {
			return {
				name: 'Cpn 组件名'
			}
		}
	}
</script>

<style>
</style>
