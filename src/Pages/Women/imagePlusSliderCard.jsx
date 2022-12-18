import React from 'react'
import './imagePlusSliderCard.css'

const ImagePlusSliderCard = ({img,brand,category,price}) => {
  return (
    <div className='women-imagePlusSliderCard' >
        <img src={img} />
        <h4>{brand}</h4>
        <p>{category}</p>
        <span> US$ {price}</span>
    </div>
  )
}

export default ImagePlusSliderCard