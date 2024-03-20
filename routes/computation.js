var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    let x = Math.floor(Math.random()*5);

   
    if (req.query.x) {
        x = parseFloat(req.query.x);
    }
  
    const y = Math.sqrt(x);
    res.send(`Math.sqrt applied to ${x} is ${y}`);
});

module.exports = router;
