import React from "react";
import { Link } from "react-router-dom";
import "./index.css"


const Admin = () => {
  return (
    <div>
    <div className="admin_heading">
      <Link to={"/add_products"}>ADD PRODUCTS</Link>
      <Link to={"/dashboard"}>DASHBOARD</Link>
    </div>
     <div>
     <h1>Welcome To Admin Page !</h1>
   </div>
   </div>
  );
};

export default Admin;
