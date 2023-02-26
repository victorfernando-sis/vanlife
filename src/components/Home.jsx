import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-container'>
        <div className='home-content'>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button className='btn_primary'>Find your van</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home