import React, { Component } from 'react';
import axios from 'axios';
class Signup extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: '',
			age: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	async handleSubmit(e) {
		e.preventDefault();

		try {
			const data = {
				email: this.state.email,
				password: this.state.password
			};
			const res = await axios.post('api/user/login', data);
			if (!res.data.result) throw new Error('Error');

			localStorage.setItem('jwt-token', res.data.msg);
			this.props.setAuth({ email: data.email, JWT: res.data.msg });

			//assert.ok(res.data.token, 'No token returned');

			//const JWT = res.data.token;

			//const res = await axios.post('api/user/create');
			///console.log(res.data);
		} catch (e) {
			console.log(e.response.data);
		}

		this.setState({
			email: '',
			password: '',
			name: '',
			age: ''
		});
	}

	render() {
		return (
			<div className="login-signup-form">
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="email"
						type="text"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<input
						placeholder="name"
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<input
						placeholder="age"
						type="text"
						name="age"
						value={this.state.age}
						onChange={this.handleChange}
					/>

					<input type="submit" value="Get started" />
				</form>
				<br />
				<p className="login-signup-form-prompt">
					Have an account?{' '}
					<a onClick={this.props.handleToggle} href="#">
						Log in
					</a>
				</p>
			</div>
		);
	}
}

export default Signup;
