const connection = require('./connect');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
var cors = require('cors');
const app = express();
const secretkey = 'secretkey';
app.use(bodyParser.json());



app.use(cors());
app.use(express.json());


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
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

    const user = {

        email: "admin@gmail.com",
        password: "admin12345"
    }


    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ user }, secretkey, { expiresIn: '1h' })
    res.json({ token });


})

app.get("/login", (req, res) => {
    console.log("req", req.body);
    connection.query(`SELECT * FROM signup WHERE email= ${req.body.email} AND password = ${req.body.password}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

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

    var saltRounds = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(password, saltRounds);


    var sql = "INSERT INTO `signup`(`id`,`first_name`, `last_name`, `email`, `mobile`, `gender`, `date_of_birth`, `user_type`, `address`,`status`, `date` , `password`, `confirm_password`) VALUES ('" + id + "','" + first_name + "' , '" + last_name + "' , '" + email + "' ,'" + mobile + "' ,'" + gender + "' , '" + date_of_birth + "' , '" + user_type + "' ,'" + address + "' , '" + status + "', '" + date + "' , '" + password + "' ,  '" + confirm_password + "')"

    // if (password !== confirm_password) {
    //     res.json({
    //         message: "password not match",
    //     })
    // } else {
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ message: 'User registered successfully.' });
            res.send(result)
        }
    });
    console.log(password)
})

app.get("/signup", (req, res) => {
    // console.log("qqq");
    var data = "SELECT * FROM signup  "
    connection.query(data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/signup/:id", (req, res) => {
    console.log("req", req.body);
    const { id } = req.params;
    const { first_name, last_name, email, mobile, gender, date_of_birth, user_type, address, status, date, password, confirm_password } = req.body;


    const sql = "UPDATE signup SET  first_name=?, last_name=?, email=?,mobile=?,gender=?,date_of_birth=?,user_type=?,address=?,status=?,date=?,password=?,confirm_password=? where id=?"

    connection.query(sql, [first_name, last_name, email, mobile, gender, date_of_birth, user_type, address, status, date, password, confirm_password, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get("/signup/:id", (req, res) => {
    const { id } = req.params;

    var data = "SELECT * FROM signup  where id = ? "
    connection.query(data, id, (err, result) => {
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








// origin: ['http://localhost:3000/', 'http://localhost:3000', "*"]
// first_name=?, last_name=?, email=?,mobile=?,gender=?,date_of_birth=?,user_type=?,address=?,status=?,date=?,password=?,confirm_password=? FROM signup?