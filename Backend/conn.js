const mysql2 = require('mysql2')

connection = mysql2.createConnection({
    host: "localhost",
    port: "8889",
    user: "todoExercise",
    password: "todoexercise",
    database: "todoExercise"
})

module.exports = connection;