import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Home.css'

function Home() {
  return (
    <div className='container'>
     <div className="search-div">
      <div className="search-bar">
         <FaPhoneAlt className='phone-icon'/>
    <a href="">086 124 6362</a>
    <IoLogoFacebook />
    <IoLogoTwitter />
    <TfiYoutube />
    <FaInstagram />
    <FaWhatsapp />
      </div>
    
    <div className="search-bar">
      <input type="text" placeholder='Search movie' />
    </div>
     </div>
     <div className="navbar">

     </div>
    </div>
  )
}

export default Home