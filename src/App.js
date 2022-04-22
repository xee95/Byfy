import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import Authentication from './Pages/Authentication/Authentication'
import Category from './Pages/Category/Category'
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts'
import CheckOut from './Pages/CheckOut/CheckOut'
import Home from './Pages/Home/Home'

function App ()  {
  return (
    <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/Authentication" element={<Authentication/>}/>
     <Route exact path="/Category" element={<Category/>}/>
     <Route exact path="/CategoryProducts" element={<CategoryProducts/>}/>
     <Route exact path="/CheckOut" element={<CheckOut/>}/>

    </Routes>
  )
}

export default App