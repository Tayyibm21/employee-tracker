const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password123!!',
  database: 'employee_db'
});


module.exports = connection;