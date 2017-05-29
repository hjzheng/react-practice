import './index.scss';
import React, { Component, PropTypes } from 'react';

class Tabs extends Component {

	static propTypes = {
		selected: PropTypes.number,
		children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.element
		]).isRequired
	}

	static defaultProps = {
		selected: 0
	}

	constructor(props) {
		super(props);
		this.state = {
			selected: this.props.selected
		};
	}

	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		});
	}

	_renderTitles() {
		function labels(child, index) {
			let activeClass = (this.state.selected === index ? 'active' : '');
			return (
				<li key={index} className={activeClass} onClick={this.handleClick.bind(this, index)}>
					<a href="#">
						{child.props.label}
					</a>
				</li>
			);
		}
		return (
			<ul className="cb-tabs-nav">
				{this.props.children.map(labels.bind(this))}
			</ul>
		);
	}

	_renderContent() {
		return (
			<div className="cb-tab-content">
				{this.props.children[this.state.selected]}
			</div>
		);
	}

	render() {
		return (
			<div className="cb-tabs">
				{this._renderTitles()}
				{this._renderContent()}
			</div>
		);
	}
}

class Pane extends Component {
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		children: PropTypes.oneOfType([
			PropTypes.array,
			PropTypes.string
		]).isRequired
	}

	render() {
		return (
			<div className="tab-pane">
				{this.props.children}
			</div>
		);
	}
}

Tabs.Pane = Pane;

export default Tabs;
