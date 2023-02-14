import React from 'react'
import Topbar from "./Topbar"
import Button from "./Button"
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className='p-3'>   
            <Link to={"/empdashboard"}><Button tittle="Back" /></Link>
            </div>
        </>
    )
}

export default Profile