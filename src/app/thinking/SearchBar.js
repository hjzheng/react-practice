import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {

	static propTypes = {
		onFilterTextInput: PropTypes.func,
		onInStockInput: PropTypes.func,
		inStockOnly: PropTypes.bool,
		filterText: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
		this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
	}

	handleFilterTextInputChange(e) {
		this.props.onFilterTextInput(e.target.value);
	}

	handleInStockInputChange(e) {
		this.props.onInStockInput(e.target.checked);
	}

	render() {
		return (
			<form>
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					onChange={this.handleFilterTextInputChange} />
				<p>
					<input
						type="checkbox"
						checked={this.props.inStockOnly}
						onChange={this.handleInStockInputChange} />
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	}
}

export default SearchBar;
