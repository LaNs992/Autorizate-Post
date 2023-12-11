const mongoose = require('mongoose');

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      'mongodb+srv://mesterlog:mesterlog123@cluster0.urdogsy.mongodb.net/?retryWrites=true&w=majority',
      connectionParams
    );
    console.log('Connected to database successfully');
  } catch (error) {
    console.log(error);
    console.log('Could not connect database!');
  }
};
