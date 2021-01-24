const mongoose = require('mongoose')

const connectDB = async () => {
  try{
    await mongoose.connect(
      'mongodb+srv://pouyahobbi:kJOOh1OpK9g0SAxh@cluster0.tqezq.mongodb.net/pouyahobbi?retryWrites=true&w=majority',
      { 
        useUnifiedTopology : true, 
        useNewUrlParser : true ,
        useCreateIndex : true
      }
    )
    console.log('MongoDB connected successfully.')
  }catch(err){
    console.log(`Error : ${err.message}`)
    process.exit(1)
  }
}

module.exports = connectDB