const mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    database: 'management',
    port: 3306,
    user: 'root',
    password: ''
});

connection.connect(function (err) {
    if (err) {
        console.log("something error");
    }
    else {
        console.log("Connect Successfully");
    }
});

module.exports = connection;