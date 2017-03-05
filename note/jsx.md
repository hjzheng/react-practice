1. JSX 语法, 通过标签写法的方式创建 ReactElement (虚拟DOM), 比起直接使用 React.createElement 方式更快和方便.

2. HTML标签 与 React 组件

HTML标签第一个字母小写, React 组件标签第一个大写

因为 JSX 本身是 JavaScript 语法, 因此一些 JavaScript 中的保留字要用其他方式书写, 例如 class 改成 className

3. JavaScript 表达式

基本规则是当遇到 {} 时, 里面的代码会当作 JavaScript 代码处理

4. JSX 属性扩散

```jsx
const Profile

let props = {
    name: 'hjzheng',
    age: 30,
    level: 6
}

let component = <Profile {... props}/>

// 相当于 <Profile name={props.name} age={props.age} level={props.level}/>

// 注意属性会覆盖, 后面的属性会覆盖前面的属性

// <Profile name={props.name} age={props.age} level={props.level} name='hurry'/>
```


