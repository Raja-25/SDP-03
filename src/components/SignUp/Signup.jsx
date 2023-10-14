import React, { useState } from 'react';
import UrlHelper from "../../UrlHelper"
import axios from 'axios';
const SignUpForm = () => {
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
            .post('/reg', formData,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((response) => {
                console.log('Sign up successful!', response.data);
                // You can perform any additional actions here
            })
            .catch((error) => {
                console.error('Error signing up:', error);
                // Handle the error appropriately
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;