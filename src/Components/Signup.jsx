import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from './Topbar'
import "./Signup.css"

const Signup = () => {

  const initial = {

    "fname": "",
    "lname": "",
    "email": "",
    "password": "",
    "mobile": "",
    "gender": "",
    "dob": "",
    "user_type": "",
    "address": ""

  }

  const navegate = useNavigate()
  const [value, setValue] = useState(initial);
  const handleInput = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setValue(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(value);
    alert("succsessfully  submit")
    navegate("/empdashboard")
  }





  return (
    <>
      <Topbar />
     <div className='signup'>

     <div className='container'>

        <form class="row g-3">
          <div class="col-md-6">
            <input type="text" class="form-control" id="inputEmail4" name="fname" placeholder='First Name' onChange={handleInput} />
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" id="inputEmail4" name="lname" placeholder='Last Name' onChange={handleInput} />
          </div>
          <div class="col-md-6">
            <input type="email" class="form-control" id="inputEmail4" name="email" placeholder='Enter your email' onChange={handleInput} />
          </div>
          <div class="col-md-6">
            <input type="password" class="form-control" id="inputPassword4" name="password" placeholder='Enter your password' onChange={handleInput} />
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
