import React from 'react'

import './image-plus-slider.css'
import ImagePlusSliderCard from '../Women/imagePlusSliderCard'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

const ImagePlusSlider = () => {

  let box = document.getElementsByClassName("men-ImagePlusSlider-product-container");
  console.log(box)
  const handlePrevBtn = () =>{
    let width = box[0].clientWidth;
    box[0].scrollLeft = box[0].scrollLeft - width
    
  }

  const handleNextBtn =() =>{
    let width = box[0].clientWidth;
    box[0].scrollLeft = box[0].scrollLeft + width
    console.log("next")
  }

  const sliderOfImageContainerData = [
    {
      "id":1,
      "img":"https://www.yoox.com/images/items/16/16144202BC_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Suit jacket",
      "discount":"32",
      "price":"195.00"
    },
    {
      "id":2,
      "img":"https://www.yoox.com/images/items/12/12917310CG_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Shirt",
      "discount":"",
      "price":"100.00"
    },
    {
      "id":3,
      "img":"https://www.yoox.com/images/items/13/13832267PA_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Casual pants",
      "discount":"30",
      "price":"130.00"
    },
    {
      "id":4,
      "img":"https://www.yoox.com/images/items/14/14270866SJ_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Sweater",
      "discount":"28",
      "price":"79.00"
    },
    {
      "id":5,
      "img":"https://www.yoox.com/images/items/17/17375491HB_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Boots",
      "discount":"",
      "price":"290.00"
    },
    {
      "id":6,
      "img":"https://www.yoox.com/images/items/12/12867604CJ_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Shirt",
      "discount":"",
      "price":"100.00"
    },
    {
      "id":7,
      "img":"https://www.yoox.com/images/items/13/13819644IN_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Pants",
      "discount":"",
      "price":"89.00"
    },
    {
      "id":8,
      "img":"https://www.yoox.com/images/items/46/46871741XK_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Leather belt",
      "discount":"26",
      "price":"59.00"
    },
    {
      "id":9,
      "img":"https://www.yoox.com/images/items/49/49774549QF_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand":"8 by YOOX",
      "category":"Suit jacket",
      "discount":"29",
      "price":"179.00"
    },
  ]
  
  
  return (
    <div className='men-ImagePlusSlider-container' >
      <div className="men-image-container">
        <img src="https://www.yoox.com/images/yoox80/banners/6833_3_8byYoox_Special_WM.png" alt="" />
        <div className="men-its-party-time">
          <h2>IT'S PARTY TIME</h2>
          <p>8 By YOOX:select this season's perfect party look</p>
          <div>
            <span>SHOP MORE</span>
            <span className='men-discover' >DISCOVER MORE</span>
          </div>
          <br />
        </div>


      </div>

      <div className='men-ImagePlusSlider-slider' >
        <button className="men-slider-prev-btn" > <p onClick={handlePrevBtn} > <HiArrowLeft /> </p> </button>
        <button className="men-slider-next-btn" > <p onClick={handleNextBtn} > <HiArrowRight /> </p> </button>
        <div className='men-ImagePlusSlider-product-container' >
        {
          sliderOfImageContainerData.map((item) => <ImagePlusSliderCard 
          key={item.id} brand={item.brand} price={item.price} category={item.category} img={item.img} />)
        }
        </div>
      </div>
    </div>
  )
}

export default ImagePlusSlider

