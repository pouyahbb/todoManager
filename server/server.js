const { GraphQLServer } = require('graphql-yoga')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const Task = require('./model/TaskModel')

const connectDB = require('./db/connect')

connectDB()

const PORT = 4000;

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: { Task },
})
server.start(PORT, () =>
	console.log(`Server running on port ${PORT}`)
)
