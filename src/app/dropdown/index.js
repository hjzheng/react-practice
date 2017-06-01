import './index.scss';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {

	static propTypes = {
		defaultValue: PropTypes.string,
		options: PropTypes.array,
		onChange: PropTypes.func
	}

	static defaultProps = {
		defaultValue: null,
		options: [],
		onChange: () => {}
	}

	constructor(props) {
		super(props);
		this.state = {
			value: this.props.defaultValue,
			label: this.findLabelByValue(this.props.defaultValue),
			showMenu: false
		};
		this.bindDocClick = this.handleDocumentClick.bind(this);
	}

	handleDocumentClick (event) {
		if (!ReactDOM.findDOMNode(this).contains(event.target)) {
			this.setState({ showMenu: false });
		}
		document.removeEventListener('click', this.bindDocClick, false);
	}

	findLabelByValue(value) {
		if (this.props.options.filter(opt => opt.value === value).length === 0) {
			return '';
		}
		return this.props.options.filter(opt => opt.value === value)[0].label;
	}

	clickHandler(option) {
		this.setState({
			value: option.value,
			label: option.label,
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
		return (
			<ul className="dropdown-menu" style={{ 'display': this.state.showMenu ? 'block' : 'none' }}>
				{this.props.options.map(option => <li key={option.value} className={option.value === this.state.value ? 'active' : ''} onClick={() => this.clickHandler(option)}><a href="javascript:void(0)">{option.label}</a></li>)}
			</ul>
		);
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

export default Dropdown;
