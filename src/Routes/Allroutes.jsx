import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
// import DesignArt from '../Pages/DesignArt/DesignArt'
import Kids from '../Pages/Kids'
import Men from '../Pages/Men/Men'
import Register from '../Pages/Register'
import Wishlist from '../Pages/Wishlist'
import Women from '../Pages/Women/Women'
import Login from '../Pages/Login'
import Admin from '../Pages/Admin'
import Search from '../Pages/Search'

export default function Allroutes() {
    return (
        <Routes>
            <Route path='/women' element={<Women />}></Route>
            <Route path='/men' element={<Men />}></Route>
            <Route path='/kids' element={<Kids />}></Route>
            {/* <Route path='/design' element={<DesignArt />}></Route> */}
            <Route path='/wishlist' element={<Wishlist />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
        </Routes>
    )
}
