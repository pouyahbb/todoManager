import React, { Component } from 'react'
import { Table, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { CALENDAR } from './../../data/calendar'
import { TASKS } from './../../data/task'
import './Calendar.style.scss'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

class Calendar extends Component {
	render() {
		return (
			<div className='calendar'>
				<Table bordered variant='light'>
					<thead>
						<tr>
							{DAYS.map((day) => {
								return <th> {day} </th>
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							{CALENDAR.map((cal) => {
								return (
									<td className='calendar__days'>
										{cal.days.map((day) => {
											let tasks = TASKS.filter((task) => {
												return task.day === day
											}).map((task) => {
												return (
													<OverlayTrigger
														placement='right'
														delay={{ show: 250, hide: 400 }}
														overlay={
															<Tooltip id='button-tooltip'>
                                {task.title}
															</Tooltip>
														}
													>
														<Button size="sm" variant='primary'></Button>
													</OverlayTrigger>
												)
											})
											return (
												<tr>
													{day}
													{tasks.length > 0 && [tasks]}
												</tr>
											)
										})}
									</td>
								)
							})}
						</tr>
					</tbody>
				</Table>
			</div>
		)
	}
}

export default Calendar
