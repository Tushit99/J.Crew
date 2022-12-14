import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import Forboys from '../Pages/forboy/Forboys'
import { Home } from '../Pages/index/Home'

const AllRoute = () => {
  return ( 
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/forboys' element={<Forboys />} />
      </Routes> 
  )
}

export default AllRoute 