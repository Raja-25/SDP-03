import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
export default function Navbar() {
  return (

    <>
    <div className='navbarmain'>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-10 px-3 px-lg-0">
        <NavLink to="/" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="fa-solid fa-paw"></i>&nbsp;Pet Nirvana
          </h1>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink to="/" className="nav-item nav-NavLink active fs-5 text-dark">Home</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/pets" className="nav-item nav-NavLink fs-5 text-dark">Pets</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/adopt" className="nav-item nav-NavLink fs-5 text-dark">Donate a Pet</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/blog" className="nav-item nav-NavLink fs-5 text-dark" >Blog</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/about" className="nav-item nav-NavLink fs-5 text-dark">About</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <div className="nav-item dropdown">
              <NavLink to="/" className="nav-NavLink dropdown-toggle fs-5 text-dark" data-bs-toggle="dropdown">Account</NavLink>
              <div className="dropdown-menu m-0">
                <NavLink to="/login" className="dropdown-item">Sign in</NavLink>
                <NavLink to="/signup" className="dropdown-item">Sign up</NavLink>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <NavLink to="/contact" className="nav-item nav-NavLink nav-contact bg-success text-white px-5 ms-lg-5">Contact <i className="bi bi-arrow-right"></i></NavLink>
          </div>
        </div>
      </nav>
      </div>
</>
  )
}
