import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openModal } from './../../redux/actions/index'
import { Button } from 'react-bootstrap'
import {v4} from 'uuid'
import CompleteTask from './CompleteTask/CompleteTask'
import { TASKS } from './../../data/task'
import './AddTask.style.scss'



class AddTask extends Component {
	state = {
		currentDate: new Date().getDate(),
	}

	handleClick = (e) => {
		e.preventDefault();
		this.props.openModal(true)
	}
	render() {
		return (
			<div className='task'>
				<div className='task__addTask'>
					<Button type="submit" variant='primary' onClick={this.handleClick}>
						+ Add Task
					</Button>
					{TASKS.map((task) => {
						return (
							<ul key={v4()} className='task__addTask--lists'>
								<li className='task__addTask--list'> &#9873; {task.title} </li>
								{this.state.currentDate === task.day ? (
									<span className='task__addTask--text'> Today </span>
								) : this.state.currentDate > task.day ? (
									<span className='task__addTask--text'>
										{this.state.currentDate - task.day} Days ago
									</span>
								) : this.state.currentDate < task.day ? (
									<span className='task__addTask--text'>
										After {task.day - this.state.currentDate} Days
									</span>
								) : (
									''
								)}
							</ul>
						)
					})}
				</div>
				<div className='task__complete'>
					<CompleteTask />
				</div>
			</div>
		)
	}
}

export default connect(null , { openModal })(AddTask)
