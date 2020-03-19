import React, { Component } from 'react';
import axios from 'axios';
import { CREATE_USER } from './config/routes';
import Navigation from './components/Navigation';
import Login_Signup from './containers/Login_Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Messages from './containers/Messages';
import Discover from './containers/Discover';
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
				<Router>
					<Switch>
						<Route history={this.props.history} path="/" exact component={Discover} />
						<Route history={this.props.history} path="/messages" exact component={Messages} />

						<Route history={this.props.history} path="/login" exact component={Login_Signup} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
