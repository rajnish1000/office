import React from 'react'
import axios from 'axios';
import Dashboard from './Sidebar';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Button from './Button';
import { Link } from 'react-router-dom';
import "../Components/Empdashboard.css"


const Empdashboard = () => {






    return (
        <>


            <Topbar />
            <div className='addnewbtn'>
                <div>
                    <Link to={"/signup"}><Button tittle="Add New" /></Link>
                </div>           
             </div>
          {/* <div className="demo">
          <div className="grid-container">
                <div>1</div>
                <div><button>view profile</button></div>
                <div>Rajnish Sharma</div>
                <div>raj@gmail.com</div>
                <div>Active</div>
                <div >Employee</div>
           
           

            </div>
          </div> */}



        </>


    )
}

export default Empdashboard







