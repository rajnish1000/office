import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Button from './Button'
import Topbar from './Topbar'



const Editdata = () => {

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

  let { id } = useParams();

  const [state, setState] = useState(initial)
  const { first_name, last_name, email, mobile, gender, date_of_birth, user_type, address, status, date, password, confirm_password } = state;

  //  const [formvalue, setValue] = useState()
  const [data, setData] = useState();
  const navegate = useNavigate()


  const handleInput = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setState(({ ...state, [name]: value }))
  }


  const updateList = async () => {
    await axios.get(`http://localhost:5000/signup/${id}`)
      .then(response => {
        setData(response.data);
        // console.log(data);
      })
    // console.log(data)
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
  useEffect(() => {
    updateList()
  }, [])

  const handleSubmit = async (event) => {
    // console.log(formvalue);
    event.preventDefault();

    await axios.put(`http://localhost:5000/signup/${id}`, {
      first_name,
      last_name,
      email,
      mobile,
      gender,
      date_of_birth,
      user_type,
      address,
      status,
      date,
      password,
      confirm_password
    })
      .then(() => {
        setState({
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          gender: "",
          date_of_birth: "",
          user_type: "",
          address: "",
          status: "",
          date: "",
          password: "",
          confirm_password: ""
        })
      })
  }

  return (

    <>
      <Topbar />
      <div className='signup'>
        <div>
          <Link to={"/empdashboard"}><Button tittle="Back" /></Link>
        </div>

        <div className='container'>
          {
            data?.map((data) => (

              <form class="row g-3" >


                <div class="col-md-6">
                  <input type="text" class="form-control" name="first_name" value={data.first_name} placeholder='First Name' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" name="last_name" value={data.last_name} placeholder='Last Name' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="email" class="form-control" name="email" value={data.email} placeholder='Enter your email' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="password" class="form-control" name="password" value={data.password} placeholder='password' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="password" class="form-control" name="confirm_password" value={data.confirm_password} placeholder='confirm password' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" name="mobile" value={data.mobile} placeholder='Mobile' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" name="gender" value={data.gender} placeholder='Gender' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="date" class="form-control" name="date_of_birth" value={data.date_of_birth} placeholder='Date of birth' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="number" class="form-control" name="user_type" value={data.user_type} placeholder='User Type' onChange={handleInput} />
                </div>
                <div class="col-12">
                  <input type="text" class="form-control" name="address" value={data.address} placeholder="address" onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="number" class="form-control" name="status" value={data.status} placeholder='status' onChange={handleInput} />
                </div>
                <div class="col-md-6">
                  <input type="time" class="form-control" name="date" value={data.date} placeholder='date' onChange={handleInput} />
                </div>
                <div class="col-12 text-align-center">
                  <button type="submit" class="btn btn-dark" onClick={handleSubmit}>Save Update</button>
                </div>
              </form>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Editdata




















// let result = await fetch(`http://localhost:5000/signup/${id}`, {
//   method: "post",
//   body: JSON.stringify({ setData }),
//   headers: { "Content-Type": "Application/JSON" }
// }).then(response =>
//   alert("submit successfully"))
// setData(result);
// navegate("/empdashboard")