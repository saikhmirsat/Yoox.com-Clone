import React from 'react'
import "./CarouselCard.css"

const CarouselCard = ({img, brand, category, price}) => {
  return (
    <div className='carousel-card' >
        <img src={img} />
        <h4>{brand}</h4>
        <p>{category}</p>
        <span> US$ {price}</span>
    </div>
  )
}


export  {CarouselCard};