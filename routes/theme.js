var express = require('express');
var router = express.Router();

/* Get POST results from add page */
router.post('/', function(req, res, next) {
  var theme = req.body.theme
  console.log(theme)
  console.log(req.body.path)
  res.cookie('theme', theme).send()
})

module.exports = router;