const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://kubevx:letmein123@cluster0.zvkmoiz.mongodb.net/?retryWrites=true&w=majority';

  mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connect to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
