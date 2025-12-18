const express = require('express');
const router = express.Router();

// Simple login route (for testing – no JWT yet)
router.post('/login', (req, res) => {
  const { email, password } = req?.body;

  // Hardcoded credentials (same as frontend)
  if (email === 'admin@gmail.com' && password === '786') {
    res.json({
      token: 'dummy-token-for-testing', // Replace with real JWT later
      message: 'Login successful'
    });
  } else {
    res.status(401).json({ message: 'Invalid Email or Password' });
  }
});

module.exports = router;