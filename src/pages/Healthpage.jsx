import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Healthone from '../component/health/healthone/Healthone'
import Healthhero from '../component/health/healthhero/Healthhero'
import ServicesSection from '../component/health/healthhero/ServicesSection'
import HealthcareServices from '../component/health/healthhero/HealthcareServices'

const Healthpage = () => {
  return (
    <div>
      <Navbar/>
      <Healthhero/>
      <ServicesSection />
      <HealthcareServices />
      <Healthone/>
      <Footer/>
    </div>
  )
}

export default Healthpage
