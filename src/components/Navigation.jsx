import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage } from '../actions/page';
import { setAuth } from '../actions/auth';

class Navigation extends Component {
	constructor() {
		super();

		this.state = {
			active: 'login'
		};
		this.handleClick = this.handleClick.bind(this);
		//this.handleLogin = this.handleLogin.bind(this);
	}

	handleClick(e) {
		this.props.setPage(e.target.name);

		//this.props.history.push(e.target.name)
		// console.log(e.target.name);
	}

	render() {
		console.log('PAGE IS:');
		const page = this.props.page.page;
		console.log(page);

		if (this.props.auth.JWT != null) {
			return (
				<div className="navigation">
					<ul className="navigation-list">
						<li onClick={this.handleClick} className={page == 'discover' ? 'active' : ''}>
							<a name="discover" href="/">
								Discover
							</a>
						</li>
						<li onClick={this.handleClick} className={page == 'messages' ? 'active' : ''}>
							<a name="messages" href="messages">
								Messages
							</a>
						</li>

						<li
							onClick={this.handleClick}
							className={page == 'login' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="login" href="login">
								Logout
							</a>
						</li>

						<li
							onClick={this.handleClick}
							className={page == 'about' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="about" href="about">
								About
							</a>
						</li>
						<li
							onClick={this.handleClick}
							className={page == 'contact' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="contact" href="contact">
								Contact us
							</a>
						</li>
						<li
							onClick={this.handleClick}
							className={page == 'settings' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="settings" href="settings">
								Settings
							</a>
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div className="navigation">
					<ul className="navigation-list">
						<li
							onClick={this.handleClick}
							className={page == 'login' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="login" href="login">
								Login
							</a>
						</li>
						<li
							onClick={this.handleClick}
							className={page == 'about' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="about" href="about">
								About
							</a>
						</li>
						<li
							onClick={this.handleClick}
							className={page == 'contact' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="contact" href="contact">
								Contact us
							</a>
						</li>
						<li
							onClick={this.handleClick}
							className={page == 'settings' ? 'active' : ''}
							style={{ float: 'right' }}
						>
							<a name="settings" href="settings">
								Settings
							</a>
						</li>
					</ul>
				</div>
			);
		}
	}
}
const mapStateToProps = (state) => ({
	alerts: state.alerts,
	auth: state.auth,
	page: state.page
});

export default connect(mapStateToProps, { setPage, setAuth })(Navigation);
