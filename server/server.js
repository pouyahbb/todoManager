const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')
const Task = require('./model/taskModel')

const connectDB = require('./db/connect')

connectDB()

const server = new ApolloServer({
	typeDefs,
  resolvers,
  context : { Task }
})

const PORT = 5000

server.listen(PORT, () => {
	console.log(`Server runnin on port ${PORT}`)
})
