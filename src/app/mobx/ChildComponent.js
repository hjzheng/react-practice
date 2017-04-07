import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';

@observer
class ChildComponent extends Component {

	static propTypes = {
		nestObj: PropTypes.object,
		fn: PropTypes.func
	};

	constructor(props) {
		super(props);
	}

	doSomeAction() {
		this.props.fn();
	}

	render() {
		return (
			<div>
				<div> 嵌套对象测试: {this.props.nestObj.obj.anotherObj.a} </div>
				<button onClick={::this.doSomeAction} >click me</button>
			</div>
		);
	}
}

export default ChildComponent;
