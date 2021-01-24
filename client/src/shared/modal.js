import React from 'react'
import { connect } from 'react-redux'
import { openModal } from './../redux/actions/index'
import { Modal, Button, Form } from 'react-bootstrap'

class RenderModal extends React.Component {
	state = {
		title: '',
		day: '',
	}
	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}
	handleClose = () => {
		this.props.openModal(false)
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.title)
		console.log(this.state.day)

		this.setState({ title : '' , day : '' })
		this.props.openModal(false)
	}

	render() {
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
					<Form onSubmit={this.handleSubmit}>
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
						<Button variant='primary' type='submit'>
							Create
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => {
	return { modalIsOpen: state.modalOpen.isOpen }
}

export default connect(mapStateToProps, { openModal })(RenderModal)
