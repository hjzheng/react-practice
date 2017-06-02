import './index.scss';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {

	static propTypes = {
		defaultValue: PropTypes.string,
		options: PropTypes.array,
		children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.element
		]),
		onChange: PropTypes.func,
		value: PropTypes.string
	}

	static defaultProps = {
		defaultValue: '',
		options: [],
		onChange: () => {}
	}

	constructor(props) {
		super(props);

		let value = this.props.defaultValue;

		if (this.props.value !== undefined) {
			value = this.props.value;
		}

		this.state = {
			value,
			label: this.findLabelByValue(value),
			showMenu: false
		};


		this.bindDocClick = this.handleDocumentClick.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== undefined) {
			this.setState({
				value: nextProps.value,
				label: this.findLabelByValue(nextProps.value)
			});
		}
	}

	handleDocumentClick(event) {
		if (!ReactDOM.findDOMNode(this).contains(event.target)) {
			this.setState({ showMenu: false });
		}
		document.removeEventListener('click', this.bindDocClick, false);
	}

	findLabelByValue(value) {
		if (this.props.options.length === 0) {
			if (this.props.children.filter(opt => opt.props.value === value).length === 0) {
				return '';
			}
			return this.props.children.filter(opt => opt.props.value === value)[0].props.children;
		} else {
			if (this.props.options.filter(opt => opt.value === value).length === 0) {
				return '';
			}
			return this.props.options.filter(opt => opt.value === value)[0].label;
		}
	}

	clickHandler(option) {
		if (this.props.value === undefined) {
			this.setState({
				value: option.value,
				label: option.label
			});
		}
		this.setState({
			showMenu: false
		});
		this.props.onChange(option.value, option);
	}

	toggleMenu() {
		if (!this.state.showMenu) {
			document.addEventListener('click', this.bindDocClick, false);
		}
		this.setState({
			showMenu: !this.state.showMenu
		});
	}

	_renderMenu() {
		if (this.props.options.length === 0) {
			return (
				<ul className="dropdown-menu" style={{ 'display': this.state.showMenu ? 'block' : 'none' }}>
					{this.props.children.map(ele => <li key={ele.props.value} className={ele.props.value === this.state.value ? 'active' : ''} onClick={() => this.clickHandler({ label: ele.props.children, value: ele.props.value })}><a href="javascript:void(0)">{ele.props.children}</a></li>)}
				</ul>
			);
		} else {

			return (
				<ul className="dropdown-menu" style={{ 'display': this.state.showMenu ? 'block' : 'none' }}>
					{this.props.options.map(option => <li key={option.value} className={option.value === this.state.value ? 'active' : ''} onClick={() => this.clickHandler(option)}><a href="javascript:void(0)">{option.label}</a></li>)}
				</ul>
			);
		}
	}

	_renderSelectBox() {
		return (
			<a className="dropdown-toggle" href="javascript:void(0)" onClick={() => this.toggleMenu()}>
				<span style={{ display: 'inline-block' }}>{this.state.label} </span><i className="fa fa-angle-down" style={{ float: 'right', lineHeight: 1.5 }} aria-hidden="true" />
			</a>
		);
	}

	render() {
		return (
			<div className="dropdown dropdown-select">
				{this._renderSelectBox()}
				{this._renderMenu()}
			</div>
		);
	}
}

class Option extends Component {
	static propTypes = {
		children: PropTypes.any,
		value: PropTypes.any.isRequired
	}

	render() {
		<li key={this.props.value}>
			<a href="javascript:void(0)">{this.props.children}</a>
		</li>;
	}
}

Dropdown.Option = Option;

export default Dropdown;
