import React, { Component } from 'react';
import axios from 'axios';
import { CREATE_USER } from './config/routes';
import Navigation from './components/Navigation';
import Login_Signup from './containers/Login_Signup';
import './css/style.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			JWT: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
	}

	async handleSubmitLogin(event) {
		event.preventDefault();
		this.setState({
			email: '',
			password: ''
		});

		try {
			const data = {
				email: 'testUserSeven@example.com',
				password: 'test123'
			};
			//const res = await axios.post('api/user/login', data);
			//localStorage.setItem('jwt-token', res.data.msg);
			console.log('GETTING: ');
			console.log(localStorage.getItem('jwt-token'));

			//assert.ok(res.data.token, 'No token returned');

			//const JWT = res.data.token;

			//const res = await axios.post('api/user/create');
			//console.log(res.data);
		} catch (e) {
			console.log(e.response.data);
		}
	}

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({ [name]: value });
	}

	async handleSubmit(event) {
		event.preventDefault();
		this.setState({
			email: '',
			password: ''
		});

		try {
			const data = {
				email: 'testUserSeven@example.com',
				password: 'test123',
				age: 24,
				name: 'testUserSeven'
			};
			const res = await axios.post('api/user/create', data);
			//assert.ok(res.data.token, 'No token returned');

			//const JWT = res.data.token;

			//const res = await axios.post('api/user/create');
			console.log(res.data);
		} catch (e) {
			console.log(e.response.data);
		}
	}

	render() {
		return (
			<div className="App">
				<Navigation />
				<Login_Signup />
			</div>
		);
	}
}

export default App;
