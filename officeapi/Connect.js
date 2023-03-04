const mysql = require('mysql');


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    database: 'management',
    port: 3306,
    user: 'root',
    password: ''
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log("something error");
    }
    else {
        console.log("Connect Successfully");
    }
});

module.exports = mysqlConnection;