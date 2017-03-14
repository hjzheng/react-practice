import React, { Component, PropTypes } from 'react';

class ProductCategoryRow extends Component {

	static propTypes = {
		category: PropTypes.string
	};

	render() {
		return (<tr><th colSpan="2">{this.props.category}</th></tr>);
	}
}

export default ProductCategoryRow;
