import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Topbar from './Topbar'
import "./Signup.css"

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
  const [value, setValue] = useState(initial)
  const [submit, setSubmit] = useState(false)

  const handleInput = (event) => {

    const name = event.target.name;
    const values = event.target.value;
    setValue(value => ({ ...value, [name]: values }))


  }


  const handleSubmit = (event) => {
 console.log(value);
    navegate("/empdashboard")
    event.preventDefault();
    alert("succsessfully  submit")
  }

  return (
    <>
      <Topbar />
      <div className='signup'>

        <div className='container'>

          <form class="row g-3">
            <div class="col-md-6">
              <input type="text" class="form-control" id="inputEmail4" name="first_name" placeholder='First Name' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="inputEmail4" name="last_name" placeholder='Last Name' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="email" class="form-control" id="inputEmail4" name="email" placeholder='Enter your email' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="password" class="form-control" id="inputPassword4" name="password" placeholder='Enter your password' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="password" class="form-control" id="inputPassword4" name="confirm_password" placeholder='confirm password' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="inputEmail4" name="mobile" placeholder='Mobile' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="inputEmail4" name="gender" placeholder='Gender' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="date" class="form-control" id="inputEmail4" name="dob" placeholder='Date of birth' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="number" class="form-control" id="inputEmail4" name="user_type" placeholder='User Type' onChange={handleInput} />
            </div>
            <div class="col-12">
              <input type="text" class="form-control" id="inputAddress" name="address" placeholder="address" onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="number" class="form-control" id="inputEmail4" name="status" placeholder='status' onChange={handleInput} />
            </div>
            <div class="col-md-6">
              <input type="time" class="form-control" id="inputEmail4" name="date" placeholder='date' onChange={handleInput} />
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
              <button type="submit" class="btn btn-dark" onClick={handleSubmit}>Submit</button>
            </div>
          </form>

        </div>


      </div>
    </>
  )
}

export default Signup
