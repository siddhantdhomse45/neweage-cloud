import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Servicesbackg from '../component/services/serviceshero/Servicebackg'
import Servicesone from '../component/services/servicesone/Servicesone'
import Servicestwo from '../component/services/servicestwo/Servicestwo'


const Servicespage = () => {
  return (
    <div>
      <Navbar/>
      <Servicesbackg/>
      <Servicesone/>
      <Servicestwo/>
      <Footer/>
    </div>
  )
}

export default Servicespage
