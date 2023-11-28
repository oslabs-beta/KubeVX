const models = require('../models/componentModel');
const learnK8sController = {};

learnK8sController.addComponent = async (req, res) => {
  try {
    const { name, definition } = req.body;
    const newComponent = await models.Component.create({ name, definition });
    res.status(201).json(newComponent);
  } catch (error) {
    console.error('Error adding component:', error);
    res.status(500).send('Internal Server Error');
  }
};

learnK8sController.getComponent = async (req, res) => {
  const { name } = req.params;
  try {
    console.log('Trying to find component with name:', name);
    const component = await models.Component.findOne({ name: name });
    if (component) {
      console.log('Found component:', component);
      res.status(200).json({ definition: component.definition });
    } else {
      console.log('Component not found');
      res.status(404).send('Component not found');
    }
  } catch (error) {
    console.error('Error fetching component data:', error);
    res.status(500).send('Internal Server Error');
  }
};


module.exports = learnK8sController;
