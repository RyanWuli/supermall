let flag = true
let name = '小明'

function sum(num, num2) {
	return num + num2
}

import {age} from './bbb.js'
console.log(age);

export {
	flag, sum
}

export var num3 = 100
export var height = 1.88

const address = '重庆市'

export default address // 默认的导出只能一个


