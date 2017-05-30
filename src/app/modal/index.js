import './index.scss';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		visible: PropTypes.bool,
		onOK: PropTypes.func,
		onClose: PropTypes.func,
		onCancel: PropTypes.func
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

	render() {
		return (
			<div className="modal" style={{ visibility: this.state.visible ? 'visible' : 'hidden' }}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" onClick={::this.handleClose}>×</button>
							<h4 className="modal-title">{this.props.title}</h4>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							<button type="button" onClick={::this.handleOK}>确定</button>
							<button type="button" onClick={::this.handleCancel}>取消</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
