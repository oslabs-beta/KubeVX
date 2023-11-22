const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://kubevx:letmein123@cluster0.zvkmoiz.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connect to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const componentSchema = new Schema({
  name: String,
  definition: String
});

const Component = mongoose.model('Component', componentSchema);

module.exports = { Component };
