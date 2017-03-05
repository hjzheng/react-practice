import React, { Component, PropTypes } from 'react';

const propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	skills: PropTypes.array,
	child: PropTypes.element
};

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			liked: 0
		};
		this.click = this.clickLiked.bind(this);
	}

	clickLiked() {
		let num = this.state.liked;
		this.setState({liked: ++num});
	}

	render() {
		return (
			<div className="profile">
				<h3>Fucking Cool Name: {this.props.name} </h3>
				<h3>Fucking Cool Age: {this.props.age} </h3>
				<h3>Fucking Cool Skills: {this.props.skills ? this.props.skills.join(',') : 'No Skills'} </h3>
				<div> {this.props.child} </div>
				<div onClick={this.click}>liked: {this.state.liked} </div>
			</div>
		);
	}
}

Profile.propTypes = propTypes;

export default Profile;
