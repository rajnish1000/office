import React, { useEffect, useState } from 'react'
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const initial = {

        "email": "",
        "password": ""


    }
    const navegate = useNavigate()
    const token = localStorage.getItem("token");
    const [value, setValue] = useState(initial);
    const [user, setUser] = useState()


    const handleInput = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setValue(values => ({ ...values, [name]: value }))

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        axios.post("http://localhost:5000/login", { email: value.email, password: value.password })
            .then(res => {
                localStorage.setItem("token", res.data.accessToken);
                // localStorage.setItem("user", JSON.stringify(res.data.user))
                navegate("/sidebar")
            });
    }


    return (
        <>
            <div className='main'>
                <div className='container tilt-in-top-1'>

                    <div className='login'>
                        <h1>ARIVANI ADMIN PANEL</h1>
                        <input type="text" name="email" placeholder='enter your name' onChange={handleInput} required /> <br />
                        <input type="password" name="password" placeholder='enter your password' onChange={handleInput} required /> <br />

                        <button onClick={handleSubmit}>Log in</button><br />
                        <hr />
                        <div className='logfb'>
                            <button onClick={handleSubmit}>Log in with Google</button> <br />
                            <button onClick={handleSubmit}>Log in with Facebook</button>
                        </div>

                    </div>
                </div>
            </div>
        </>




    )
}

export default Login;












