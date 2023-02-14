const connection = require('./connect');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
var cors = require('cors');
const app = express();

const secretkey = 'secretkey';
app.use(bodyParser.json());
// bodyParser.urlencoded({ extended: true });

app.use(cors({
    origin: ['http://localhost:3000/', 'http://localhost:3000', "*"]
}));

// app.use(express.json());





app.post("/employees", (req, res) => {
    // console.log(req.body);
    var id = req.body.id;
    var user_type = req.body.user_type;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var gender = req.body.gender;
    var password = req.body.password;
    var status = req.body.status;
    var created_at = req.body.created_at;


    var sql = "INSERT INTO `employees`(`id`,`user_type`,`first_name`, `last_name`, `email`, `mobile`, `gender`, `password`, `status`, `created_at`) VALUES ('" + id + "','" + user_type + "' ,'" + first_name + "' , '" + last_name + "' , '" + email + "' ,'" + mobile + "' ,'" + gender + "' , '" + password + "' , '" + status + "' ,'" + created_at + "' )"

    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});


app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    var sql = "INSERT INTO `login`( `email`, `password`) VALUES ( '" + email + "' , '" + password + "'  )"
    // var sql = "SELECT * FROM login WHERE  email ='" + email + "'";
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

    const user = {

        email: "email",
        password: "password"
    }
    const token = jwt.sign({ user }, secretkey, { expiresIn: '1h' })
    res.json({
        token
    });


})

app.get("/login", (req, res) => {
    console.log("req", req.body);
    connection.query(`SELECT * FROM login WHERE id=5`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
// ${req.body.id}

app.post("/signup", (req, res) => {

    var id = req.body.id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var gender = req.body.gender;
    var date_of_birth = req.body.date_of_birth;
    var user_type = req.body.user_type;
    var address = req.body.address
    var status = req.body.status;
    var date = req.body.date;
    var password = req.body.password;
    var confirm_password = req.body.confirm_password;

    if (password !== confirm_password) {
        res.json({ message: 'password not match' });
    } else
        var sql = "INSERT INTO `signup`(`id`,`first_name`, `last_name`, `email`, `mobile`, `gender`, `date_of_birth`, `user_type`, `address`,`status`, `date` , `password`, `confirm_password`) VALUES ('" + id + "','" + first_name + "' , '" + last_name + "' , '" + email + "' ,'" + mobile + "' ,'" + gender + "' , '" + date_of_birth + "' , '" + user_type + "' ,'" + address + "' , '" + status + "', '" + date + "' , '" + password + "' , '" + confirm_password + "' )"

        if (password !== confirm_password) {
            res.json({
                message: "password not match",
            })}else {

                connection.query(sql, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json({ message: 'User registered successfully.' });
                        res.send(result)
                    }
                });

            }

 

  
        // }else{
        //     let user = new user (req.body);
        //     let result = user.save();
        //     res.send(submit);
        // }

    })

app.get("/signup", (req, res) => {
        // console.log("qqq");
        var data = "SELECT * FROM signup"
        connection.query(data, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    });

    app.delete("/signup", (req, res) => {
        console.log("req", req.body);
        connection.query(`DELETE FROM signup WHERE id=${req.body.id}`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    });


app.listen(5000, () => {
    console.log("Running now");
})









