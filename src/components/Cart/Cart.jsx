import React, { useState } from 'react'
import './Styles/Cart.css'
import { useAuth } from "../../AuthContext";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';


import UrlHelper from "../../UrlHelper"
export default function Cart(props) {
  const auth = useAuth();
  const cartList = props.cartList;
  function deleteProduct(id) {
    if (id) {
      UrlHelper.delete(`/cartdelete/${id}`, {
        params: {}
      })
        .then((response) => {
          toast.info("Removed successfully", {
            position: "top-left",
            theme: "dark",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("Invalid ID received");
    }
  }


  return (
    <div className='Cart'>
      <div className="modal fade modal-lg" id="cartModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              {
                auth.user &&
                <h4 className="modal-title fs-5" id="exampleModalLabel">{auth.user.username}'s Cart</h4>
              }
              {
                !auth.user &&
                <h4 className="modal-title fs-5" id="exampleModalLabel">Cart</h4>
              }
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              {
                !auth.user &&
                <>
                  <img className='cartPic' src={props.logo} alt='...'></img>
                  <h1>Please Login to check your cart</h1>
                </>
              }
              {
                auth.user && props.item === 0 &&
                <>
                  <img className='cartPic' src={props.logo} alt='...'></img>
                  <h1>Your cart is empty </h1>
                </>
              }
              {
                cartList ? (
                  cartList.map((obj, key) => (
                    <div className="card col-sm-4" key={key}>
                      <img src={obj.img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{obj.name}</h5>
                        <h5 className="card-info">Rs. {obj.price}</h5>
                      </div>

                      <Link className="btn btn-sm btn-outline-danger" onClick={() => deleteProduct(obj.cartid)}>REMOVE</Link>

                    </div>
                  ))
                ) : <h1>Your cart is empty</h1>
              }
            </div>
            <div className="modal-footer">
              <h5 className="card-title">Sub Total: {props.total}&nbsp;</h5>
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>

              {/* <button type="button" className="btn btn-outline-warning" >Checkout</button> */}
              <div id="razorpay-button-container">
          <form>
            <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_MwcH6pSerSt5zs" async></script>
          </form>
        </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
