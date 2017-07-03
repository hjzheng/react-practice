// 要么如下 import 要么像 Test.js 中的做法一样
import React, { Component } from 'react';

class List extends Component {

	constructor() {
		super();
		// state must be set to an object or null
		this.state = {
			list: ['AngularJS', 'Webpack', 'React']
		};
	}

	render() {
		return (
			<ul>
				{
					(this.state.list.map(item => <li key={item}> {item} </li>))
				}
			</ul>
		);
	}
}

export default List;
