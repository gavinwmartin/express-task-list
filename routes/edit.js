var express = require('express');
var router = express.Router();
var PouchDB = require('pouchdb');

/* Get POST results from add page */
router.post('/', function(req, res, next) {
  var db = new PouchDB('tasks')
  var id = req.body.id
  console.log(req.body)
  db.get(id).then(function(doc) {
    db.put({
      _id: req.body.id,
      _rev: doc._rev,
      title: req.body.title,
      description: req.body.description,
      progress: req.body.progress,
      assigned: req.body.assigned,
      date: req.body.date
    })
  })
  res.redirect('/');
})

module.exports = router;