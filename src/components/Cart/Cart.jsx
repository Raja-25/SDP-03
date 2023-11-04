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
    const checkoutHandler = async (amount) => {
     
     /* setLoad(null);
      const { data: { key } } = await axios.get(`${AutobotBackend}/payment/getkey`)
      const { data: { order } } = await axios.post(`${AutobotBackend}/payment/checkout`, {
        amount
      })
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Autobots Pvt Ltd",
        description: "Payment for your parts",
        image: "https://th.bing.com/th/id/OIP.i1ZELPy8F52bVZTE9lJGHgHaHa?pid=ImgDet&rs=1",
        order_id: order.id,
        callback_url: `${AutobotBackend}/payment/paymentverification`,
        prefill: {
          name: auth.user,
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#cf6cc9"
        }
      };
      setLoad(true)
      const razor = new window.Razorpay(options);
      razor.open();
        */
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
             
                <button type="button" className="btn btn-outline-warning" onClick={() => checkoutHandler(props.total)}>Checkout</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
