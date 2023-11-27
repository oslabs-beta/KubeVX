const { User } = require('../models/userModel'); // Adjust path as needed
const bcrypt = require('bcrypt');

const authController = {};

authController.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            // Handle successful login
            res.status(200).json({ message: 'Login successful' });
        } else {
            // Handle login failure
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = authController;
