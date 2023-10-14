import React from 'react'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UrlHelper from "../../UrlHelper"
import './adopt.css'
export default function Adopt() {

    const nav = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = {
            petname: data.get("petname"),
            category: data.get("category"),
            breed: data.get("breed"),
            age: data.get("age"),
            imageUrl: data.get("imageUrl"),
            description: data.get("description"),
        };
        UrlHelper.post('/addpet', formData, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 204) {
                    console.log("not working");
                    toast.error("pet adding failed ");
                } else {
                    console.log('login up successful!', response.data);
                    toast.success("pet added successfully");
                    nav("/");
                }
            })
            .catch((error) => {
                console.error('Error signing up:', error);
                // Handle the error appropriately
            });
    };
    return (
        <div className='bodymain'>
            <div className="main">

                <div className="container">

                    <h1><i className="fa-solid fa-paw"></i>&nbsp;Donate a Pet&nbsp;<i className="fa-solid fa-paw"></i></h1>

                </div>
                <form onSubmit={handlesubmit}>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="petname" placeholder="Name" />
                    <br />
                    <label for="card">Type of Animal</label>
                    <input type="text" name='category' placeholder='ex:dog,cat,bird' />
                    <br />
                    <div className="exp-cvc">
                        <div className="expiration">
                            <label for="expiry">Breed</label>
                            <input className="inputCard" name="breed" id="expiry" type="text" required placeholder="00/00" />
                            <br />
                        </div>
                        <div className="security">
                            <label for="cvc">Age</label>
                            <input type="number" id="cvc" name="age" />
                            <br />
                        </div>
                    </div>
                    <label for="card">ImageUrl</label>
                    <input type="text" name='imageUrl' placeholder='ex:dog,cat,bird' />
                    <br />
                    <label for="card">Description</label>
                    <input type="text" name='description' placeholder='ex:dog,cat,bird' />
                    <br />
                    <div className="btn">
                        <span id="submit"><button type='submit'>Submit</button></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
