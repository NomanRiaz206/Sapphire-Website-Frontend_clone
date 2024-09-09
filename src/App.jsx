import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


// Add all icons in the free-solid-svg-icons package to the library
library.add(fas);
import Navbar from './Components/Navbar'
import Logobar from './Components/Logobar'
import Home from './Components/Home';
import Newin from './Components/Newin';
import Woman from './Components/Woman';
import Man from './Components/Man';
import Kids from './Components/Kids';
import Footer from './Components/Footer';


const App = () => {
  return (
<div>
<Logobar/>
<Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Newin' element={<Newin/>}></Route>
  <Route path='/Woman' element={<Woman/>}></Route>
  <Route path='/Man' element={<Man/>}></Route>
  <Route path='/Kids' element={<Kids/>}></Route>
  </Routes>
  <Footer/>
</div>


  )
}

export default App
