### ES6 导出
``` js
export {
	flag, sum
}
```
### ES6 导入
``` js
import {flag, sum} from "./aaa.js"
```
### ES6 把多个 js 文件模块化(有作用域)，type 选择 module
```html
<!-- import 的要在前面 -->
<script src="bbb.js" type="module"></script>
<script src="aaa.js" type="module"></script>
```

