import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import "./HeaderSections.css"

const HeaderSections = () => {
  return (
    <div className='header_socials'>
       <a href="https://www.linkedin.com/in/ahmedgamall5/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
       <a href="https://github.com/AhmedGamal5" target='_blank' rel="noreferrer"><FaGithub/></a>

    </div>
  )
}

export default HeaderSections