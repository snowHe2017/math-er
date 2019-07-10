# math-er

 
### 数学运算包
  基于系统数学计算对象Math,用于应对Math在部分计算时一些逻辑性问题和部分特殊计算错误，以契合计算器对于计算的要求及对于一些特殊计算的需要。
##### 浮点数运算bug补丁:
  * 系统Math计算对象对于浮点数运算，因为二进制转换所造成错位问题，在浮点数运算时会出现致命计算错误。
  * 优化数学程序计算中的问题，并对浮点数之间的加减乘除进行整理。
##### 优化：
  * 优化了部分Math的API，让计算更加简单快捷，并且更加契合程序计算的需求。
  * 优化了对入参数据的格式要求。
  * 优化math对象在某些情况下自动转成科学计数法的问题。
##### 增加部分功能：
  * 增加了部分数学功能，并达到程序计算时所需要的计算平台标准。
  * 增加了部分程序计算时经常使用到的移位，科学计数法转换等。
##### 内置函数：
  * 俩数大小比对 （兼容科学计数法）
  * 数字小数点移位
  * 科学计数法转正常数值
  * 俩数约分
  
 

### 用法

#####引用方式
```javascript

import { add, red } from 'math-er'
import mather from 'math-er'

```
#####用法
```javascript
import mather from 'math-er'
let result1 = mather.add(2,3.6) // 5.6
let result2 = mather.sub(2, 3) // -1
let result2 = mather.mul(0.2, 3) // 0.6
let result4 = mather.div(0.6, 3) // 0.2

```

### API

#### add
* 加法
```javascript
let result1 = mather.add(2, 1.23) // 3.23
let result2 = mather.add(2, '1.23') // 3.23
let result3 = mather.add('2', '1.23') // 3.23

```

#### sub
* 减法
```javascript
let result1 = mather.sub(2, 2.5) // -0.5
let result2 = mather.add(2, '2.5') // -0.5
let result3 = mather.add('2', '2.5') // -0.5

```

#### mul
* 乘法
```javascript
let result1 = mather.mul(2, 0.3) // 0.6
let result2 = mather.mul('-0.2', 3) // -0.6
let result3 = mather.mul('-0.2', '3') // -0.6
let result4 = mather.mul('-0.2', '-0.3') // 0.06

```


#### div
* 除法
```javascript

let result1 = mather.div(0.6, 0.2) // 6
let result2 = mather.mul('-0.6', '0.3') // -2

```

#### red
* 约分
```javascript

let result1 = mather.red(2, 4) // {num1: 1, num2: 2}
let result2 = mather.red('-2', '6') // {num1: -2, num2: 3}
let result3 = mather.red('-4', '-6') // {num1: 2, num2: 3}

```

#### moveDecimalPoint --- 小数点移位
* 可对数字（含string型数字）进行移位
```javascript
let newNumber1 = mather.moveDecimalPoint(1.2, 3 , 'left') // 0.0012
let newNumber2 = mather.moveDecimalPoint(1.23456, 3 , 'right') // 1234.56

```

#### 版本更新
##### 0.1.0
* 优化了引用方式。
##### 0.1.1
* 优化了乘法计算问题
  
##### 0.1.2
* 优化了约分函数在严格模式下的问题


