import React, { Component, PropTypes } from 'react';

const propTypes = {
	stateText: PropTypes.string
};

class State extends Component {
	constructor() {
		super();
	}

	render() {
		return <div className="state">{this.props.stateText || 'on line'}</div>;
	}
}

State.propTypes = propTypes;

export default State;
