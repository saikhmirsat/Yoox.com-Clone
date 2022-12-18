import axios from "axios";
import React from "react";
import "./Address.css";

export let emptyCart =(id)=>{
 axios.delete(`https://product-list-api.onrender.com/cart/${id}`)
}
const handleSubmit=(e)=>{
e.preventDefault()
emptyCart()
}
const Address = () => {
    
  return (
    <div style={{ alignItems: "center", margin: "auto" }}>
      <div style={{ fontSize: "25px", marginTop:"40px"}}>Address</div>
      <div className="address">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Name : <input type="text" placeholder="Name" required />
          </label>
          <label htmlFor="">
            Mobile No : <input type="number" placeholder="Mobile" required />
          </label>
          <label htmlFor="">
            Address :{" "}
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your address ..."
              required
            ></textarea>
          </label>
          <label htmlFor="">
            Payment Through Cash on Delevery :{" "}
            <input type="checkbox" required />
          </label>

          <input
            type="submit"
            value="Place Order"
            
          />
        </form>
      </div>
    </div>
  );
};

export default Address;
