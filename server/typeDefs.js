const typeDefs = `

  type Task {
    title : String!,
    day : Int!
  }
  type Query {
    getAllTask : [Task]
  }

  type Mutation {
    addTask(title : String! , day : Int!) : Task
  }
`

module.exports = typeDefs
