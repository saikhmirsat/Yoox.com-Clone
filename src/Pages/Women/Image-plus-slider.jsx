import React from 'react'

import './image-plus-slider.css'
import ImagePlusSliderCard from './imagePlusSliderCard'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

const ImagePlusSlider = () => {

  const sliderOfImageContainerData = [
    {
      "id":1,
      "img":"https://www.yoox.com/images/items/50/50287417AM_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Earrings",
      "discount":"19",
      "price":"29.00"
    },
    {
      "id":2,
      "img":"https://www.yoox.com/images/items/15/15245940KN_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Long dress",
      "discount":"",
      "price":"170.00"
    },
    {
      "id":3,
      "img":"https://www.yoox.com/images/items/17/17365751RC_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Boots",
      "discount":"30",
      "price":"180.00"
    },
    {
      "id":4,
      "img":"https://www.yoox.com/images/items/12/12887851CO_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Crop top",
      "discount":"",
      "price":"60.00"
    },
    {
      "id":5,
      "img":"https://www.yoox.com/images/items/50/50283273GQ_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Earrings",
      "discount":"",
      "price":"42.00"
    },
    {
      "id":6,
      "img":"https://www.yoox.com/images/items/15/15241348FV_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Midi dress",
      "discount":"",
      "price":"200.00"
    },
    {
      "id":7,
      "img":"https://www.yoox.com/images/items/46/46867026DP_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Socks & tights",
      "discount":"",
      "price":"30.00"
    },
    {
      "id":8,
      "img":"https://www.yoox.com/images/items/12/12941504EA_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Top",
      "discount":"",
      "price":"170.00"
    },
    {
      "id":9,
      "img":"https://www.yoox.com/images/items/17/17435314GV_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Ankle boot",
      "discount":"",
      "price":"240.00"
    },
  ]
  
  
  return (
    <div className='ImagePlusSlider-container' >
      <div className="image-container">
        <img src="https://www.yoox.com/images/yoox80/banners/6833_3_8byYoox_Special_WM.png" alt="" />
        <div className="its-party-time">
          <h2>IT'S PARTY TIME</h2>
          <p>8 By YOOX:select this season's perfect party look</p>
          <div>
            <span>SHOP MORE</span>
            <span className='discover-more' >DISCOVER MORE</span>
          </div>
          <br />
        </div>


      </div>

      <div className='ImagePlusSlider-slider' >
        <button className="slider-prev-btn"> <p> <HiArrowLeft /> </p> </button>
        <button className="slider-next-btn"> <p> <HiArrowRight /> </p> </button>
        {
          sliderOfImageContainerData.map((item) => <ImagePlusSliderCard 
          key={item.id} brand={item.brand} price={item.price} category={item.category} img={item.img} />)
        }
      </div>
    </div>
  )
}

export default ImagePlusSlider

