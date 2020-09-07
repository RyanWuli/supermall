
// commonjs 模块化
const {add, mul} = require('./mathUtils.js')

console.log(add(20,30));
console.log(mul(20,30));

// ES6 模块化
import {name, age, height} from './info'
console.log(name);
console.log(age);
console.log(height);