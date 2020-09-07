export default {
		template:`
			<div>
				<h2>{{message}}</h2>
				<button @click="btnClick">点击</button>
				<h2>{{name}}</h2>
			</div>
		`,
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