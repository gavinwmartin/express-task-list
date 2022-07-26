var express = require('express');
var router = express.Router();
var PouchDB = require('pouchdb');
var cookies = require("cookie-parser");

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = new PouchDB('tasks')
  db.allDocs({
    include_docs: true,
    attachments: true
  }).then(function(docs){
    res.render('index', { 
      title: 'Task List',
      docs: docs.rows,
      theme: req.cookies['theme']
    });
  })
});

module.exports = router;
