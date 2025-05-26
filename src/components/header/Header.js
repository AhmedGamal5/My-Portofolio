import React from 'react'
import Cv from '../cv/Cv';
import profile from '../../pic/last-prof.jpg'
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