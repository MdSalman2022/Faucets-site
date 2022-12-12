import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css'

import InputGroup from 'react-bootstrap/InputGroup';




const Login = () => {

    const [password, setPassword] = useState(false);


    const passShow = () => {
        if (password) {
            setPassword(false);
        }
        else {
            setPassword(true);
        }
    }
    return (
        <div className='bg p-5 min-vh-100'>
            <Form className='container box-bg w-25  p-4'>
                <h2 className='text-center'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control type={password ? "password" : "text"} placeholder="Enter your password" />
                    <Button onClick={passShow} className='btn-2'>{password ? <FaEyeSlash /> : <FaEye />}</Button>
                </InputGroup>
                <Button type="submit" className='w-100 btn fw-bold'>
                    Login
                </Button>
                <div className="text-center py-3">
                    <p className='fw-bold'>Don't have an account? <Link to="/signup"><span className='text-color '>Signup</span></Link></p>
                    <p className='fw-bold'>Or</p>
                    <p><FaGoogle /> &nbsp; <FaFacebookF /> &nbsp; <FaInstagram /></p>
                </div >
            </Form>
        </div>
    );
};

export default Login;