import React, { Component } from 'react'
import {Form , FormControl } from 'react-bootstrap'
import './NavBar.style.scss'

class NavBar extends Component {
	render() {
		return (
			<div className='nav'>
				<div className="nav__header">
					<h3> November 2020 </h3>
					<div className='nav__today'>
						<span>Today</span>
						<span>18 Mon</span>
					</div>
					<Form inline>
						<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					</Form>
				</div>
				<div className="nav__body">
					<span> {'<'} </span>
					<p> Day </p>
					<p> Week </p>
					<p className="active"> Month </p>
					<span> {'>'} </span>
				</div> 

			</div>
		)
	}
}

export default NavBar
