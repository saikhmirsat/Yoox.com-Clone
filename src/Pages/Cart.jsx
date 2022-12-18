import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
    window.location.reload()
  }
  let total = 0
  cart.map((element) => (
    total += Number(element.price)
  ))
  const navigat = useNavigate()
  const handleChange = () => {
    // axios.delete(`https://product-list-api.onrender.com/cart/${ele.id}`)
    alert("Are you sure?!!")
    navigat('/address')
  }

  return (
    <div>
      <div>Cart</div>
      <div style={{margin:"auto",width:"85%"}}>
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
            <button onClick={() => removeProduct(ele) }>Remove</button>
          </div>
        ))}
      </div>
      <hr />
      <div >
        <h2 style={{ textAlign: "right",marginRight:"10%" }}>Total : ${total}</h2>
        <button onClick={handleChange} style={{ marginBottom: "60px",padding:"2px 15px", fontSize:"20px" }}>Buy</button>
      </div>
    </div>
  );
};

export default Cart;