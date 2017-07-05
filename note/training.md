### 和实习生一起学习官方 Guide
https://facebook.github.io/react/docs/refs-and-the-dom.html

#### Refs and the DOM
不在万不得已的情况下, 千万不要使用 ref

##### 两种方式添加 ref
- 回调函数
```html
<input name="test" ref={ele => this.inputEle = ele} />
<CustomInput ref={ele => this.customInputInstance = ele} />
```
- 字符串(不推荐, 有[性能问题和其它问题](https://github.com/facebook/react/pull/8333#issuecomment-271648615))
    - It requires that React keeps track of currently rendering component (since it can't guess this). This makes React a bit slower.

##### 谁可以被添加 ref

- DOM Element
- Class Component (不包括 function Component)

暴露 ref 给父组件

```jsx
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
```

##### Caveats:

If the ref callback is defined as an inline function,
it will get called twice during updates,
first with null and then again with the DOM element.
This is because a new instance of the function is created with each render,
so React needs to clear the old ref and set up the new one.
You can avoid this by defining the ref callback as a bound method on the class,
but note that it shouldn't matter in most cases.

issue:
https://github.com/facebook/react/issues/8619

代码: 可以进行debug
https://github.com/facebook/react/blob/e43aaab2547870bc80c0b778604c5ee55b1d87f0/src/renderers/shared/stack/reconciler/ReactRef.js#L61

#### Typechecking With PropTypes

React 15.6.1 将 PropTypes 从 React 迁移处来, 单独做一个库 https://www.npmjs.com/package/prop-types

基于性能的原因, PropTypes 校验只在非生产环境工作, 可以参考源码: https://github.com/facebook/prop-types/blob/master/factoryWithTypeCheckers.js

#### Handling Events

注意: SyntheticEvent 实现的原理, 通过事件代理, 利用事件冒泡阶段

React element Events 和 DOM element 上注册事件的区别:
 - camelCase
 - JSX 传递是一个函数 不是 字符串

在 ES6 Class 方式 为了确保 this 指向的正确性

 - 在 constructor 上 bind
 - 箭头函数 (不推荐) 性能问题
 - [property initializer syntax](https://babeljs.io/docs/plugins/transform-class-properties/)

 ```jsx
 class LoggingButton extends React.Component {
   // This syntax ensures `this` is bound within handleClick.
   // Warning: this is *experimental* syntax.
   handleClick = () => {
     console.log('this is:', this);
   }

   render() {
     return (
       <button onClick={this.handleClick}>
         Click me
       </button>
     );
   }
 }
 ```

### SyntheticEvent

事件处理函数, 传递的是一个 SyntheticEvent 的实例, 可以通过该实例访问 nativeEvent
也可以使用 stopPropagation 阻止事件传播, preventDefault 阻止默认事件.

注意 SyntheticEvent 是合成的, 这就意味着 SyntheticEvent 会被重用并且在事件回调函数调用完, 它的属性会被置为 null,
所以请不要用异步的方式访问该 event

当然如果一定要这么干, 请在事件对象上调用 persist() 方法

注意 SyntheticEvent 是在冒泡阶段触发的, 当然你也可以注册一个在捕获阶段触发的事件
例如 onClick 对应的 onClickCapture

### List and Keys

A "key" is a special string attribute you need to include when creating lists of elements

key no need to be global unique. just be unique among siblings

### higher order components

