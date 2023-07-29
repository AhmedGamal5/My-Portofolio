import React from 'react'
import Resume from '../../components/resume.pdf'
import "./Cv.css"

const Cv = () => {
  return (
    <div className='cv'>
        <a href={Resume} dawnload className='btn'>Dawnload CV</a>
        <a href="#contact"className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cv