import React, { Component } from 'react';

class Contact extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="contact">
				<div className="contact-ctr">
					<div className={this.props.read ? 'contact-read' : 'contact-unread'}>{this.props.name}</div>

					<div className={this.props.read ? 'contact-time-read' : 'contact-time-unread'}>
						{this.props.time}
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
