import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Hero from '../component/home/herosection/Hero'
import Footer from '../component/footer/Footer'
import Contactsection from '../component/home/contactsection/Contactsection'
import Ourfeature from '../component/home/feturesection/Ourfeature'
import Moresec from '../component/home/moresec/Moresec'
import Servicessec from '../component/home/servicessec/Servicessec'
import Experiance from '../component/home/experiancesec/Experiance'
import Company from '../component/home/company/Company'
import Callmail from '../component/home/callmailsec/Callmail'


const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Contactsection/> */}
      <Ourfeature/>
      <Experiance/>
      <Servicessec/>
      <Moresec/>
      <Company/>
      {/* <Callmail/> */}
      <Footer/> 
    </>
  )
}

export default Homepage
