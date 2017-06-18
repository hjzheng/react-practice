import React, { Component, PropTypes } from 'react';

const LoadingHoC = WrappedComponent => {
	return class Loading extends Component {

		static propTypes = {
			isLoading: PropTypes.bool
		}

		static defaultProps = {
			isLoading: false
		}

		constructor(props) {
			super(props);
		}

		render() {
			return (
				this.props.isLoading ? <div>loading...</div> : <WrappedComponent {...this.props} />
			);
		}
	};
};

export default LoadingHoC;
