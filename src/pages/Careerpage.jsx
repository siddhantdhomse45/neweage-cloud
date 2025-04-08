import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Careerone from '../component/career/careerone/Careerone'
import Careerhero from '../component/career/careerhero/Careerhero'

const Careerpage = () => {
  return (
    <div>
      <Navbar/>
      <Careerhero/>
      <Careerone/>
      <Footer/>
    </div>
  )
}

export default Careerpage
