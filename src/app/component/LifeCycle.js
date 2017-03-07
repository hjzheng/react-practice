import React, { Component, PropTypes } from 'react';

const propTypes = {
	test: PropTypes.string.isRequired
};

class LifeCycle extends Component {
	constructor(props) {
		super(props);
		console.log('getDefaultProps', props);
		this.state = {
			willMount: false,
			DidMount: false,
			num: 0
		};
		console.log('getInitialState', this.state);
		this.clickCallback = this.click.bind(this);
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

	click() {
		let num = this.state.num;
		this.setState({num: ++num});
	}

	render() {
		console.log('render', this.state);
		return <div onClick={this.clickCallback}>Life Cycle</div>;
	}
}

LifeCycle.propTypes = propTypes;

export default LifeCycle;
