import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { setAuth } from '../actions/auth';
import { setPage } from '../actions/page';

class Home extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		//this.props.setPage('home');
	}

	render() {
		console.log('THIS IS HOME');
		return <div className="home">HomeHomeHomeHomeHome</div>;
	}
}

export default connect(null, { setPage })(Home);
