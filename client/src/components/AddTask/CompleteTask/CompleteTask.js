import React, { Component } from 'react'
import { v4 } from 'uuid'
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
				{fetchTasks.map((task) => {
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
				})}
			</div>
		)
	}
}

export default CompleteTask
