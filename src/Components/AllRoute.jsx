import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import Forboys from '../Pages/forboy/Forboys'
import Forgirl from '../Pages/forgirl/Forgirl'
import Formen from '../Pages/formen/Formen'
import Forwomen from '../Pages/forwomen/Forwomen'
import { Home } from '../Pages/index/Home'

const AllRoute = () => {
  return ( 
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/forboys' element={<Forboys />} /> 
        <Route path='/formen' element={<Formen />} /> 
        <Route path='/forwomen' element={<Forwomen />} /> 
        <Route path='/forgirl' element={<Forgirl />} />  
        <Route path='/cart' element={<Cart />} />  
      </Routes> 
  )
}

export default AllRoute  
