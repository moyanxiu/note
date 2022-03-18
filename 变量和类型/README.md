# 变量和类型

## 一、JavaScript数据类型

最新的ECMAScript标准定义了8种数据类型，其把这些数据类型又分为两种：原始类型和对象类型。

* ### 原始类型

  除了Object以外的所有类型都是不可变的（值本身无法被改变）

  #### `Null`

  只包含一个值：null

  #### `Undefined`

  一个没有被赋值的变量会有个默认值 `undefined`，只包含一个值：undefined

  #### `Boolean`

  包含两个值：true和false

  ##### `Number`

  根据 ECMAScript 标准，JavaScript 中只有一种数字类型：基于 IEEE 754 标准的双精度 64 位二进制格式的值（-(2^53 -1) 到 2^53 -1）。 它并没有为整数给出一种特定的类型 。除了能够表示浮点数外，还有一些带符号的值：`+Infinity`，`-Infinity` 和 `NaN` (非数值，Not-a-Number)。

  ##### `BigInt`

  JavaScript 中的一个基础的数值类型，可以用任意精度表示整数。它提供了一种方法来表示大于 `2^53 - 1` 的整数。使用 BigInt，您可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。BigInt 是通过在整数末尾附加 `n `或调用构造函数来创建的。由于在 `Number` 与 `BigInt` 之间进行转换会损失精度，因而建议仅在值可能大于2^53 时使用 `BigInt` 类型，并且不在两种类型之间进行相互转换。

  ##### `String`

  一串表示文本值的字符序列

  ##### `Symbol`（符号类型）

  ECMAScript 类型是 ECMAScript 2015 中新添加的特性，在ECMAScript 5中没有对应的类型第6版新定义，符号类型是唯一的并且是不可修改的, 并且也可以用来作为 Object 的 key 的值一种实例是唯一且不可改变的数据类
* #### 对象类型

  在计算机科学中, 对象是指内存中的可以被标识符引用的一块区域。

  ##### `Object`

  自己分一类丝毫不过分，除了常用的Object，Array、Function等都属于特殊的对象

## 参考

* [【JS 进阶】你真的掌握变量和类型了吗](https://juejin.cn/post/6844903854882947080)
* [近 20 人爆肝数周，写给初中级前端的万字高级进阶指南](https://juejin.cn/post/7017645909483716615#heading-11)
* [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
