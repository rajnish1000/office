import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Topbar from './Topbar'
import "./Signup.css"
import Button from './Button'

const Signup = () => {

  const initial = {

    "first_name": "",
    "last_name": "",
    "email": "",
    "mobile": "",
    "gender": "",
    "date_of_birth": "",
    "user_type": "",
    "address": "",
    "status": "",
    "date": "",
    "password": "",
    "confirm_password": ""

  }

  const navegate = useNavigate()
  const [formvalue, setValue] = useState(initial)
  const [submit, setSubmit] = useState(false)
  const [userList, setUserList] = useState()


  const handleInput = (event) => {

    const name = event.target.name;
    const values = event.target.value;
    setValue(formvalue => ({ ...formvalue, [name]: values }))


  }
  const handleSubmit = async (event) => {
    console.log(formvalue);
    event.preventDefault()


    setSubmit(true);

    let result = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify(formvalue),
      headers: { "Content-Type": "Application/JSON" }
    })
      .then(response => response.json())
      // .then(getList())
      .catch(error => event.preventDefault());

    console.log(result);


    // alert("succsessfully  submit")3210
    navegate("/empdashboard")
  }

  return (
    <>
      <Topbar />
      <div className='signup'>
        <div >
          <Link to={"/empdashboard"}><Button tittle="Back" /></Link>
        </div>

        <div className='container'>

          <form class="row g-3">

            <div class="col-md-6">
              <input type="text" class="form-control" name="first_name" value={formvalue?.first_name} placeholder='First Name' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" name="last_name" value={formvalue?.last_name} placeholder='Last Name' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="email" class="form-control" name="email" value={formvalue?.email} placeholder='Enter your email' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="password" class="form-control" name="password" value={formvalue?.password} placeholder='password' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="password" class="form-control" name="confirm_password" value={formvalue?.confirm_password} placeholder='confirm password' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" name="mobile" value={formvalue?.mobile} placeholder='Mobile' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" name="gender" value={formvalue?.gender} placeholder='Gender' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="date" class="form-control" name="date_of_birth" value={formvalue?.dob} placeholder='Date of birth' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="number" class="form-control" name="user_type" value={formvalue?.user_type} placeholder='User Type' onChange={handleInput} />
            </div>
            <div class="col-12">
              <input type="text" class="form-control" name="address" value={formvalue?.address} placeholder="address" onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="number" class="form-control" name="status" value={formvalue?.status} placeholder='status' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="time" class="form-control" name="date" value={formvalue?.date} placeholder='date' onChange={handleInput} />
            </div>


            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12 text-align-center">
              <button type="submit" class="btn btn-dark" onClick={handleSubmit}>Submit</button>&nbsp;

            </div>
          </form>

        </div>

      </div>
    </>
  )
}

export default Signup

