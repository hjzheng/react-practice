import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

	static propTypes = {
		products: PropTypes.array
	};

	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};

		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleInStockInput = this.handleInStockInput.bind(this);
	}

	handleFilterTextInput(filterText) {
		this.setState({
			filterText
		});
	}

	handleInStockInput(inStockOnly) {
		this.setState({
			inStockOnly
		});
	}

	render() {
		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onFilterTextInput={this.handleFilterTextInput}
					onInStockInput={this.handleInStockInput} />
				<ProductTable
					products={this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly} />
			</div>
		);
	}
}

export default FilterableProductTable;


