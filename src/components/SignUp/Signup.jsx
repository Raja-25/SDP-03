import React, { useState } from 'react';
import UrlHelper from "../../UrlHelper"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './signup.css';
const SignUpForm = () => {

    const nav = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        contact: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        UrlHelper
            .post('/reg', formData, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => {
                if (response.status === 204) {
                    console.log("not working");
                    toast.error("signup failed ")
                } else {
                    console.log('login up successful!', response.data);
                    toast.success("signup successful");
                    nav("/login");
                }
            })
            .catch((error) => {
                console.error('Error signing up:', error);
            });
    };

    return (
        <div className='signupcon'>
        <div className='container mt-5'>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <h5 class="card-header text-center">Register New Account</h5>
                        <div class="card-body"></div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <label>First Name:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label>Last Name:</label>
                                <input
                                className="form-control"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label>Email:</label>
                                <input
                                className="form-control"
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label>Password:</label>
                                <input
                                className="form-control"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-danger btn-block">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUpForm;