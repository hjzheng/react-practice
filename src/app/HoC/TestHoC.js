import React, { Component, PropTypes } from 'react';
import LoadingHoC from './loading';

@LoadingHoC
export default class TestHoC extends Component {

	static propTypes = {
		prop1: PropTypes.string,
		prop2: PropTypes.string
	}

	render() {
		return (
			<div>
				Loaded: {this.props.prop1} {this.props.prop2}
			</div>
		);
	}
}
