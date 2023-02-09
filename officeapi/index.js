const connection = require('./connect');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
var cors = require('cors');
const app = express();
const secretkey = "secretkey"

app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });


app.use(cors());

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

    var sql = "INSERT INTO `login`( `email`, `password`) VALUES ( '" + email + "' ,'" + password + "'  )"
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

    const user = {

        email: "raj@gmail.com",
        password: "Test123"
    }
    jwt.sign({ user }, secretkey, (err, token) => {
        res.json({
            token
        })// { expiresIn: '300s' },
    })

})


app.post("/signup" , (req, res) =>{
  
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
  }else
    var sql = "INSERT INTO `signup`(`id`,`first_name`, `last_name`, `email`, `mobile`, `gender`, `date_of_birth`, `user_type`, `address`,`status`, `date` , `password`, `confirm_password`) VALUES ('" + id + "','" + first_name + "' , '" + last_name + "' , '" + email + "' ,'" + mobile + "' ,'" + gender + "' , '" + date_of_birth + "' , '" + user_type + "' ,'" + address + "' , '" + status + "', '" + date + "' , '" + password + "' , '" + confirm_password + "' )"

    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ message: 'User registered successfully.' });
            res.send(result)
        }
    });

// if(password !== confirm_password){
//   res.json({
//     message:"password not match",
// })
// }else{
//     let user = new user (req.body);
//     let result = user.save();
//     res.send(submit);
// }
    
})

app.listen(8090, () => {
    console.log("Running now");
})









