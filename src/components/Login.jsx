import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuth } from '../actions/auth';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
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

		if (this.props.auth.JWT != null) {
			this.props.setAuth(null);
		} else if (this.props.auth.JWT == null) {
			this.props.setAuth('XXX', 'email.com');
			//window.location.href = '/discover';
		}

		/*
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
        */

		this.setState({
			email: '',
			password: ''
		});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
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

					<input type="submit" value="Login" />
				</form>
				<br />
				<p className="login-signup-form-prompt">
					Need an account?{' '}
					<a onClick={this.props.handleToggle} href="#">
						Signup
					</a>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	alerts: state.alerts,
	auth: state.auth
});

export default connect(mapStateToProps, { setAuth })(Login);
