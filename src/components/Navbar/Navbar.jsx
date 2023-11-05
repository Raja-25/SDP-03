import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import Cart from "../Cart/Cart";
import { useAuth } from "../../AuthContext";
import UrlHelper from "../../UrlHelper"
import cartlogo from "./Assets/cart.gif";
import cartforin from "./Assets/cart.png";
export default function Navbar() {
  const auth = useAuth();
  const [price, setPrice] = useState();
  const [cartList, setCartList] = useState([]);
  const [items, setItems] = useState();

  let user = null;

  if (auth.user !== null) {
    user = auth.user;
  }

  useEffect(() => {
    UrlHelper.get('/allcarts', {
    }).then((response) => {
      setCartList(response.data.reverse().filter((obj, key) => obj.username === user.username));
      let size = 0, key;
      for (key in cartList) {
        if (cartList.hasOwnProperty(key)) {
          size++
        };
      };
      setItems(size)
      if (items !== 0) {
        const totalPrice = cartList.reduce((acc, curr) => { //calculate total
          // let cur = curr.price.match(/\d./g).join('') //parse string to integer(cost)
          return acc + (curr.price);
        }, 0)
        setPrice(totalPrice);
      }
    }).catch((error) => {
      console.log(error)
    })
  },
    [cartList, user, items,price]
  );

  const handleLogout = () => {
    if (window.confirm("💜 Are you sure, you want to logout! 😓")) {
      auth.logout();
    }
  };
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
              <NavLink to="/shop" className="nav-item nav-NavLink fs-5 text-dark">Shop</NavLink>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="navcart" >
                <button type="button" className="cartbtn" data-bs-toggle="modal" data-bs-target="#cartModal">
                  <img className="carticon-ani" src={cartlogo} alt="" width={47}></img>
                  <span className="start-100 translate-middle badge rounded-pill">
                    {(items !== 0) ? items : null}
                  </span>
                  <span className="visually-hidden">unread messages</span>
                </button>
                {/*  */}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="nav-item dropdown">
                {auth.user ? (
                  <>
                    <button className="nav-NavLink dropdown-toggle fs-5 text-dark" data-bs-toggle="dropdown">
                      <i className="fa-solid fa-user fa-bounce"></i> {auth.user.username}
                    </button>
                    <div className="dropdown-menu m-0">
                      <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </div>
                  </>
                ) : (
                  <div>
                    <NavLink to="/" className="nav-NavLink dropdown-toggle fs-5 text-dark" data-bs-toggle="dropdown">Account</NavLink>
                    <div className="dropdown-menu m-0">
                      <NavLink to="/login" className="dropdown-item">Sign in</NavLink>
                      <NavLink to="/signup" className="dropdown-item">Sign up</NavLink>
                    </div>
                  </div>
                )}
              </div>
              &nbsp;&nbsp;&nbsp;
              <NavLink to="/contact" className="nav-item nav-NavLink nav-contact bg-success text-white px-5 ms-lg-5">Contact <i className="bi bi-arrow-right"></i></NavLink>
            </div>
          </div>
        </nav>
        <Cart cartList={cartList} item={items} logo={cartforin} total={price} />
      </div>
    </>
  )
}
