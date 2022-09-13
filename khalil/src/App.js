import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Home from './component/home';
import Coaching from './component/coaching';
import Contact from './component/contact';
import Footer from './component/footer';
import Galerie from './component/galerie';
import Register from './component/register';
import Login from './component/login';
function App() {
  return (
    
      <BrowserRouter>
     
    <Routes>
    <Route  path='/Register'   element={<Register/>} />
    <Route  path='/'          element={<Login/>} />
      <Route  path='/Home'          element={<Home/>} />
      <Route  path='/Coaching'  element={<Coaching/>} />
      <Route path='/Galerie'    element={<Galerie/>}/>
      <Route  path='/Contact'   element={<Contact/>} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
