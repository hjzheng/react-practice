import React, { Component, PropTypes } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {

	static propTypes = {
		products: PropTypes.array,
		inStockOnly: PropTypes.bool,
		filterText: PropTypes.string
	};

	render() {
		let rows = [];
		let lastCategory = null;

		this.props.products.forEach(product => {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});
		return (
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

export default ProductTable;
