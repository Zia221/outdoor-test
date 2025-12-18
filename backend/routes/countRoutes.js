const express = require('express');
const router = express.Router();
const { getCounts, incrementCount } = require('../controllers/countController.js');
const Count = require('../models/Count.js');

router.get('/', getCounts);           // GET /api/counts
router.post('/increment', incrementCount); // POST /api/counts/increment
router.post('/reset', async (req, res) => {
  try {
    let counts = await Count?.findOne();
    if (!counts) {
      counts = await Count?.create({ red: 0, blue: 0 });
    } else {
      counts.red = 0;
      counts.blue = 0;
      await counts?.save();
    }
    res.json(counts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;