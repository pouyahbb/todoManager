const gql = require('graphql-tag')

const typeDefs = gql`
	type Task {
		title: String!
		day: Int!
	}

	type Query {
		getAllTasks: [Task]
	}

  type Mutation {
    createTask(title : String! , day : Int!) : Task
  }
`

module.exports = typeDefs
