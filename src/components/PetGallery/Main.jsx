import React, { useEffect,useState } from 'react'
import './main.css'
import { HiOutlineClipboard } from 'react-icons/hi'
import {MdOutlinePets} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
import UrlHelper from "../../UrlHelper"
const Main = () => {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 })
    fetchPetDetails();
  }, [])

  const fetchPetDetails = async () => {
    try {
        const response = await UrlHelper.get('/allpets');
        setPetData(response.data);
    } catch (error) {
        console.error('Error fetching pet details: ', error);
    }
};
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Pets Waiting For Adoption
        </h3>
      </div>

      <div className="secContent grid">

        {
          petData.map(({ id, petname, category, age, breed, imageUrl, description }) => {
            return (
              <div key={id}
                data-aos="fade-up"
                className="singleDestination">
                <div className="imageDiv">
                  <img src={imageUrl}  />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {petname}
                  </h4>
                  <span className="continent flex">
                    <MdOutlinePets className='icon' />
                    <span className="name">
                      {category}
                    </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {age}
                        <small>
                          Years
                        </small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>Breed:{breed}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    {description}
                  </div>

                  <button className='btn flex'>
                    Details <HiOutlineClipboard className="icon" />
                  </button>

                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Main