import React, { Component } from 'react'
import { Table, OverlayTrigger, Tooltip, Button , Spinner , Alert } from 'react-bootstrap'
import {v4} from 'uuid'
import { CALENDAR } from './../../data/calendar'
import { Query } from 'react-apollo'
import { GET_ALL_TASKS } from './../../queries/index'
import './Calendar.style.scss'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

class Calendar extends Component {
	state = {
		loading : false
	}
	render() {
		return (
			<div className='calendar'>
				<Table bordered variant='light'>
					<thead>
						<tr>
							{DAYS.map((day) => {
								return <th key={v4()}> {day} </th>
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							{CALENDAR.map((cal) => {
								return (
									<td key={v4()} className='calendar__days'>
										{cal.days.map((day) => {
											return (
												<Query key={v4()} query={GET_ALL_TASKS}>
													{({ data, loading, error }) => {
														if (loading) return <Spinner animation='border' />
														if (error)
															return (
																<Alert variant='danger'>
																	{' '}
																	{error.message}{' '}
																</Alert>
															)

														let renderTask = data.getAllTask
															.filter((task) => {
																return task.day === day
															})
															.map((task) => {
																return (
																	<OverlayTrigger
																		key={v4()}
																		placement='right'
																		delay={{ show: 250, hide: 400 }}
																		overlay={
																			<Tooltip id='button-tooltip'>
																				{task.title}
																			</Tooltip>
																		}
																	>
																		<Button
																			size='sm'
																			variant='primary'
																		></Button>
																	</OverlayTrigger>
																)
															})
														return (
															<tr>
																{day}
																{[renderTask]}
															</tr>
														)
													}}
												</Query>
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
