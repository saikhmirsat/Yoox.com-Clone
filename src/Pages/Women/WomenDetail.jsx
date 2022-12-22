import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import './WomenDetail.css'
import Footer from '../../Components/Footer/Footer'


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
    <div className='womenDetail-main-container'>
      <img src="https://www.yoox.com/images/yoox80/banners/6971_2_TOP_DM_ROWHK_W.png?634485886601286852" alt="" />
      <div className='womenDetail-1st-con'>
        <div>

          <img src={obj.image_1} alt="" />


        </div>
        <div className='womenDetail-2nd-con'>
          <h4>{obj.title}</h4>
          <p>{obj.type}</p>
          <span style={{ color: 'grey', textDecorationLine: 'line-through' }}>US$388,00</span>
          
          <span> {obj.offer}%  OFF</span>
          <br />
          <span>US$ {obj.price}</span>
          
          <p>{obj.color}</p>
          <p style={{marginLeft:'250px', backgroundColor: `${obj.color}`, 
          border: '1px solid black', height: '40px', width: '40px', borderRadius: '50%',padding:0 }}></p>
          <span>Size : {obj.size}</span>
          <br />
          <div className="size-guide">
            <p> <img src="https://community.powerbi.com/t5/image/serverpage/image-id/708393i452687C02A29B091/image-dimensions/2000?v=v2&px=-1" width={20} alt="" />
            need more help? view <span className='size-guide-span' >Size Guide</span> </p>
          </div>
          <button className='detail-bag-button' onClick={() => handleAddToCart(obj)}>Add To Bag</button>
          <div className="dream-box">
            <p>ADD TO DREAM BOX</p>
          </div>
        </div>
      </div>
      <hr style={{marginBottom:"60px"}} />
      <Footer  />
    </div>
  )
}
