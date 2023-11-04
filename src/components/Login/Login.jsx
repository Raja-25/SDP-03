import React, { useState } from 'react'
import "./Login.css"
import pic from "../../img/login.png"
import { toast } from "react-toastify";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import UrlHelper from "../../UrlHelper"
import _ from 'lodash';
export default function Login() {
    const nav = useNavigate();
    const [passwordType, setPasswordType] = useState('password');
    const [rotateHead, setRotateHead] = useState(0);
    const [hideHands, setHideHands] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [removeBreath, setRemoveBreath] = useState(false);
    const auth = useAuth();
    const handlePasswordFocus = () => {
        if (showPassword) {
            setHideHands(false);
        } else {
            setHideHands(true);
        }
        setRemoveBreath(true);
    };

    const handlePasswordBlur = () => {
        setHideHands(false);
        setRemoveBreath(false);
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const formData = {
            username: data.get("username"),
            password: data.get("password")
        }
        UrlHelper
            .post('/login', formData, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                if (response.status === 204) {
                    console.log("not working");
                    toast.error("login failed ")
                } else {
                    console.log('login up successful!', response.data);
                    toast.success("login successful");

                    auth.login(response.data);
                    nav("/");
                }
            })
            .catch((error) => {
                console.error('Error signing up:', error);
                // Handle the error appropriately
            });

    }
    const handleUsernameFocus = (event) => {
        let length = Math.min(event.target.value.length - 16, 19);
        setRotateHead(-length);
    };

    const handleUsernameBlur = () => {
        setRotateHead(0);
    };

    const handleUsernameInput = _.throttle((event) => {
        let length = Math.min(event.target.value.length - 16, 19);
        setRotateHead(-length);
    }, 100);

    const handleShowPasswordClick = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
        setPasswordType(showPassword ? 'password' : 'text');
        setHideHands(showPassword);
    };

    return (
        <div className='mainlogindiv'>
            <div class="grid">
                <div class="loginimg card1 image">
                    <img src={pic} />

                </div>


                <div class="card2">
                    <div class="center card ">
                        <div class="ear ear--left"></div>
                        <div class="ear ear--right"></div>
                        <div class="face">
                            <div class="eyes">
                                <div class="eye eye--left">
                                    <div class="glow"></div>
                                </div>
                                <div class="eye eye--right">
                                    <div class="glow"></div>
                                </div>
                            </div>
                            <div class="nose">
                                <svg width="38.161" height="22.03">
                                    <path
                                        d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z"
                                        fill="#243946"></path>
                                </svg>
                                <div class="glow"></div>
                            </div>
                            <div class="mouth">
                                <svg class="smile" viewBox="-2 -2 84 23" width="84" height="23">
                                    <path d="M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161"
                                        fill="none" stroke-width="3" stroke-linecap="square" stroke-miterlimit="3"></path>
                                </svg>
                                <div class="mouth-hole"></div>
                                <div class="tongue breath">
                                    <div class="tongue-top"></div>
                                    <div class="line"></div>
                                    <div class="median"></div>
                                </div>
                            </div>
                        </div>
                        <div class="hands">
                            <div className={`hand hand--left ${hideHands ? 'hide' : ''}`}>
                                <div class="finger">
                                    <div class="bone"></div>
                                    <div class="nail"></div>
                                </div>
                                <div class="finger">
                                    <div class="bone"></div>
                                    <div class="nail"></div>
                                </div>
                                <div class="finger">
                                    <div class="bone"></div>
                                    <div class="nail"></div>
                                </div>
                            </div>
                            <div className={`hand hand--right ${hideHands ? 'hide' : ''}`}>
                                <div class="finger">
                                    <div class="bone"></div>
                                    <div class="nail"></div>
                                </div>
                                <div class="finger">
                                    <div class="bone"></div>
                                    <div class="nail"></div>
                                </div>
                                <div class="finger">
                                    <div class="bone"></div>
                                    <div class="nail"></div>
                                </div>
                            </div>
                        </div>
                        <form class="login" onSubmit={handlesubmit}>
                            <label>
                                <div class="fa fa-phone"></div>
                                <input className="username" onFocus={handleUsernameFocus} onBlur={handleUsernameBlur} onInput={handleUsernameInput} placeholder="username" name="username" />
                            </label>
                            <label>
                                <div class="fa fa-commenting"></div>
                                <input className="password" name="password" type={passwordType} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} placeholder="password" />
                                <button className="password-button" onClick={handleShowPasswordClick}><i class='bx bx-show'></i></button>
                            </label>
                            <button class="login-button">Login</button>
                        </form>
                        <div class="social-buttons">
                            <div class="social">
                                <i class='bx bxl-facebook-circle'></i>
                            </div>
                            <div class="social">
                                <i class='bx bxl-twitter'></i>
                            </div>
                            <div class="social">
                                <i class='bx bxl-github'></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
