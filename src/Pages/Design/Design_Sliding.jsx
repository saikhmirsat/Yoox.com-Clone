import React,{useEffect, useRef, useState} from 'react'
import {CarouselCard} from './CarouselCard'
import { HiArrowLeft,HiArrowRight } from "react-icons/hi2";


const Design_Sliding = () => {
  const [cliWidth, setClientWidth] = useState(0);


    const new_arrivals_data = [
        {
          "img": "https://www.yoox.com/images/items/58/58062797XH_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "FORNASETTI",
          "category":"Vase",
          "discount":"34",
          "price":"1,060.00",
          "id":1
    
        },
        {
          "img": "https://www.yoox.com/images/items/58/58062850QK_14_f.jpg?impolicy=crop&width=306&height=390" ,
          "brand": "MISSONI HOME",
          "category":"Pillow or pillow case",
          "discount":"13",
          "price":"132.00",
          "id":2
        },
        {
          "img": "https://www.yoox.com/images/items/58/58062090WU_14_f.jpg?impolicy=crop&width=306&height=390" ,
          "brand": "RICHARD GINORI",
          "category":"Small object for Home",
          "discount":"27",
          "price":"170.00",
          "id":3,
        },
        {
          "img":"https://www.yoox.com/images/items/58/58062829LP_14_f.jpg?impolicy=crop&width=306&height=390" ,
          "brand": "FORNASETTI",
          "category":"Candles",
          "discount":"35",
          "price":"650.00",
          "id":4
        },
        {
          "img": "https://www.yoox.com/images/items/58/58062067VG_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "RICHRD GINORI",
          "category":"Candles",
          "discount":"40",
          "price":"496.00",
          "id":5
        },
        {
          "img":"https://www.yoox.com/images/items/56/56005530FE_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "ASSOULINE",
          "category":"Lifestyle Book",
          "discount":"31",
          "price":"130.00",
          "id":6
        },
        {
          "img":"https://www.yoox.com/images/items/58/58062783XM_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "SELETTI WEARS TOILETPAPER",
          "category":"Vase",
          "discount":"35",
          "price":"93.00",
          "id":7
        },
        {
          "img":"https://www.yoox.com/images/items/58/58062801TX_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "FORNASETTI",
          "category":"Decoration plates",
          "discount":"40",
          "price":"190.00",
          "id":8
        },
        {
          "img":"https://www.yoox.com/images/items/58/58062795FS_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "FORNASETTI",
          "category":"Small object for Home",
          "discount":"35",
          "price":"170.00",
          "id":9
        },
        {
            "img":"https://www.yoox.com/images/items/58/58063010RA_14_f.jpg?impolicy=crop&width=306&height=390",
            "brand": "PAPER COLLECTIVE",
            "category":"Painting or print",
            "discount":"40",
            "price":"78.00",
            "id":10
          },
          {
            "img":"https://www.yoox.com/images/items/58/58063008GB_14_f.jpg?impolicy=crop&width=306&height=390",
            "brand": "PAPER COLLECTIVE",
            "category":"Painting or print",
            "discount":"40",
            "price":"78.00",
            "id":11
          },
          {
            "img":"https://www.yoox.com/images/items/58/58061999FF_14_f.jpg?impolicy=crop&width=306&height=390",
            "brand": "HAY",
            "category":"Vase",
            "discount":"35",
            "price":"149.00",
            "id":12
          },
        
      ]

      
  
  const ref = useRef(null); //ref to parent div
  const box = document.getElementsByClassName("gb-product-slider")
  console.log("box",box)
  // console.log("box",box[0].clientWidth)
  useEffect(() =>{
    
    let width = box.clientWidth;
    // console.log('width',width)
    setClientWidth(width)

  },[])


  const handlePrevbtn = () =>{
    const width = box[0].clientWidth;
    // console.log(width)
    box[0].scrollLeft = box[0].scrollLeft-width;


  }

  const handleNextbtn = () =>{
    const width = box[0].clientWidth;
    // console.log(width)
    box[0].scrollLeft = box[0].scrollLeft+width;

  }
return (
    <div>
      <p className='gb-new-arrival-heading' >  TOP PICKS </p>
      <div className='gb-product-container' >

          <button className="gb-prev-btn" onClick={handlePrevbtn} > <p  ><HiArrowLeft /></p> </button>
          <button className="gb-next-btn" onClick={handleNextbtn} > <p  ><HiArrowRight/></p> </button>

          <div className="gb-product-slider">
            {
              new_arrivals_data.map((item) => <CarouselCard key={item.id} img={item.img}
              brand={item.brand} category={item.category} price={item.price} />)
            }
          </div>

          </div>
    </div>
)



}


export default Design_Sliding;