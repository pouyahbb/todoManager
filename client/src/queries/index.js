import { gql } from 'apollo-boost'

export const ADD_TASK = gql`
	mutation($title: String!, $day: Int!) {
		addTask(title: $title, day: $day) {
			title
			day
		}
	}
`

export const GET_ALL_TASKS = gql`
	query {
		getAllTask {
			title
			day
		}
	}
`
