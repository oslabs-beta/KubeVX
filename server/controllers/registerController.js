const models = require('../models/componentModel');
const registerController = {};

registerController.addComponent = async (req, res) => {
    try {
      const { name, definition } = req.body;
      const newComponent = await models.Component.create({ name, definition });
      res.status(201).json(newComponent);
    } catch (error) {
      console.error('Error adding component:', error);
      res.status(500).send('Internal Server Error');
    }
  };

registerController.getComponent = async (req, res) => {
  const { id } = req.params;
  try {
    const pets = await models.Component.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).send('Error fetching data');
  }
};

module.exports = registerController;
