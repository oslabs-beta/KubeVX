const bcrypt = require('bcrypt');
const User = require('../models/userModel'); 

const authController = {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(404).json({ message: 'User not found. Please register.' });
      }

      const isMatch = await bcrypt.compare(password, user.passwordHash);

      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password.' });
      }

      req.session.userId = user._id;
      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred during login', error: error.message });
    }
  },

  async register(req, res) {
    try {
      const { username, password } = req.body;
      let user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      user = new User({ username, passwordHash });
      await user.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering new user', error: error.message });
    }
  },

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send('Error logging out');
      } else {
        res.send('Logout successful');
      }
    });
  }

};

module.exports = authController;
