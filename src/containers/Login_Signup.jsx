import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { setAuth } from '../actions/auth';
import axios from 'axios';

// so just render a different class and fade in
class Login_Signup extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: '',
			age: '',
			render: 'signup',
			number: '',
			login: false
		};

		this.handleToggle = this.handleToggle.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleToggle() {
		this.setState({
			login: !this.state.login
		});
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

			//assert.ok(res.data.token, 'No token returned');

			//const JWT = res.data.token;

			//const res = await axios.post('api/user/create');
			console.log(res.data);
		} catch (e) {
			console.log(e.response.data);
		}

		this.setState({
			email: '',
			password: '',
			name: '',
			age: ''
		});

		//const res = axios.post();
		//this.props.setAuth({this.state.email, this.props})
		//this.props.setAlert('THIS IS AN ALERT');
	}
	render() {
		return (
			<div className="login-signup">
				<div className="login-signup-left">
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
								className={this.state.login ? 'field-no-show' : ''}
								placeholder="name"
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
							<input
								className={this.state.login ? 'field-no-show' : ''}
								placeholder="age"
								type="text"
								name="age"
								value={this.state.age}
								onChange={this.handleChange}
							/>
							<input
								className={this.state.login ? 'field-no-show' : ''}
								placeholder="number 123-456-7890"
								type="text"
								name="number"
								value={this.state.number}
								onChange={this.handleChange}
							/>
							<input type="submit" value="Get started" />
						</form>
						<br />
						{!this.state.login && (
							<p className="login-signup-form-prompt">
								Have an account?{' '}
								<a onClick={this.handleToggle} href="#">
									Log in
								</a>
							</p>
						)}
						{this.state.login && (
							<p className="login-signup-form-prompt">
								Need an account?{' '}
								<a onClick={this.handleToggle} href="#">
									Sign up
								</a>
							</p>
						)}
					</div>
				</div>

				<div className="login-signup-right" />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	alerts: state.alerts,
	auth: state.auth
});
export default connect(mapStateToProps, { setAlert, setAuth })(Login_Signup);

/**
 * <form onSubmit={this.handleSubmit}>
						<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<input type="submit" value="Submit" />
					</form>
 */
