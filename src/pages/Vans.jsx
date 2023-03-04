import React, { useEffect, useState, useCallback } from 'react'
import Navbar from '../components/Navbar'
import VanFilter from '../components/VanFilter'
import VanCard from '../components/VanCard'


function Vans() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vans')
        const data = await response.json()
        setData(data.vans)
      } catch (err) {
        console.log('An error occurred', err)
      }
    }
    fetchData()

  }, [])
  // console.log(data)


  return (
    <>
      <Navbar />
      <div className='van-container'>
        <h2 className='vans-page-title'>Explore our van options</h2>
        <VanFilter />
        <div className='vans-grid'>
          {data.map(van =>
            <VanCard
              key={van.id}
              id={van.id}
              name={van.name}
              price={van.price}
              type={van.type}
              image={van.imageUrl} />
          )}
        </div>
      </div>
    </>
  )
}

export default Vans