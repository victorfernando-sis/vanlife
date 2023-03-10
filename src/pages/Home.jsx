import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='home-content'>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="/vans" className='btn btn_primary'>Find your van</Link>
        </div>
      </div>
    </>
  )
}

export default Home