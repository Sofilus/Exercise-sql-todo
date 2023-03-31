var express = require('express');
var router = express.Router();
var connection = require('../conn')

router.get('/all', function(req, res) {

  connection.connect((err) => {
    if (err) {
      console.log("err", err)
    }

    connection.query("SELECT * FROM todos", (err, data) => {
      if (err) {
        console.log("err", err)
      }
      res.json(data)
    })
  })

});

router.post('/add', function(req,res) {

  let newTodo = req.body

  connection.connect((err) => {
    if (err) {
      console.log("err", err)
    }

    let sql = "INSERT INTO todos (todoName) VALUES ('"+newTodo.todoName+"')"

    connection.query(sql, (err, data) => {
      if (err) {
        console.log("err", err)
      }
      res.json(data)
    })
  })
})

module.exports = router;
