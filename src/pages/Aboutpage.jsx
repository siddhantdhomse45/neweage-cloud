import React from 'react'
import Navbar from '../component/navbar/Navbar'
import AboutHero from '../component/about/abouthero/Abouthero'
import Aboutservices from '../component/about/aboutservice/Aboutservices'
import Aboutaward from '../component/about/aboutaward/Aboutaward'
import Aboutleader from '../component/about/aboutleader/Aboutleaders'
import Footer from '../component/footer/Footer'


const Aboutpage = () => {
  return (
    <div>
      <Navbar/>
      <AboutHero/>
      <Aboutleader/>
      <Aboutservices/>
      <Aboutaward/>
      <Footer/>
    </div>
  )
}

export default Aboutpage
