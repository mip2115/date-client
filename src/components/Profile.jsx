import React, { Component } from 'react';
import image1 from '../resources/testing/image1.jpg';
import image2 from '../resources/testing/image2.jpg';
import image3 from '../resources/testing/image3.jpg';
import image4 from '../resources/testing/image4.jpeg';
import image5 from '../resources/testing/image5.jpg';

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="discover-button discover-button-like">&#10003;</div>

				<div className="discover-button discover-button-pass">&#10005;</div>

				<h2 className="profile-header">Daniel</h2>
				<h2 className="profile-header">New York, NY</h2>
				<img className="profile-img" src={image5} />
				<img className="profile-img" src={image2} />

				<h2 className="profile-header">29</h2>
				<h2 className="profile-header">Actor</h2>
				<h2 className="profile-header">Acting University</h2>

				<img className="profile-img" src={image3} />
				<img className="profile-img" src={image4} />

				<img className="profile-img" src={image1} />
			</div>
		);
	}
}

export default Profile;
