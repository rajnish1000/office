import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Button from './Button'
import Topbar from './Topbar'

const initial = {

  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  gender: "",
  date_of_birth: "",
  user_type: "",
  address: "",
  status: "",
  password: "",
  confirm_password: ""

}



const Editdata = () => {



  let { id } = useParams();


  const [state, setState] = useState({
    // first_name: "",
    // last_name: "",
    // email: "",
    // mobile: "",
    // gender: "",
    // date_of_birth: "",
    // user_type: "",
    // address: "",
    // status: "",
    // password: "",
    // confirm_password: ""
  })
  const { first_name, last_name, email, mobile, gender, date_of_birth, user_type, address, status, password, confirm_password } = state;

  const [formvalue, setValue] = useState(initial)
  const [data, setData] = useState();
  const navegate = useNavigate()


  const handleInput = (event) => {
    const name = event.target.name;
    const values = event.target.value;
    setValue(formvalue => ({ ...formvalue, [name]: values }))

  }



  const updateList = async (data) => {
    await axios.get(`http://localhost:5000/signup/${id}`, data)
      .then(response => {
        console.log(response);
        setData(response.data);

      })

      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    updateList()
  }, [])


  const handleSubmit = async (event) => {
    await fetch(`http://localhost:5000/signup/${id}`, {
      method: "put",
      body: JSON.stringify(),
      headers: { "Content-Type": "Application/JSON" }
    })
      .then(response => response.json())
      // .then((response) => updateList(response.data))
    // .catch(error => event.preventDefault());
    // console.log(result);
    navegate('/empdashboard');
  }






  return (

    <>
      <Topbar />
      <div className='signup'>
        <div>
          <Link to={"/empdashboard"}><Button tittle="Back" /></Link>
        </div>

        <div className='container'>
          {data?.map((data, index) => (

            <form className="row g-3" key={index} >

              <div className="col-md-6">
                <input type="text" className="form-control" name="first_name" defaultValue={data.first_name} value={first_name} placeholder='First Name' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="last_name" defaultValue={data.last_name} value={last_name} placeholder='Last Name' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" name="email" defaultValue={data.email} value={email} placeholder='Enter your email' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="password" className="form-control" name="password" defaultValue={data.password} value={password} placeholder='password' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="password" className="form-control" name="confirm_password" defaultValue={data.confirm_password} value={confirm_password} placeholder='confirm password' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="mobile" defaultValue={data.mobile} value={mobile} placeholder='Mobile' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="gender" defaultValue={data.gender} value={gender} placeholder='Gender' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="date" className="form-control" name="date_of_birth" defaultValue={data.date_of_birth} value={date_of_birth} placeholder='Date of birth' onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" name="user_type" defaultValue={data.user_type} value={user_type} placeholder='User Type' onChange={handleInput} />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" name="address" defaultValue={data.address} value={address} placeholder="address" onChange={handleInput} />
              </div>
              <div className="col-md-6">
                <input type="number" className="form-control" name="status" defaultValue={data.status} value={status} placeholder='status' onChange={handleInput} />
              </div>

              <div className="col-12 text-align-center">
                <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Save Update</button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </>
  )
}

export default Editdata;




















// let result = await fetch(`http://localhost:5000/signup/${id}`, {
//   method: "post",
//   body: JSON.stringify({ setData }),
//   headers: { "Content-Type": "Application/JSON" }
// }).then(response =>
//   alert("submit successfully"))
// setData(result);
// navegate("/empdashboard")


