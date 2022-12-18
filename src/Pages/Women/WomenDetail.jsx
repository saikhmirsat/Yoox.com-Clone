import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import './WomenDetail.css'


export default function WomenDetail() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [obj, setObj] = useState({})
  console.log(obj)

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://mirsat-vercel-database.vercel.app/yooxData/${id}`)
      .then((res) => setObj(res.data))
  }, [])

  const handleAddToCart = (ele) => {


    axios.post(`https://product-list-api.onrender.com/cart`, ele)
      .then((res) => {
        setCart([...cart, res.data])
        alert("Product added to the cart !");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
        alert("Product is already added !")
      })


  };


  return (
    <div>
      <div className='womenDetail-1st-con'>
        <div>

          <img src={obj.image_1} alt="" />


        </div>
        <div >
          <h4>{obj.title}</h4>
          <p>{obj.type}</p>
          <span style={{ color: 'grey', textDecorationLine: 'line-through' }}>US$388,00</span><span> {obj.offer}%  OFF</span>
          <h3>US$ {obj.price}</h3>
          <p>{obj.color}</p>
          <div style={{ backgroundColor: `${obj.color}`, border: '1px solid black', height: '40px', width: '40px', borderRadius: '50%' }}></div>
          <span>Size : {obj.size}</span>
          <button onClick={() => handleAddToCart(obj)}>Add To Bag</button>
        </div>
      </div>
    </div>
  )
}
