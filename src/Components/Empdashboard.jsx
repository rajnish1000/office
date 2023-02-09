import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dashboard from './Sidebar';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Button from './Button';
import { Link } from 'react-router-dom';
import "../Components/Empdashboard.css"


const Empdashboard = () => {

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




  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [state, setState] = useState(initial)


  // using Promises
  const getData = () => {
    axios.get("http://localhost:8090/signup" )
      .then((res) => setState(res.data.data))
      .catch((err) => (err))

  }
  useEffect(() => {
    getData();
  })



  return (
    <>


      <Topbar />
      <div className='empdash'>

        <div className='addnewbtn'>
          <div>
            <Link to={"/signup"}><Button tittle="Add New" /></Link>
          </div>
        </div>

      <div>
          {
          state.map((data) => {
           
              return (
               <div className="card">


                 <h2>{data.first_name.toUpperCase()}</h2>
                 <h2>{data.data.last_name.toUpperCase()}</h2>
                 <h2>{data.email.toUpperCase()}</h2>
                 <h2>{data.mobile.toUpperCase()}</h2>
                 <h2>{data.gender.toUpperCase()}</h2>
                 <h2>{data.date_of_birth.toUpperCase()}</h2>
                 <h2>{data.user_type.toUpperCase()}</h2>
                 <h2>{data.address.toUpperCase()}</h2>
                 <h2>{data.status.toUpperCase()}</h2>
                 <h2>{data.date.toUpperCase()}</h2> 

               </div>
           )} )};
           
        </div>




      </div>

    </>


  )
}

export default Empdashboard



































































   {/* <form className='containe p-5 '>
          <table className='table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Action</th>
                <th>Status</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>User type</th>
                <th>Operation</th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><button>view profile</button></td>
                <td>1</td>
                <td>Puneet Singh</td>
                <td>Puneet@gmail.com</td>
                <td>9854785965</td>
                <td>1</td>
                <td><button>Edit</button> <span><button>Update</button></span></td>
              </tr>
              <tr>
                <td>1</td>
                <td><button>view profile</button></td>
                <td>0</td>
                <td>Rajat Sharma</td>
                <td>rajat@gmail.com</td>
                <td>9854785965</td>
                <td>1</td>
                <td><button>Edit</button> <span><button>Update</button></span></td>
              </tr>
            </tbody>
          </table>
        </form> */}
