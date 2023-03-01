import React, { useEffect, useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgMail } from "react-icons/cg"
import profile from "./Assets/pic.webp"
import axios from 'axios'
import "./Topbar.css"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { AiFillSetting } from "react-icons/ai"
import { MdPrivacyTip } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { RiInboxArchiveFill } from "react-icons/ri"
import { MdDarkMode } from "react-icons/md"



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
                    <div>
                        <marquee direction="down" height="60vh" style={{color:"navyblue"}}>A r i v a n i   T e c h n o l o g i e s  </marquee>
                    </div>

                    <div className='icons'>
                        <p><IoMdNotificationsOutline /></p>
                        <p><CgMail /></p>

                        <div className="btn-group">
                            <img className="btn dropdown-toggle" data-bs-toggle="dropdown" src={profile} />
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"><RiInboxArchiveFill />&nbsp;&nbsp;Inbox</a></li>
                                <li><a className="dropdown-item" href="http://localhost:3000/Profile"><CgProfile />&nbsp;&nbsp;Profile</a></li>
                                <li><a className="dropdown-item" href="#"><MdPrivacyTip />&nbsp;&nbsp;Privacy</a></li>
                                <li><a className="dropdown-item" href="#"><MdDarkMode />&nbsp;&nbsp;Theme</a></li>
                                <li><a className="dropdown-item" href="#"><AiFillSetting />&nbsp;&nbsp;Setting</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="http://localhost:3000"><RiLogoutBoxRLine />&nbsp;&nbsp;Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Topbar







