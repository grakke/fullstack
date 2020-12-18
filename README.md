# Fullstack

## ES6

* 如果一个箭头函数由单个命令组成，那么函数体就不需要用花括号括起来
* Destructuring:从对象和数组中解构出值

## thought

- TDD
- reuse
- serverless
- refactor
- data structure more compound, function more simple

## rule

- compontent
  - name upper
  - 组件的内容(通常)需要包含 一个根元素 or 创建组件数组

## version

- object with function:when function as reference 通过引用调用该方法时， this 的值就变成了所谓的全局对象

```
npm install -g json-server
npx json-server --port 3001 --watch db.json
```
