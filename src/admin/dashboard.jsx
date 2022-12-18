import React, { useEffect, useState } from "react";
import AdminIndex from "./AdminIndex";
import axios from "axios";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get(`https://product-list-api.onrender.com/products`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete=(id)=>{
   axios.delete(`https://product-list-api.onrender.com/products/${id}`)
   .then(()=>{
    alert("Product deleted")
    window.location.reload()
   })
  }
 
  return (
    <div>
      {/* <div>
        <AdminIndex />
      </div> */}
      <h2>Dashboard</h2>
      <hr />

      <div className="all_products">
        {data.map((ele) => (
          <div key={ele.id} className="product_container">
            <div className="product_image">
              <img src={ele.image_1} alt="Product photo" />
            </div>
            <hr />
            <div className="product_details">
              <h3>{ele.title}</h3>
              <p>{ele.type}</p>
              <h3>${ele.price}</h3>
            </div>
            <div className="edit_btn">
              <button onClick={()=>(handleDelete(ele.id))}>Delete</button>
             <Link to={`/dashboard/${ele.id}`}><button>Edit</button></Link> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
