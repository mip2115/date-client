import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { setAuth } from '../actions/auth';
import { setPage } from '../actions/page';
import Profile from '../components/Profile';
import Info from '../components/Info';

class Discover extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="discover">
				<Profile />
			</div>
		);
	}
}

export default connect(null, { setPage })(Discover);
