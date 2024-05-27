const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Add a new property
router.post('/add', async (req, res) => {
  const { title, description, address, price, owner } = req.body;
  try {
    const newProperty = new Property({ title, description, address, price, owner });
    await newProperty.save();
    res.json(newProperty);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
