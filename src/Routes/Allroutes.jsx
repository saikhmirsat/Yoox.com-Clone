import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Design from '../Pages/Design/Design'
import Kids from '../Pages/Kids/Kids'
import Men from '../Pages/Men/Men'
import Register from '../Pages/Register'
import Wishlist from '../Pages/Wishlist'
import Women from '../Pages/Women/Women'
import Login from '../Pages/Login'
import Search from '../Pages/Search'
import ProductDetails from '../admin/product_form'
import Dashboard from '../admin/dashboard'
// import AdminRegisterLogin from '../admin/AdminRegisterLogin'
import AdminLogin from '../admin/AdminLogin'
import AdminRegister from '../admin/AdminRegister'
import AdminIndex from '../admin/AdminIndex'

import AddToCart from '../Pages/Men/AddToCart'

import EditProduct from '../admin/editProduct'
import WomenItems from '../Pages/Women/WomenItems'
import WomenDetail from '../Pages/Women/WomenDetail'
import Address from '../Pages/Address'

export default function Allroutes() {
    return (
        <Routes>
            <Route path='/' element={<Women />}></Route>
            <Route path='/men' element={<Men />}></Route>
            <Route path='/womenItem' element={<WomenItems />}></Route>
            <Route path='/womenItem/:id' element={<WomenDetail />}></Route>
            <Route path='/kids' element={<Kids />}></Route>
            <Route path='/design' element={<Design />}></Route>
            <Route path='/wishlist' element={<Wishlist />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/add_products" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path='/adminRegisterLogin' element={<AdminRegisterLogin />}></Route> */}
            <Route path='/adminLogin' element={<AdminLogin />}></Route>
            <Route path='/adminRegister' element={<AdminRegister />}></Route>
            <Route path='/adminIndex' element={<AdminIndex />}></Route>

            <Route path='/addToCart' element={<AddToCart />}> </Route>

            <Route path="/dashboard/:product_id" element={<EditProduct />}></Route>
            <Route path='/address' element={<Address />}></Route>

        </Routes>
    )
}
