import React, { useEffect, useState } from 'react'
import Topbar from "./Topbar"
import Button from "./Button"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './Profile.css'

const Profile = () => {

    let { id } = useParams();
    const [data, setData] = useState();

    const profile = async (data) => {
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
        profile()
    }, [])

    return (
        <>
            <Topbar />
            <div className='p-3'>
               
            </div >
            <div className='text-center'>
                <h1>WELCOME TO MY PROFILE</h1>
            </div>
            <div className='container-pro p-5' >

                {
                    data?.map((data, index) => (
                        <div key={index}>
                            {/* <img src="rsg.jpg" alt='pic'/> */}
                            <p>Employee Id :  <b>{data.id}</b></p>
                            <p>Name : <b>{data.first_name}&nbsp;{data.last_name}</b></p>
                            <p>Email : <b>{data.email}</b></p>
                            <p>Contact No. : <b>{data.mobile}</b></p>
                            <p>Date of Birth : <b>{data.date_of_birth}</b></p>
                            <p>Address : <b>{data.address}</b></p>
                            <p>Status : <b>{data.status}</b></p>
                            <Link to={"/empdashboard"}><Button tittle="Go Back" /></Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Profile