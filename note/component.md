组件是 React 的基石.

#### ES6 写法
```js
import React, { Component } from 'react';

class List extends Component {

	constructor() {
		super();
		// state 要么是对象, 要么是 null
		this.state = {
			list: ['AngularJS', 'Webpack', 'React']
		};
	}

	render() {
	// li 元素需要添加 key, https://facebook.github.io/react/docs/lists-and-keys.html#keys
		return (
			<ul>
				{
					(this.state.list.map((item, index) => <li key={index}> {item} </li>))
				}
			</ul>
		);
	}
}

export default List;

```

#### props 属性

props 就是传入组件的属性, 可以是任意类型


可以通过 PropTypes 指定传入组件的属性类型

可以通过装饰器进行处理

https://facebook.github.io/react/docs/typechecking-with-proptypes.html

```

```


```js
import React, { Component, PropTypes } from 'react';

const propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	skills: PropTypes.array
};

class Profile extends Component {
	constructor() {
		super();
		this.state = null;
	}

	render() {
		return (
			<div className="profile">
				<h3>Fucking Cool Name: {this.props.name} </h3>
				<h3>Fucking Cool Age: {this.props.age} </h3>
				<h3>Fucking Cool Skills: {this.props.skills ? this.props.skills.join(',') : 'No Skills'} </h3>
			</div>
		);
	}
}

Profile.propTypes = propTypes;

export default Profile;

```

#### state 状态

state 是组件内部状态, 它可以直接在构造函数内部使用 this.state 直接定义, 也可以使用 this.setState 修改(会自动 render)

#### 注册事件

注意 bind, 后期可以自定义 装饰器来处理


#### 组件生命周期

组件初始化 https://facebook.github.io/react/docs/state-and-lifecycle.html

getDefaultProps --> 在 constructor 中处理 constructor(props){super(props)}
getInitialState --> 在 constructor 中处理 this.state
componentWillMount --> 在 render 之前调用 一次
render
componentDidMount --> 在 render 之后调用 一次

组件 props 更新
componentWillReceiveProps(object, nextProps)

shouldComponentUpdate -> 返回 boolean 决定是否 render 组件

componentWillUpdate
render
componentDidUpdate

组件卸载
componentWillUnmount


#### DOM

this.refs.name 获取 DOM 的引用

```
<input type="text" ref="name" />
```
