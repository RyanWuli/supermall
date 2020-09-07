
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20,30));
console.log(mul(20,30));

import {name, age, height} from './js/info'
console.log(name);
console.log(age);
console.log(height);

// 依赖 css 文件 ，让 css 能够被加载
require('./css/normal.css')

// 依赖 less 文件
require('./css/special.less')

import Vue from 'vue'

// import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})

