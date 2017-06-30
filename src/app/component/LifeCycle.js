import React, { Component, PropTypes } from 'react';

class LifeCycle extends Component {

	// 代替旧的写法
	static propTypes = {
		test: PropTypes.string.isRequired,
		bool: PropTypes.bool,
		pro: PropTypes.func
	};

	// 默认属性
	static defaultProps = {
		bool: true,
		pro: () => Promise.resolve()
	};

	constructor(props) {
		super(props);
		console.log('getDefaultProps', props);
		this.state = {
			willMount: false,
			DidMount: false,
			num: 0
		};
		console.log('getInitialState', this.state);
		this.refsArr = [];
	}

	// shouldComponentUpdate() {
	// 	console.log('shouldComponentUpdate', this.state);
	// 	return true;
	// }

	componentWillMount() {
		this.setState({willMount: true});
		console.log('componentWillMount', this.state);
	}

	componentDidMount() {
		this.state.DidMount = true;
		console.log('componentDidMount', this.state);
	}

	componentWillReceiveProps(object, nextProps) {
		console.log('componentWillReceviceProps', object, nextProps);
	}

	componentWillUpdate() {
		console.log('componentWillUpdate', this.state);
	}

	componentDidUpdate() {
		console.log('componentDidUpdate', this.state);
	}

	componentWillUnmount() {
		// this.setState({willUnMount: true});
		console.log('componentWillUnMount', this.state);
	}


	clickCallback() {
		let num = this.state.num;
		this.setState({num: ++num});
	}

	render() {
		console.log('render', this.state);
		// :: 可以 bind this
		return <div onClick={::this.clickCallback} ref={ele => { this.refsArr.push(ele); console.log(this.refsArr[0] === this.refsArr[2]); }}>Life Cycle</div>;
	}
}

// LifeCycle.propTypes = propTypes;

export default LifeCycle;
