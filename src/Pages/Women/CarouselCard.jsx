import React from 'react'
import "./CarouselCard.css"
import { Link } from 'react-router-dom'
import AddToCart from '../Men/AddToCart'
import { useNavigate } from 'react-router-dom'




const CarouselCard = ({img, brand, category, price}) => {
  const navigate = useNavigate();
  const addTocartButton = () =>{

    
      navigate('/addToCart')
      // <Link to='/addToCart' >add to cart   </Link>
      console.log("hello")
  }
  return (
    <div onClick={addTocartButton} className='carousel-card' >
        <img src={img} />
        <h4>{brand}</h4>
        <p>{category}</p>
        <span> US$ {price}</span>
    </div>
  )
}
const OneInAllCarouselCard = ({img, brand, category, price}) => {
  const navigate = useNavigate();
  const addTocartButton = () =>{

    
      navigate('/addToCart')
      // <Link to='/addToCart' >add to cart   </Link>
      console.log("hello")
  }
  return (
    <div onClick={addTocartButton} className='one-carousel-card' >
        <img src={img} />
        <h4>{brand}</h4>
        <p>{category}</p>
        <span> US$ {price}</span>
    </div>
  )
}

export  {CarouselCard,OneInAllCarouselCard};