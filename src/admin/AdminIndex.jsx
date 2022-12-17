import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
import "./index.css";
import ProductDetails from "./product_form";

const AdminIndex = () => {
  return (
    <div>
      {/* <div className="admin_heading">
        <Link to={"/add_products"}>ADD PRODUCTS</Link>
        <Link to={"/dashboard"}>DASHBOARD</Link>
      </div> */}
      <div className="admin_panel">
            <div className="form"><ProductDetails/></div>
            <div className="dash"><Dashboard/></div>
        </div>
    </div>
  );
};

export default AdminIndex;
