var express = require('express');
var router = express.Router();

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  let x;

  // Check if the request has a query argument for x
  if (req.query.x) {
    // Use the provided value for x
    x = parseFloat(req.query.x);
  } else {
    // Generate a random value for x
    x = getRandomNumber(1, 100);
  }

  // Apply Math.sqrt function
  const y = Math.sqrt(x);

  // Construct the response string
  const response = `Math.sqrt applied to ${x} is ${y}`;

  // Send the response
  res.send(response);
});

module.exports = router;
