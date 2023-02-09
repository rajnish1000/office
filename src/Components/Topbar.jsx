import React from 'react'
import {IoMdNotificationsOutline} from "react-icons/io"
import {CgMail} from "react-icons/cg"
import profile from "./Assets/pic.webp"




const Topbar = () => {
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
                        <p><b>rajnish@gmail.com</b></p>
                        <img src={profile} />
                    </div>
                </div>
                {/* <div className='card'>
                    <Card h3="Dashboard" />
                    <Card h3="DASHBOARD" />
                    <Card h3="DASHBOARD" />
                </div>
                <div className='head'>  <marquee direction="down">
                    <h1>WELCOME TO ARIVANI MANAGEMENT SYSTEM</h1>
                </marquee>

                </div> */}
            </div>
        

        </>
    )
}

export default Topbar
