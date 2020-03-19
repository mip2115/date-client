import React, { Component } from 'react';
import Contact from '../components/Contact';
import MiniProfile from '../components/MiniProfile';
import Chat from '../components/Chat';

class Messages extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		console.log('MESSAGES');
		return (
			<div className="messages">
				<div className="messages-contacts">
					<form className="messages-contacts-search">
						<input placeholder="Search matches..." />
					</form>

					<div className="messages-contacts-list">
						<Contact name="Sarah C" time="9:08PM" />
						<Contact name="Samantha P" time="8:38PM" />
						<Contact read={true} name="Donna M" time="1:45PM" />
						<Contact read={true} name="Noa K" time="12:30PM" />
						<Contact read={true} name="Emily L" time="11:20AM" />
						<Contact read={true} name="Dora K" time="7:01AM" />
					</div>
				</div>

				<div className="messages-display">
					<Chat />
				</div>
				<div className="messages-miniprofile">
					<MiniProfile />
				</div>
			</div>
		);
	}
}

export default Messages;
