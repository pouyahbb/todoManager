import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import image from './../../assets/instructore.jpg';
import './UserInfo.style.scss'

class UserInfo extends Component {
  render() {
    return (
			<div className='user'>
				<Image src={image} roundedCircle />
        <div className="user__text">
          <span> Good Morning! </span>
          <strong> Nate </strong>
        </div>
			</div>
		)
  }
}


export default UserInfo