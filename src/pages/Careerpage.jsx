import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Careerone from '../component/career/careerone/Careerone'
import Careerhero from '../component/career/careerhero/Careerhero'
import CareerCard from '../component/career/careerone/careerCard'
import CoreValues from '../component/career/careerone/CoreValues'


const Careerpage = () => {
  return (
    <div>
      <Navbar/>
      <Careerhero/>
      <Careerone/>
     <CareerCard />
     <CoreValues />
      <Footer/>
    </div>
  )
}

export default Careerpage
