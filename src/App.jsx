import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Solutionspage from './pages/Solutionspage';
import Servicespage from './pages/Servicespage';
import Aboutpage from './pages/Aboutpage';
import Careerpage from './pages/Careerpage';
import Healthpage from './pages/Healthpage';
import Adminpage from './pages/Adminpage';
import Contactpage from './pages/Contactpage';
import CustomCursor from './customCursor/CustomCursor';




function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/solutions' element={<Solutionspage/>}/>
        <Route path='/services' element={<Servicespage/>}/>
        <Route path='/aboutus' element={<Aboutpage/>}/>
        <Route path='/career' element={<Careerpage/>}/>
        <Route path='/health' element={<Healthpage/>}/>
        <Route path='/admin' element={<Adminpage/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
      </Routes>
    </BrowserRouter>
    <CustomCursor/>
    </>
  );
}

export default App;
