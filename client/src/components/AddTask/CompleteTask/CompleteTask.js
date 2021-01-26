import React, { Component } from 'react'
import { v4 } from 'uuid'
import { Spinner, Alert, Container } from 'react-bootstrap'
import { Query } from 'react-apollo'
import { GET_ALL_TASKS } from './../../../queries/index'
import { TASKS } from '../../../data/task'

import './CompleteTask.style.scss'

class CompleteTask extends Component {
	state = {
		getCurrentDate: new Date().getDate(),
	}
	render() {
		let fetchTasks = TASKS.filter((task) => {
			return task.day <= this.state.getCurrentDate
		})
		return (
			<div className='taskComplete'>
				<h3> Complete </h3>
				{fetchTasks.length === 0 && (
					<p className='taskComplete__emptyMsg'> No task completed yet. </p>
				)}
				<Query query={GET_ALL_TASKS}>
					{({ data, loading, error }) => {
						let allTasks = data.getAllTask.filter((task) => {
							return task.day < this.state.getCurrentDate
						})
						if (loading) return <Spinner animation='border' />
						if (error)
							return (
								<Container>
									<Alert variant='danger'> {error.message} </Alert>
								</Container>
							)
						if (allTasks.length === 0) {
							return (
								<Container>
									<Alert variant='warning'>
										{' '}
										No exist completed task yet.{' '}
									</Alert>
								</Container>
							)
						} else {
							allTasks.map((task) => {
								return (
									<ul key={v4()} className='taskComplete__lists'>
										<li className='taskComplete__list'>&#9873; {task.title}</li>
										{this.state.getCurrentDate === task.day ? (
											<span className='taskComplete__text'> Today </span>
										) : this.state.getCurrentDate > task.day ? (
											<span className='taskComplete__text'>
												{this.state.getCurrentDate - task.day} Days ago
											</span>
										) : (
											''
										)}
									</ul>
								)
							})
							return allTasks
							// return data.getAllTask.map((task) => {

							// })
						}
					}}
				</Query>
				{/* {fetchTasks.map((task) => {
					return (
						// 
					)
				})} */}
			</div>
		)
	}
}

export default CompleteTask
