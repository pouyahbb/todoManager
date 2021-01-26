import React, { Component } from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import { openModal } from './../../redux/actions/index'

import { Query } from 'react-apollo'
import { GET_ALL_TASKS } from './../../queries/index'

import { Button, Spinner, Alert , Container } from 'react-bootstrap'
import CompleteTask from './CompleteTask/CompleteTask'

import './AddTask.style.scss'

class AddTask extends Component {
	state = {
		currentDate: new Date().getDate(),
	}

	handleClick = () => {
		this.props.openModal(true)
	}
	render() {
		return (
			<div className='task'>
				<div className='task__addTask'>
					<Button variant='primary' onClick={this.handleClick}>
						+ Add Task
					</Button>
					<Query query={GET_ALL_TASKS}>
						{({ data, loading, error }) => {
							if (loading) return <Spinner animation='border' />
							if (error)
								return (
									<Container>
										<Alert variant='danger'> Error {error.message} </Alert>
									</Container>
								) 
							if (data.getAllTask.length === 0) {
								return (
									<Container>
										<Alert variant='warning'> No task added yet. </Alert>
									</Container>
								) 
							} else {
								let renderTasks = data.getAllTask.map((task) => {
									return (
										<ul key={v4()} className='task__addTask--lists'>
											<li className='task__addTask--list'>
												&#9873; {task.title}
											</li>
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
								})

								return [renderTasks]
							}
						}}
					</Query>
				</div>
				<div className='task__complete'>
					<CompleteTask />
				</div>
			</div>
		)
	}
}

export default connect(null, { openModal })(AddTask)
