import React from "react";
import { Link } from "react-router-dom";



const Admin = () => {
  return (
    <div className="">
      <Link to={"/add_products"}>ADD PRODUCTS</Link>
      <Link to={"/dashboard"}>DASHBOARD</Link>
    </div>
  );
};

export default Admin;
