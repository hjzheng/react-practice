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
			DidMount: false
		};
		console.log('getInitialState', this.state);
	}

	componentWillMount() {
		this.setState({willMount: true});
		console.log('componentWillMount', this.state);
	}

	componentDidMount() {
		this.state.DidMount = true;
		console.log('componentDidMount', this.state);
	}

	render() {
		console.log('render', this.state);
		return <div>Life Cycle</div>;
	}
}

LifeCycle.propTypes = propTypes;

export default LifeCycle;
