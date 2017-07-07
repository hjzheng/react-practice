import './index.scss';
import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {

	static propTypes = {
		label: PropTypes.string,
		children: PropTypes.node,
		onChange: PropTypes.func,
		defaultChecked: PropTypes.bool,
		checked: PropTypes.bool
	}

	static defaultProps = {
		onChange: () => {},
		defaultChecked: false
	}

	constructor(props) {
		super(props);
		this.state = {
			checked: typeof this.props.checked === 'undefined' ? this.props.defaultChecked : this.props.checked
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
		this.props.onChange(!this.state.checked, this.props.label || this.props.children);
		if (typeof this.props.checked === 'undefined') {
			this.setState({
				checked: !this.state.checked
			});
		}
	}

	render() {
		return (
			<label className="checkbox" onClick={this.checkHandler}>
				<i className={this.state.checked ? 'fa fa-check-square-o' : 'fa fa-square-o'} aria-hidden="true"></i>
				<span className="checkbox-label">{this.props.label || this.props.children}</span>
			</label>
		);
	}
}

class CheckboxGroup extends Component {
	/*
	* 子 checkbox 必须按受控组件处理
	* */
	static propTypes = {
		checkList: PropTypes.array,
		defaultCheckList: PropTypes.array,
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
		this.state = {
			checkList: typeof this.props.checkList === 'undefined' ? this.props.defaultCheckList || this.props.children.map(ele => ({label: ele.props.label || ele.props.children, checked: ele.props.checked})) : this.props.checkList
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checkList !== undefined) {
			this.setState({
				checkList: nextProps.checkList
			});
		}
	}

	click(checked, label) {
		let checkList = this.state.checkList.slice();
		checkList = checkList.map(c => {
			c.label === label ? c.checked = checked : () => {};
			return c;
		});

		this.props.onChange(checkList);

		if (typeof this.props.checkList === 'undefined') {
			this.setState({
				checkList
			});
		}
	}

	_renderCheckboxItem() {
		if (this.props.children && !this.props.checkList && !this.props.defaultCheckList) {
			// 如果使用 children, 将里面的 checkbox 转换成受控组件
			return this.props.children.map(ele => {
				return <Checkbox key={ele.props.label || ele.props.children} label={ele.props.label} checked={ele.props.checked} onChange={::this.click}>{ele.props.children}</Checkbox>;
			});
		} else {
			return this.state.checkList.map(item => <Checkbox key={item.label} label={item.label} checked={item.checked} onChange={::this.click} />);
		}
	}

	render() {
		return (<div className="checkboxGroup" onClick={::this.click}>
			{this._renderCheckboxItem()}
		</div>);
	}
}

Checkbox.Group = CheckboxGroup;

export default Checkbox;


// Checkbox Group
