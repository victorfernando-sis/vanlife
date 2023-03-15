import React from 'react'
import banner from '../../assets/about_banner.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className='about-container'>
        <img className='about_banner' src={banner} alt={'Van banner'} />
        <div className='about-content'>

          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)<br /><br />
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          <div className='about-cta'>
            <h4>Your destination is waiting.
              Your van is ready.</h4>
            <Link to="/vans" className='btn btn_secondary'>Explore our vans</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About