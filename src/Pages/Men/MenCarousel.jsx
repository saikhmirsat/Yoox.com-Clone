import React,{useEffect, useRef, useState} from 'react'
import {CarouselCard,OneInAllCarouselCard} from '../Women/CarouselCard'
import "./men-carousel.css";
// import {BiArrowBack} from "react-icons"
import { HiArrowLeft,HiArrowRight } from "react-icons/hi2";
import { Heading } from '@chakra-ui/react';

const MenCarousel = () => {
  const [cliWidth, setClientWidth] = useState(0);


  const new_arrivals_data = [
    {
      "img": "https://www.yoox.com/images/items/13/13935174RX_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "OFF WHITE",
      "category":"Casual Pant",
      "discount":"",
      "price":"886.00",
      "id":1

    },
    {
      "img": "https://www.yoox.com/images/items/46/46889217JT_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "HERON PRESTON",
      "category":"HAT",
      "discount":"",
      "price":"182.00",
      "id":2

    },
    {
      "img": "https://www.yoox.com/images/items/17/17450038TR_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "VALENTINO GARAVANI",
      "category":"Boots",
      "discount":"",
      "price":"866.00",
      "id":3

    },
    {
      "img": "https://www.yoox.com/images/items/17/17462043UG_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "VALENTINO GARAVANI",
      "category":"Sneakers",
      "discount":"",
      "price":"507.00",
      "id":4

    },
    {
      "img": "https://www.yoox.com/images/items/14/14298286UJ_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "PRADA",
      "category":"Shirt",
      "discount":"",
      "price":"577.00",
      "id":5

    },
    {
      "img": "https://www.yoox.com/images/items/45/45707332BX_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "BOTEGA VENETTA",
      "category":"Cross body bags",
      "discount":"",
      "price":"1567.00",
      "id":6

    },
    {
      "img": "https://www.yoox.com/images/items/16/16199532OT_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "STONE ISLAND",
      "category":"Jacket",
      "discount":"",
      "price":"935",
      "id":7

    },
    {
      "img": "https://www.yoox.com/images/items/46/46858856IW_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "GIVENCHY",
      "category":"Scarves and Foulards",
      "discount":"",
      "price":"217.00",
      "id":8

    },
    {
      "img": "https://www.yoox.com/images/items/16/16182949DP_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "OFF WHITE",
      "category":"Jacket",
      "discount":"",
      "price":"744",
      "id":9

    },
    
    
  ]

      
      const ref = useRef(null); //ref to parent div
      const box = document.getElementsByClassName("men-product-slider")
      console.log("box",box)
      // console.log("box",box[0].clientWidth)
      useEffect(() =>{
        
        let width = box.clientWidth;
        // console.log('width',width)
        setClientWidth(width)

      },[])

        // const handlePrevbtn = () => {
        //   let width = ref.current.clientWidth;

        //   console.log(width)
        //   ref.current.scrollLeft = ref.current.scrollLeft - width;
        // };
        // const handleNextbtn = () => {
        //   let width = ref.current.clientWidth;
        //   ref.current.scrollLeft = ref.current.scrollLeft + width;
        // };
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
          <p className='men-new-arrival-heading' > NEW ARRIVALS </p>
          <p className='men-view-all-heading' > VIEW ALL</p>
          <div className='men-product-container' >

              <button className="men-prev-btn" onClick={handlePrevbtn} > <p  ><HiArrowLeft /></p> </button>
              <button className="men-next-btn" onClick={handleNextbtn} > <p  ><HiArrowRight/></p> </button>

              <div className="men-product-slider">
                {
                  new_arrivals_data.map((item) => <CarouselCard key={item.id} img={item.img}
                  brand={item.brand} category={item.category} price={item.price} />)
                }
              </div>

              </div>
        </div>
  )
}

const OneInAllCarousel = () =>{

   let one_in_all_data = [
    {
        "img":"https://www.yoox.com/images/items/10/10022882VC_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"PALM ANGELS",
        "category":"Sweatshirts",
        "price":"383.00",
        "id":1
    },
    {
        "img":"https://www.yoox.com/images/items/10/10026187TH_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"MARKET",
        "category":"Tshirt",
        "price":"61.00",
        "id":2
    },
    {
        "img":"https://www.yoox.com/images/items/12/12997969JW_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"VETEMENTS",
        "category":"Polo Tshirt",
        "price":"734.00",
        "id":3
    },
    {
        "img":"https://www.yoox.com/images/items/13/13913506IM_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"LOEWE",
        "category":"Cargo",
        "price":"441.00",
        "id":4
    },
    {
        "img":"https://www.yoox.com/images/items/14/14287499UW_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"BOTEGA VENETA",
        "category":"Sweater",
        "price":"728.00",
        "id":5
    },
    {
        "img":"https://www.yoox.com/images/items/16/16186987UT_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"KENZO",
        "category":"Jacket",
        "price":"371.00",
        "id":6
    },
    {
        "img":"https://www.yoox.com/images/items/46/46868126ME_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"GIVENCHY",
        "category":"Scarves",
        "price":"247.00",
        "id":7
    },
    {
        "img":"https://www.yoox.com/images/items/14/14310233UH_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"LANVIN",
        "category":"Sweater",
        "price":"747.00",
        "id":8
    },
    {
        "img":"https://www.yoox.com/images/items/45/45699344VU_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand":"DSQUARED2",
        "category":"Backpack & funnypack",
        "price":"341.00",
        "id":9
    },
   ]

  const box = document.getElementsByClassName("men-one-product-slider");
  console.log(box)
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
        <p className='men-ONE-OF-A-KIND' > ONE OF A KIND </p>
        <p className='men-view-all-heading' > VIEW ALL</p>
        <div className='men-one-product-container' >

          <button className="men-one-prev-btn" onClick={handlePrevbtn} > <p  ><HiArrowLeft /></p> </button>
          <button className="men-one-next-btn" onClick={handleNextbtn} > <p  ><HiArrowRight/></p> </button>

          <div className="men-one-product-slider">
            {
              one_in_all_data.map((item) => <CarouselCard key={item.id} img={item.img}
              brand={item.brand} category={item.category} price={item.price} />)
            }
          </div>

        </div>
      </div>
)
}

export  {MenCarousel,OneInAllCarousel}