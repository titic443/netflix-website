import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path='/login' element={<Login/>}></Route>
            <Route exect path='/signup' element={<Signup/>}></Route>
            <Route exect path='/netflix' element={<Netflix/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
