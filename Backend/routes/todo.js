var express = require('express');
var router = express.Router();
var connection = require('../conn')

router.get('/all', function(req, res, next) {

  connection.connect((err) => {
    if (err) {
      console.log("err", err)
    }

    connection.query("SELECT * FROM todos", (err, data) => {
      if (err) {
        console.log("err", err)
      }
      console.log("data from", data)
      res.json(data)
    })
  })

});

module.exports = router;
