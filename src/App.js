import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='a'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/place' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App