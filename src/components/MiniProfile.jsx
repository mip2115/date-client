import React, { Component } from 'react';
import Image7 from '../resources/testing/Image7.jpg';
class MiniProfile extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="miniprofile">
				<div className="miniprofile-img">
					<img src={Image7} />
				</div>
				<div className="miniprofile-info">
					<h2 className="miniprofile-header">Erin Yiran</h2>
					<h2 className="miniprofile-header">22</h2>
					<h2 className="miniprofile-header">Clay Township, Indiana</h2>

					<h2 className="miniprofile-header">Hot Investment Banker</h2>
					<h2 className="miniprofile-header">University of Notre Dame</h2>
				</div>
			</div>
		);
	}
}

export default MiniProfile;
