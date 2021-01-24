import React from 'react'
import { connect } from 'react-redux'
import RenderModal from './shared/modal'
import NavBar from './components/NavBar/NavBar'
import UserInfo from './components/UserInformation/UserInfo'
import AddTask from './components/AddTask/AddTask'
import Calendar from './components/Calendar/Calendar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.style.scss'

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				{this.props.modalIsOpen ? (
					<RenderModal />
				) : (
					<React.Fragment>
						<div className='App__header'>
							<UserInfo />
							<NavBar />
						</div>
						<div className='App__body'>
							<AddTask />
							<Calendar />
						</div>
					</React.Fragment>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { modalIsOpen: state.modalOpen.isOpen }
}

export default connect(mapStateToProps)(App)
