import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Dashboard from './Sidebar';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Button from './Button';
import { Link } from 'react-router-dom';
import "../Components/Empdashboard.css"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';



const Empdashboard = () => {
  const [formvalue, setValue] = useState()
  const navegate = useNavigate()




  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/signup')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteData = async (id) => {

    await fetch("http://localhost:5000/signup", {
      method: "delete",
      body: JSON.stringify({ 'id': id }),
      headers: { "Content-Type": "Application/JSON" }
    }).then(setData())


  }

  useEffect(() => {
    deleteData();

  })

  // const handleUpdate = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setValue(formvalue => ({ ...formvalue, [name]: value }))
  // }
  // const updateData = async (event) => {
  //   let result = await fetch("http://localhost:5000/signup", {
  //     method: "get",
  //     body: JSON.stringify(),
  //     headers: { "Content-Type": "Application/JSON" }
  //   })
  //     .then(response => response.json())
  //     // .then(getList())

  //     .catch(error => event.preventDefault());
  //   console.log(result);
  // }


  // useEffect(() => {
  //   updateData();
  //   // navegate("/signup")

  // })







  return (
    <>
      <Topbar />
      <div className='emp'>
        <div className='empdash'>

          <div className='addnewbtn'>
            <div >
              <Link to={"/sidebar"}><Button tittle="Back" /></Link>
            </div>
            <div >
              <Link to={"/signup"}><Button tittle="Add New" /></Link>
            </div>
          </div>

          <div>
            <form className='containerr p-5 '>
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
                  {
                    data?.map((data) => (
                      <tr>
                        <td>{data.id}</td>
                        <td> <Link to={"/Profile"}><Button tittle="View Profile" /></Link></td>
                        <td>{data.status}</td>
                        <td>{data.first_name}&nbsp;{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.mobile}</td>
                        <td>{data.user_type}</td>
                        <td><button style={{ background: "green" }}><FiEdit /></button>&nbsp;
                          {/* <button style={{ background: "green" }} onClick={() => updateData(data.id)}>update</button>&nbsp; */}
                          <button style={{ background: "red" }} onClick={() => deleteData(data.id)}><RiDeleteBin6Fill /></button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </form>
          </div>
        </div>

      </div>
    </>


  )
}

export default Empdashboard



































































































{/* {
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
            */}