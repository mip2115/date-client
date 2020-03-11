import React, { Component } from 'react';

class Signup extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
					<input type="submit" value="Sign up" />
				</form>
			</div>
		);
	}
}

export default Signup;
