# math-er

 
### 数学运算包
  基于系统数学计算对象Math,用于应对Math在部分计算时一些逻辑性问题和部分特殊计算错误，以契合计算器对于计算的要求及对于一些特殊计算的需要。
##### 浮点数运算bug补丁:
  * 系统Math计算对象对于浮点数运算，因为二进制转换所造成错位问题，在浮点数运算时会出现致命计算错误。math重新整理
  * 数学计算中的问题，并对浮点数之间的加减乘除进行整理，解决了Math计算浮点数错误的BUG.
##### 优化部分算法：
  * 优化了部分Math的API，让计算更加简单快捷，并且更加契合程序计算的需求。
##### 增加部分功能：
  * 增加了部分数学功能，以达到程序计算时所需要的计算平台标准。
  * 优化math对象在某些情况下自动转成科学计数法的问题。
##### 内置函数：
  * 俩数大小比对（兼容科学计数法）
  * 数字小数点移位
 

### 用法

```javascript
import mather from 'math-er'
let result1 = mather.add(2,3.6) // 5.6
let result2 = mather.mul(0.2, 3) // 0.6
let result3 = mather.mul(2.1, 3) // 6.3
let result4 = mather.div(0.6, 3) // 0.2
let result5 = mather.red(0.8, 1.2) // -0.4

```

### API

#### add
* 加法

#### red
* 减法

#### mul
* 乘法

#### div
* 除法

#### 

#### moveDecimalPoint --- 小数点移位
* 可对数字（含string型数字）进行移位
```javascript
let newNumber1 = mather.moveDecimalPoint(1.2, 3 , 'left') // 0.0012
let newNumber2 = mather.moveDecimalPoint(1.23456, 3 , 'right') // 1234.56

```
