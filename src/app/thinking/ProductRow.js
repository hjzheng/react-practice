import React, { Component, PropTypes } from 'react';

class ProductRow extends Component {

	static propTypes = {
		product: PropTypes.object
	};

	render() {
		let name = this.props.product.stocked
			? this.props.product.name
			: <span style={{color: 'red'}}>{this.props.product.name}</span>;
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
}

export default ProductRow;
