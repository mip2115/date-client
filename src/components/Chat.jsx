import React, { Component } from 'react';

class Chat extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="chat">
				<div className="chat-display">A</div>
				<form className="chat-input">
					<input placeholder="Type a message..." className="chat-input-text" />
				</form>
			</div>
		);
	}
}

export default Chat;
