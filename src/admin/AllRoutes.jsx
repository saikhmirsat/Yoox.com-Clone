import React from 'react'
import { Routes,Route } from "react-router-dom";
import ProductDetails from "./product_form";
import Dashboard from "./dashboard";
import Kids from './kids';
import Men from './men';
import Women from './women';

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/add_products" element={ <ProductDetails />}/>
        <Route path="/dashboard" element={ <Dashboard />}/>
        <Route path="/kids" element={ <Kids />}/>
        <Route path="/men" element={ <Men />}/>
        <Route path="/women" element={ <Women />}/>
    </Routes>
  </div>
  )
}

export default AllRoutes