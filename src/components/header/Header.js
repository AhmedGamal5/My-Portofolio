import React from 'react'
import Cv from '../cv/Cv';
import profile from '../../pic/WhatsApp_Image_2023-07-24_at_01.44.04-removebg-preview.png'
import HeaderSections from '../headersections/HeaderSections';
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Ahmed Gamal</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <Cv/>
        <HeaderSections />

        <div className='me'>
          <img src={profile} alt='me'/>     
        </div>
        
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;