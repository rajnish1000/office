import React, { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const initial = {

        "email": "",
        "password": "",
        "role": ""

    }
    const navegate = useNavigate()
    const [value, setValue] = useState(initial);
    const handleInput = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setValue(values => ({ ...values, [name]: value }))

    }

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(value);
        navegate("/dashboard")
    }
     
    return (
        <>
            <div className='main'>
                <div className='container'>

                    <div className='login'>
                        <h1>ADMIN PANEL</h1>
                        <input type="text" name="email" placeholder='enter your name' onChange={handleInput} /> <br />
                        <input type="password" name="password" placeholder='enter your password' onChange={handleInput} /> <br />
                        {/* <select name="role" onChange={handleInput}> <br />
                            <option>--Select--role--</option>
                            <option>Admin</option>
                            <option>HR</option>
                            <option>Manager</option>
                            <option>Employee</option>
                        </select> <br /> */}
                        <Link to={"/dashboard"}><button onClick={handleSubmit}>Log in</button></Link> <br />
                        <hr />
                        <Link to={"/dashboard"}><button onClick={handleSubmit}>Log in with Google</button></Link> <br />
                        <Link to={"/dashboard"}><button onClick={handleSubmit}>Log in with Facebook</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;











