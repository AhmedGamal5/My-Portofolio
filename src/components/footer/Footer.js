import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>     
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href='#' className='footer_logo'>Ahmed Gamal</a>

      <ul className='permalink'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#reviews'>Reviews</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://facebook.com' target='_blank' rel="noreferrer"><FaFacebookF/></a>
        <a href='https://instagram.com' target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href='https://twitter.com' target='_blank' rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small> &copy; Ahmed Gamal. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
