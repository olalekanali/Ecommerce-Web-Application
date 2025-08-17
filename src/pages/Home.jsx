import React from 'react'
import Hero from '../components/Hero' 
import Popular from '../components/Popular'
import Latest from '../components/Latest'
import Offer from '../components/Offer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <Latest />
      <Newsletter />
    </>
  )
}

export default Home
