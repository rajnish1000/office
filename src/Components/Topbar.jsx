import React, { useEffect, useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgMail } from "react-icons/cg"
import profile from "./Assets/pic.webp"
import axios from 'axios'
import "./Topbar.css"




const Topbar = () => {

    const [email, setEmail] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/login')
            .then(response => {
                setEmail(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);





    return (
        <>

            <div className='right'>
                <div className='sidebar2'>
                    <div className='srch'>
                        <input type="search" placeholder='Search Employee' />
                    </div>

                    <div className='icons'>
                        <p><IoMdNotificationsOutline /></p>
                        <p><CgMail /></p>


                        {
                            email?.map((data) => (
                                <div >
                                    <p>{data.email}</p>
                                </div>
                            ))
                        }


                        <div class="btn-group">

                            <img className="btn dropdown-toggle" data-bs-toggle="dropdown" src={profile} />
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Inbox</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Privacy</a></li>
                                <li><a class="dropdown-item" href="#">Themes</a></li>
                                <li><a class="dropdown-item" href="#">Setting</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Log out</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Topbar
