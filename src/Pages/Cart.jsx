import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`https://product-list-api.onrender.com/cart`)
      .then((res) => setCart(res.data));
  }, [cart]);

  const removeProduct = (ele) => {


    axios.delete(`https://product-list-api.onrender.com/cart/${ele.id}`)
    alert("Product removed !")
  }
  let total = 0
  cart.map((element) => (
    total += Number(element.price)
  ))
  return (
    <div>
      <div>Cart</div>
      <div>
        {cart.map((ele) => (
          <div
            key={ele.id}
            style={{
              display: "flex",
              height: "150px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={ele.image_1} height="100%" width="100px" alt="image" />
            <h5>{ele.title}</h5>
            <h4>${ele.price}</h4>
            <button onClick={() => removeProduct(ele)}>Remove</button>
          </div>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        <h2>Total price= {total}</h2>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Cart;