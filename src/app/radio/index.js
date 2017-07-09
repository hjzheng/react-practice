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
		this.state.checked = true;
		this.props.onChange(this.state.checked, this.props.label || this.props.children);
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

	// TODO: children 和 checkList 只是展现形式, value 和 defaultValue 来区别受控和非受控, 目前只支持受控
	static propTypes = {
		value: PropTypes.any,
		checkList: PropTypes.array,
		selected: PropTypes.any,
		children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.element
		]),
		onChange: PropTypes.func
	}

	static defaultProps = {
		onChange: () => {}
	}

	constructor(props) {
		super(props);
		let checkList = typeof this.props.checkList === 'undefined' ? this.props.children.map(ele => ({label: ele.props.label || ele.props.children})) : this.props.checkList;

		this.state = {
			checkList,
			value: typeof this.props.value === 'undefined' ? checkList[0].label : this.props.value
		};
	}

	// // 获取第一个 checked = true 的 label 值
	// getValueFromChildren() {
	// 	for (let i = 0; i < this.props.children.length; i++) {
	// 		if (this.props.children[i].props.checked) {
	// 			return this.props.children[i].props.label || this.props.children[i].props.children;
	// 		}
	// 	}
	// }

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== undefined) {
			this.setState({
				value: nextProps.value
			});
		}
	}

	click(checked, label) {
		this.props.onChange(label);

		// if (typeof this.props.value === 'undefined') {
		// 	this.setState({
		// 		value: label
		// 	});
		// }
	}

	_renderRadioItem() {
		return this.state.checkList.map(item => <Radio key={item.label} disabled={item.disabled} label={item.label} checked={item.label === this.state.value} onChange={::this.click} />);
	}

	render() {
		return (<div className="RadioGroup">
			{this._renderRadioItem()}
		</div>);
	}
}

Radio.Group = RadioGroup;


export default Radio;


// Group
