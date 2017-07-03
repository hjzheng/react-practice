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
