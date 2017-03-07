import React, { Component, PropTypes } from 'react';

const propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	skills: PropTypes.array,
	child: PropTypes.element
};

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: 0,
			skills: props.skills
		};
		this.click = this.clickLiked.bind(this);
		this.add = this.addSkill.bind(this);
	}

	clickLiked() {
		let num = this.state.liked;
		this.setState({liked: ++num});
	}

	addSkill() {
		let skills = this.state.skills;
		if (skills) {
			skills.push(this.refs.skill.value);
			this.setState({skills});
		}
	}

	render() {
		return (
			<div className="profile">
				<h3>Fucking Cool Name: {this.props.name} </h3>
				<h3>Fucking Cool Age: {this.props.age} </h3>
				<h3>Fucking Cool Skills: {this.state.skills ? this.state.skills.join(',') : 'No Skills'} </h3>
				<div> {this.props.child} </div>
				<div onClick={this.click}>liked: {this.state.liked} </div>
				<input type="text" ref="skill" />
				<button onClick={this.add}>add skill</button>
			</div>
		);
	}
}

Profile.propTypes = propTypes;

export default Profile;
