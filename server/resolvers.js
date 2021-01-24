const resolvers = {
	Query: {
		getAllTasks : async (parent , args , { Task } , info) => {
      try{
        let allTasks = await Task.find();
        return allTasks
      }catch(err){
        throw new Error('Error  : ' + err.message)
      }
    }
	},
	Mutation: {
		createTask: async (parent, { title, day }, { Task }, info) => {
			try {
				let existTask = await Task.findOne({ title })
				if (existTask) {
					throw new Error('Task already exist.')
				}
				let newTask = await new Task({
					title,
					day,
				}).save()
				return newTask
			} catch (err) {
				throw new Error('Error : ' + err.message)
			}
		},
	},
}

module.exports = resolvers