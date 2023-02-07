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
        navegate("/sidebar")
    }

    return (
        <>
            <div className='main'>
                <div className='container'>

                    <div className='login'>
                        <h1>ARIVANI ADMIN PANEL</h1>
                        <input type="text" name="email" placeholder='enter your name' onChange={handleInput} /> <br />
                        <input type="password" name="password" placeholder='enter your password' onChange={handleInput} /> <br />
                      
                        <Link to={"/sidebar"}><button onClick={handleSubmit}>Log in</button></Link> <br />
                        <hr />
                        <div className='logfb'>
                            <button onClick={handleSubmit}><Link to={"/sidebar"}>Log in with Google</Link></button> <br />
                            <button onClick={handleSubmit}><Link to={"/sidebar"}>Log in with Facebook</Link></button>
                        </div>

                    </div>
                </div>
                </div>
            </>
            )
}

            export default Login;











