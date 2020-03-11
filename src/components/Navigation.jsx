import React, { Component } from 'react';

class Navigation extends Component {
	constructor() {
		super();

		this.state = {
			active: 'home'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			active: e.target.name
		});
		// console.log(e.target.name);
	}

	render() {
		return (
			<div className="navigation">
				<ul className="navigation-list">
					<li onClick={this.handleClick} className={this.state.active == 'home' ? 'active' : ''}>
						<a name="home" href="#home">
							Home
						</a>
					</li>
					<li
						onClick={this.handleClick}
						className={this.state.active == 'login' ? 'active' : ''}
						style={{ float: 'right' }}
					>
						<a name="login" href="#login">
							Login
						</a>
					</li>

					<li
						onClick={this.handleClick}
						className={this.state.active == 'about' ? 'active' : ''}
						style={{ float: 'right' }}
					>
						<a name="about" href="#about">
							About
						</a>
					</li>
					<li
						onClick={this.handleClick}
						className={this.state.active == 'contact' ? 'active' : ''}
						style={{ float: 'right' }}
					>
						<a name="contact" href="#contact">
							Contact us
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
