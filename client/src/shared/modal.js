import React from 'react'
import { connect } from 'react-redux'
import { openModal } from './../redux/actions/index'

// add graphql
import { Mutation } from 'react-apollo'
import { ADD_TASK } from './../queries/index'

import { Modal, Button, Form, Spinner , Alert } from 'react-bootstrap'

class RenderModal extends React.Component {
	state = {
		title: '',
		day: ''
	}
	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		if(name === 'day'){
			this.setState({ day : parseInt(value) })
		}
	}
	handleClose = () => {
		this.props.openModal(false)
	}


	render() {
		let { title, day } = this.state
		return (
			<React.Fragment>
				<Mutation mutation={ADD_TASK} variables={{ title, day }}>
					{(addTask, { data, loading, error }) => {
						return (
							<Modal
								show={this.props.modalIsOpen}
								onHide={this.handleClose}
								backdrop='static'
								keyboard={false}
							>
								<Modal.Header closeButton>
									<Modal.Title>
										<h3> Add New Task </h3>
									</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form
										onSubmit={async(event) =>{
											try{
												event.preventDefault();
												await addTask();
												// add task to redux
												this.setState({ title: '', day: '' })
												this.props.openModal(false)
											}catch(e){
												console.log(e)
											}
										} }
									>
										{error && (
											<Alert variant='danger'>
												{error.message.split(':')[1]}
											</Alert>
										)}
										<Form.Group controlId='title'>
											<Form.Label>Title</Form.Label>
											<Form.Control
												onChange={this.handleChange}
												type='text'
												placeholder='Title'
												name='title'
												value={this.state.title}
											/>
										</Form.Group>
										<Form.Group controlId='day'>
											<Form.Label>Day</Form.Label>
											<Form.Control
												onChange={this.handleChange}
												type='number'
												placeholder='When you want to do this?'
												name='day'
												value={this.state.day}
											/>
										</Form.Group>
										<Button disabled={this.state.title.length === 0 ? true : false} variant='primary' type='submit'>
											{loading ? <Spinner animation='border' /> : 'Create'}
										</Button>
									</Form>
								</Modal.Body>
							</Modal>
						)
					}}
				</Mutation>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return { modalIsOpen: state.modalOpen.isOpen }
}

export default connect(mapStateToProps, { openModal })(RenderModal)
