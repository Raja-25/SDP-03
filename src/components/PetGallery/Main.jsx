import React, { useEffect, useState } from 'react';
import './main.css';
import { HiOutlineClipboard } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import UrlHelper from '../../UrlHelper';

const Main = () => {
  const [petData, setPetData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchPetDetails();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredData(petData);
    } else {
      const filtered = petData.filter(
        (pet) => pet.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredData(filtered);
    }
  }, [selectedCategory, petData]);

  const fetchPetDetails = async () => {
    try {
      const response = await UrlHelper.get('/allpets');
      setPetData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching pet details: ', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = petData.filter((pet) =>
      pet.petname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Pets Waiting For Adoption
        </h3>
      </div>
<div  className='maindiv1'>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by pet name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <span class="input-border"></span>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div >
        <select
         className="form-select" aria-label="Default select example"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {/* Assuming you have an array of all possible categories */}
          {['dog', 'cat', 'bird'].map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="secContent grid">
        {filteredData.map(({ id, petname, category, age, breed, imageUrl, description }) => {
          return (
            <div
              key={id}
              data-aos="fade-up"
              className="singleDestination"
            >
              <div className="imageDiv">
                <img src={imageUrl} alt={petname} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{petname}</h4>
                <span className="continent flex">
                  <i className="fa-solid fa-paw"></i>
                  <span className="name">{category}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {age}
                      <small>Years</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>Breed:{breed}</h5>
                  </div>
                </div>
                <div className="desc">{description}</div>

                <button className="btn flex">
                  Details <HiOutlineClipboard className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
