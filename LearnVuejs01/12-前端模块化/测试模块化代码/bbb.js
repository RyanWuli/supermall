import {flag, sum} from './aaa.js';

console.log('???????????????');
console.log(flag);
if (flag) {
	console.log(sum(20, 30));
}



import {num3, height} from './aaa.js'
console.log(num3, height);

import addr from './aaa.js' // 默认的导入可以修改名字
console.log(addr);

// import * as aaa from './aaa.js' 太多的时候统一拿出来放到对象里
// aaa.address