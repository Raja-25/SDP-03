// import logo from './logo.svg';
import React,{useEffect,useState} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes,Route} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import BlogDetails from './components/Blog/BlogDetails';
import Shop from './components/Shop/Shop';
import SignUpForm from './components/SignUp/Signup';
function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownHover, setIsDropdownHover] = useState(false);

  // Sticky Navbar
  useEffect(() => {
      window.onscroll = () => {
          if (window.scrollY > 40) {
              setIsSticky(true);
          } else {
              setIsSticky(false);
          }
      };
  }, []);

  // Dropdown on mouse hover
  useEffect(() => {
      const toggleNavbarMethod = () => {
          if (window.innerWidth > 992) {
              setIsDropdownHover(true);
          } else {
              setIsDropdownHover(false);
          }
      };

      toggleNavbarMethod();
      window.onresize = toggleNavbarMethod;
  }, []);
  return (
    <>
    <Navbar></Navbar>

    <Routes>
      <Route path='/' element={<Home/>} ></Route> 
      <Route path='/about' element={<About/>} ></Route> 
      <Route path='/login' element={<Login/>} ></Route> 
      <Route path='/blog' element={<Blog/>} ></Route> 
      <Route path='/contact' element={<Contact/>} ></Route> 
      <Route path='/blogdetails' element={<BlogDetails/>} ></Route> 
      <Route path='/shop' element={<Shop/>} ></Route> 
      <Route path='/signup' element={<SignUpForm/>} ></Route> 
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
