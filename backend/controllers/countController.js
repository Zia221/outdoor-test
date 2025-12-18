const Count = require('../models/Count.js');

// Get current counts
const getCounts = async (req, res) => {
  try {
    let counts = await Count?.findOne();
    if (!counts) {
      counts = await Count?.create({ red: 0, blue: 0 });
    }
    res.json(counts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Increment count (POST request)
const incrementCount = async (req, res) => {
  const { color } = req.body; // Expect { "color": "red" } or { "color": "blue" }

  if (!color || (color !== 'red' && color !== 'blue')) {
    return res.status(400).json({ message: 'Invalid color. Use "red" or "blue"' });
  }

  try {
    let counts = await Count?.findOne();
    if (!counts) {
      counts = await Count?.create({ red: 0, blue: 0 });
    }

    if (color === 'red') {
      counts.red += 1;
    } else if (color === 'blue') {
      counts.blue += 1;
    }

    await counts?.save();
    res.json(counts); // Return updated counts
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCounts, incrementCount };