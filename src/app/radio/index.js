import './index.scss';
import React, { Component, PropTypes } from 'react';

class Radio extends Component {

	static propTypes = {
		label: PropTypes.string,
		children: PropTypes.node,
		onChange: PropTypes.func,
		checked: PropTypes.bool,
		disabled: PropTypes.bool
	}

	static defaultProps = {
		onChange: () => {}
	}

	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked
		};
		this.checkHandler = this.check.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checked !== undefined) {
			this.setState({
				checked: nextProps.checked
			});
		}
	}

	check() {
		if (this.props.disabled) return;
		this.props.onChange(!this.state.checked, this.props.label || this.props.children);
		// this.setState({
		// 	checked: !this.state.checked
		// });
	}

	render() {
		return (
			<label className="radio" onClick={this.checkHandler} disabled={this.props.disabled}>
				<i className={this.state.checked ? 'fa fa-dot-circle-o' : 'fa fa-circle-o'} aria-hidden="true"></i>
				<span className="radio-label">{this.props.label || this.props.children}</span>
			</label>
		);
	}
}

class RadioGroup extends Component {
	render() {
		return null;
	}
}

Radio.Group = RadioGroup;

export default Radio;


// Checkbox Group
