import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Home from './component/home';
import Navbar1 from './component/navbar';
import Coaching from './component/coaching';
import Contact from './component/contact';
import Footer from './component/footer';
import Galerie from './component/galerie'
function App() {
  return (
    
      <BrowserRouter>
      <Navbar1/>
    <Routes>
      <Route  path='/'          element={<Home/>} />
      <Route  path='/Coaching'  element={<Coaching/>} />
      <Route path='/Galerie'    element={<Galerie/>}/>
      <Route  path='/Contact'   element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
