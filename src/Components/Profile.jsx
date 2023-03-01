import React, { useEffect, useState } from 'react'
import Topbar from "./Topbar"
import Button from "./Button"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/signupp/:id')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });


    return (
        <>
            <Topbar />
            <div className='p-3'>
                <Link to={"/empdashboard"}><Button tittle="Back" /></Link>
            </div>
            <div>
                <form className='containerr p-5  '>
                    <table className='table'>
                        <thead>
                            <tr className="col-sm-12">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>User Type</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Joining Date</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                data?.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.first_name}&nbsp;{data.last_name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.mobile}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.date_of_birth}</td>
                                        <td>{data.user_type}</td>
                                        <td>{data.address}</td>
                                        <td>{data.status}</td>
                                        <td>{data.date}</td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </form>

            </div>
        </>
    )
}

export default Profile