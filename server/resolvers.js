const resolvers = {
  Query : {
    getAllTask : async (parent ,  args, { Task } , info) => { 
      let tasks = await Task.find();
      return tasks;
    }
  },
  Mutation : { 
    addTask  : async (parent , { title , day } , { Task  } , info) => {
      let existTask = await Task.findOne({ title });
      if(existTask) {
        throw new Error('Task already exists.')
      }
      let newTask = await new Task({
        title ,
        day
      }).save();
      return newTask;
    }
  }
}

module.exports = resolvers;