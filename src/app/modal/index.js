import './index.scss';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		visible: PropTypes.bool,
		onOK: PropTypes.func,
		onClose: PropTypes.func,
		onCancel: PropTypes.func,
		footer: PropTypes.element
	}

	static defaultProps = {
		visible: undefined,
		onOK: () => {},
		onClose: () => {},
		onCancel: () => {}
	}

	constructor(props) {
		super(props);
		this.state = {
			visible: this.props.visible === undefined ? true : this.props.visible
		};
	}

	componentDidMount() {
		const domNode = ReactDOM.findDOMNode(this);
		const eleRect = domNode.getBoundingClientRect();
		const top = document.documentElement.clientHeight / 2 - eleRect.height / 2;
		// 修正对话框位置
		domNode.style.top = `${top}px`;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.visible !== undefined) {
			this.setState({
				visible: nextProps.visible
			});
		}
	}

	test() {
		console.log('----------------', 'test', '----------------');
	}

	handleOK() {
		this.props.onOK();
		if (this.props.visible === undefined) {
			this.setState({
				visible: false
			});
		}
	}

	handleCancel() {
		this.props.onCancel();
		if (this.props.visible === undefined) {
			this.setState({
				visible: false
			});
		}
	}

	handleClose() {
		this.props.onClose();
		if (this.props.visible === undefined) {
			this.setState({
				visible: false
			});
		}
	}

	_renderHeader() {
		return (
			<div className="modal-header">
				<button type="button" className="close" onClick={::this.handleClose}>×</button>
				<h4 className="modal-title">{this.props.title}</h4>
			</div>
		);
	}

	_renderBody() {
		return (
			<div className="modal-body">
				{this.props.children}
			</div>
		);
	}

	_renderFooter() {
		return (
			<div className="modal-footer">
				{
					this.props.footer ? this.props.footer : (<div><button type="button" onClick={::this.handleOK}>确定</button> <button type="button" onClick={::this.handleCancel}>取消</button></div>)
				}
			</div>
		);
	}

	render() {
		return (
			<div className="modal" style={{ visibility: this.state.visible ? 'visible' : 'hidden' }}>
				<div className="modal-dialog">
					<div className="modal-content">
						{this._renderHeader()}
						{this._renderBody()}
						{this._renderFooter()}
					</div>
				</div>
			</div>
		);
	}
}

Modal.confirm = function(options) {

	let div = document.createElement('div');
	document.body.appendChild(div);

	const defaultOptions = {
		message: 'confirm message',
		title: 'confirm dialog',
		onOK: () => {},
		onClose: () => {},
		onCancel: () => {},
		container: div // 此参数不建议使用
	};

	const props = Object.assign(defaultOptions, options);

	function destroy() {
		const unmountResult = ReactDOM.unmountComponentAtNode(props.container);
		if (unmountResult && props.container.parentNode) {
			props.container.parentNode.removeChild(props.container);
		}
	}

	ReactDOM.render(
		<Modal title={props.title} onOK={() => { props.onOK(); destroy(); }} onCancel={() => { props.onCancel(); destroy(); }} onClose={() => { props.onClose(); destroy(); }}>
			<i className="fa fa-code" aria-hidden="true" style={{ color: 'red', fontSize: 24 }}>&nbsp;</i>
			{props.message}
		</Modal>
		, props.container);

	return {
		destroy
	};
};

export default Modal;
