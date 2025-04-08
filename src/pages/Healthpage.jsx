import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Healthone from '../component/health/healthone/Healthone'
import Healthhero from '../component/health/healthhero/Healthhero'

const Healthpage = () => {
  return (
    <div>
      <Navbar/>
      <Healthhero/>
      <Healthone/>
      <Footer/>
    </div>
  )
}

export default Healthpage
