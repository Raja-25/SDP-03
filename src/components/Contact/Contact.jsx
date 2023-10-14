import React, { useState } from 'react'
import "./Contact.css"
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        let recipient = "rajarajendrafake@gmail.com";
        let subject = `Regarding: ${number}`;
        let body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        let mailtoString = `mailto:${recipient}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.assign(mailtoString);
    };
    return (
        <div className='conmain'> <div class="container-fluid pt-5">
            <div class="container">
                <div class="border-start border-5 border-primary ps-5 mb-5 boder" >
                    <h6 class="text-primary text-uppercase">Contact Us</h6>
                    <h1 class="display-5 text-uppercase mb-0">Please Feel Free To Contact Us</h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-7">
                        <form onSubmit={handleFormSubmit}>
                            <div class="row g-3">
                                <div class="col-12">
                                    <input type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} class="form-control bg-light border-0 px-4" placeholder="Your Name" />
                                </div>
                                <div class="col-12">
                                    <input type="email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} class="form-control bg-light border-0 px-4" placeholder="Your Email" />
                                </div>
                                <div class="col-12">
                                    <input type="text" value={number}
                                        onChange={(e) => setNumber(e.target.value)} class="form-control bg-light border-0 px-4" placeholder="Subject" />
                                </div>
                                <div class="col-12">
                                    <textarea value={message}
                                        onChange={(e) => setMessage(e.target.value)} class="form-control bg-light border-0 px-4 py-3" rows="8" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-5">
                        <div class="bg-light mb-5 p-5">
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                                <div class="text-start">
                                    <h6 class="text-uppercase mb-1">Our Office</h6>
                                    <span>KLU, Gunutur, India</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                                <div class="text-start">
                                    <h6 class="text-uppercase mb-1">Email Us</h6>
                                    <span>info@petnirvana.com</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <i class="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                                <div class="text-start">
                                    <h6 class="text-uppercase mb-1">Call Us</h6>
                                    <span>+91 7995398225</span>
                                </div>
                            </div>
                            <div>
                                <iframe class="position-relative w-100 map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6644981422405!2d80.6203580246914!3d16.441857079355568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a073957d%3A0xe79d66babc83e470!2sK%20L%20UNIVERSITY%2C%20Vaddeswaram%2C%20Andhra%20Pradesh%20522303!5e0!3m2!1sen!2sin!4v1693824289055!5m2!1sen!2sin"
                                    frameborder="0" allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
