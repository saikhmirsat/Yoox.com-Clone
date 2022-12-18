import axios from "axios";
import React from "react";
import "./Address.css";
import { useNavigate } from "react-router-dom";

const Address = () => {
  let Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Congratulations!! Order successfull !");
    Navigate("/womenItem");
  };
  return (
    <div style={{ alignItems: "center", margin: "auto",marginBottom:"60px" }}>
      <div style={{ fontSize: "25px", marginTop: "40px" }}>Address</div>
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

          <input type="submit" value="Place Order" />
        </form>
      </div>
    </div>
  );
};

export default Address;
