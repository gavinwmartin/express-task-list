var express = require('express');
var router = express.Router();
var PouchDB = require('pouchdb');
var crypto = require('crypto');

/* GET add page. */
router.get('/', function(req, res, next) {
  res.render('add', { 
    title: 'Task List'
  });
});

/* Get POST results from add page */
router.post('/', function(req, res, next) {
  var token = crypto.randomBytes(3).toString('hex');
  var db = new PouchDB('tasks')
  var doc = {
    "_id": token,
    "title": req.body.title,
    "description": req.body.description,
    "date": req.body.date
  }
  db.put(doc)
  res.redirect('/');
})

module.exports = router;