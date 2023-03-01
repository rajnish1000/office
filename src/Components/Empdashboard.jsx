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
import { useNavigate, useParams } from 'react-router-dom';



const Empdashboard = () => {
  const [formvalue, setValue] = useState()
  const navegate = useNavigate()
  const params = useParams();

  const [userList, setUserList] = useState()
  const [data, setData] = useState();


  const getList = async () => {
    fetch("http://localhost:5000/signup")
      .then((response) => response.json())
      .then((data) => setUserList(data));

  }

  useEffect(() => {
    axios.get('http://localhost:5000/signup')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  const deleteData = async (id) => {
    await fetch("http://localhost:5000/signup", {
      method: "delete",
      body: JSON.stringify({ 'id': id }),
      headers: { "Content-Type": "Application/JSON" }
    }).then(setData())


  }

  useEffect(() => {
    getList();

  }, [])

  const handleUpdate = async () => {
    alert("Do you really want to update ?")
    navegate("/editdata");

  }



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
            <form className='containerr p-5  '>
              <table className='table'>
                <thead>
                  <tr className="col-sm-12" style={{ background: "black", color: "white" }}>
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
                    data?.map((data, index) => (
                      <tr key={index}>
                        <td><b>{data.id}</b></td>
                        <td> <Link to={"/Profile"}><Button tittle="View Profile" /></Link></td>
                        <td>{data.status}</td>
                        <td><b>{data.first_name}&nbsp;{data.last_name}</b></td>
                        <td><b>{data.email}</b></td>
                        <td><b>{data.mobile}</b></td>
                        <td><b>{data.user_type}</b></td>
                        <td>
                          <Link to={"/editdata/" + data.id}><button style={{ background: "green" }} onClick={handleUpdate}><FiEdit /></button></Link>&nbsp;&nbsp;
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

export default Empdashboard;



































































































