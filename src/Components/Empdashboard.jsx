import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Empdashboard = () => {


    const [myData, setMyData] = useState([]);



    useEffect(() => {
        axios
            .get("http://localhost:8090/employee")
            .then( )
            .catch( )
    }, []);




    return (
        <>
        

            <div className="grid">
                {myData.map((post) => {
                    const { id, fname, lname , email, role, status } = post;
                    return (
                        <div key={id} className="card">
                            <h2>{id}</h2>
                            <h2>{fname}</h2>
                            <h2>{lname}</h2>
                            <h2>{email}</h2>
                            <h2>{role}</h2>
                            <h2>{status}}</h2>
              
                        </div>
                    );
                })}
            </div>

        </>


    )
}

export default Empdashboard







