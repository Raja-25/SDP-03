import React, { useState } from 'react';
import './shop.css';
import carList from './ProductsData';

import { toast } from 'react-toastify';
import { useAuth } from '../../AuthContext';
import { Link } from 'react-router-dom';
import UrlHelper from '../../UrlHelper';

export default function Shop() {
  const auth = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const handleCart = (data, e) => {
    e.preventDefault();

    if (auth.user) {
      const formdata = {
        img: data.img,
        title: data.title,
        price: data.price,
        username: auth.user.username,
      };
      UrlHelper.post('/cartpost', formdata, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);

          console.log('login up successful!', response.data);
          toast.success('added to cart successfully');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Server error');
        });
    } else {
      toast.error('Please Login', {
        position: 'bottom-right',
        theme: 'light',
      });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = carList.filter((car) => {
    return car.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="Autobot-catalog">
      <div className="ProductsPage">
      
          <div class="input-container">
  <input type="text" name="text" class="input" placeholder="search..."  value={searchTerm}
            onChange={handleSearch}/>
  



        </div>
        <div className="product-container">
          {filteredCars.map((item) => (
            <div className="product-card tooltip-btn-hover color-7" key={item.id}>
              <div className="product-imgBx">
                <img alt="" src={item.img}></img>
              </div>
              <div className="product-contentBx">
                <h2>{item.title}</h2>
                <div className="product-size">
                  <h3>Price :</h3>
                  <span>{item.price}</span>
                  <span>Lakhs</span>
                  <span></span>
                  <span></span>
                </div>
                <div className="product-color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Link onClick={(e) => handleCart(item, e)}>Add to cart</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
