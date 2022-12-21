import React, { useEffect, useState } from "react";
import AdminIndex from "./AdminIndex";
import axios from "axios";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(`https://mirsat-vercel-database.vercel.app/yooxData`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const handleDelete = (id) => {
    axios.delete(`https://mirsat-vercel-database.vercel.app/yooxData/${id}`)
      .then(() => {
        alert("Product deleted")
        window.location.reload()
      })
  }

  return (
    <div className="dashboard-main-con">
      {/* <div>
        <AdminIndex />
      </div> */}
      <h2 className="dash-con-header">Dashboard</h2>
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
              <button style={{ marginRight: '10px' }} onClick={() => (handleDelete(ele.id))}>Delete</button>
              <Link to={`/dashboard/${ele.id}`}><button>Edit</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;