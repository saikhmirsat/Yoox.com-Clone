import React,{useEffect, useRef, useState} from 'react'
import {CarouselCard} from './CarouselCard'
import "./Girls_Boy_Carousel.css";
import { HiArrowLeft,HiArrowRight } from "react-icons/hi2";

const GirlsCarousel = () => {
  const [cliWidth, setClientWidth] = useState(0);


    const girls_arrivals_data = [
       {
          "img": "https://www.yoox.com/images/items/10/10030637IF_14_f.jpg",
          "brand": "VERSACE YOUNG",
          "category":"Sweatshirt",
          "discount":"29",
          "price":"203.00",
          "id":1
    
        },
        {
          "img": "https://www.yoox.com/images/items/17/17467566CM_14_f.jpg" ,
          "brand": "VEJA",
          "category":"Sneakers",
          "discount":"34",
          "price":"128.00",
          "id":2
        },
        {
          "img": "https://www.yoox.com/images/items/13/13920618AI_14_f.jpg" ,
          "brand": "CHIARA FERRAGNI",
          "category":"Casual pants",
          "discount":"27",
          "price":"96.00",
          "id":3,
        },
        {
          "img":"https://www.yoox.com/images/items/46/46890940TK_14_f.jpg" ,
          "brand": "EMILIO PUCCI",
          "category":"Hair accessory",
          "discount":"35",
          "price":"39.00",
          "id":4
        },
        {
          "img": "https://www.yoox.com/images/items/54/54191471QV_14_f.jpg",
          "brand": "ADIDAS ORIGINAL",
          "category":"Athletic outfit",
          "discount":"35",
          "price":"70.00",
          "id":5
        },
        {
          "img":"https://www.yoox.com/images/items/17/17463663NT_14_f.jpg",
          "brand": "FALCOTTO",
          "category":"Sneakers",
          "discount":"34",
          "price":"78.00",
          "id":6
        },
        {
          "img":"https://www.yoox.com/images/items/17/17470342SW_14_f.jpg",
          "brand": "HOGAN",
          "category":"Sneakers",
          "discount":"34",
          "price":"127.00",
          "id":7
        },
        {
          "img":"https://www.yoox.com/images/items/10/10030436BN_14_f.jpg",
          "brand": "FENDI",
          "category":"T-shirt",
          "discount":"34",
          "price":"272.00",
          "id":8
        },
        {
          "img":"https://www.yoox.com/images/items/10/10030078TU_14_f.jpg",
          "brand": "VERSACE YOUNG",
          "category":"T-shirt",
          "discount":"34",
          "price":"137.00",
          "id":9
        }
        
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
          <p className='gb-new-arrival-heading' > NEW ARRIVALS GIRLS</p>
          <a href="#" id='ujju' className='gb-view-all-heading' > VIEW ALL</a>
          <div className='gb-product-container' >

              <button className="gb-prev-btn" onClick={handlePrevbtn} > <p  ><HiArrowLeft /></p> </button>
              <button className="gb-next-btn" onClick={handleNextbtn} > <p  ><HiArrowRight/></p> </button>

              <div className="gb-product-slider">
                {
                  girls_arrivals_data.map((item) => <CarouselCard key={item.id} img={item.img}
                  brand={item.brand} category={item.category} price={item.price} />)
                }
              </div>

              </div>
        </div>
  )
}

const BoysCarousel = () =>{

  const boys_arrivals_data = [
    {
      "img": "https://www.yoox.com/images/items/46/46889672OF_14_f.jpg",
      "brand": "NAME IT",
      "category":"Hat",
      "discount":"34",
      "price":"24.00",
      "id":1

    },
    {
      "img": "https://www.yoox.com/images/items/10/10030341AK_14_f.jpg" ,
      "brand": "FENDI",
      "category":"Sweatshirt",
      "discount":"30",
      "price":"277.00",
      "id":2
    },
    {
      "img": "https://www.yoox.com/images/items/46/46892767CM_14_f.jpg" ,
      "brand": "HEROS",
      "category":"Hat",
      "discount":"36",
      "price":"98.00",
      "id":3,
    },
    {
      "img":"https://www.yoox.com/images/items/10/10032376PH_14_f.jpg" ,
      "brand": "VISION OF SUPER",
      "category":"Sweatshirt",
      "discount":"34",
      "price":"87.00",
      "id":4
    },
    {
      "img": "https://www.yoox.com/images/items/13/13963344RL_14_f.jpg",
      "brand":"STELLA McCARTNEY KIDS",
      "category":"Casual pants",
      "discount":"36",
      "price":"57.00",
      "id":5
    },
    {
      "img":"https://www.yoox.com/images/items/46/46892840WA_14_f.jpg",
      "brand": "ROTATE BIRGER CHRISTENSEN",
      "category":"N*21",
      "discount":"40",
      "price":"38.00",
      "id":6
    },
    {
      "img":"https://www.yoox.com/images/items/17/17457689GT_14_f.jpg",
      "brand": "VANS",
      "category":"Sneakers",
      "discount":"34",
      "price":"46.00",
      "id":7
    },
    {
      "img":"https://www.yoox.com/images/items/10/10031877JS_14_f.jpg",
      "brand": "VISION OF SUPER",
      "category":"Sweatshirt",
      "discount":"33",
      "price":"82.00",
      "id":8
    },
    {
      "img":"https://www.yoox.com/images/items/46/46886506HE_14_f.jpg",
      "brand": "HEROS",
      "category":"Hat",
      "discount":"33",
      "price":"107.00",
      "id":9
    },
    
  ]

  const box = document.getElementsByClassName("gb-one-product-slider");
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
      <p className='gb-new-arrival-heading' > NEW ARRIVALS BOYS</p>
      <a href="#" id='ujju' className='gb-view-all-heading' > VIEW ALL</a>
      <div className='gb-product-container' >

          <button className="gb-prev-btn" onClick={handlePrevbtn} > <p  ><HiArrowLeft /></p> </button>
          <button className="gb-next-btn" onClick={handleNextbtn} > <p  ><HiArrowRight/></p> </button>

          <div className="gb-one-product-slider">
            {
              boys_arrivals_data.map((item) => <CarouselCard key={item.id} img={item.img}
              brand={item.brand} category={item.category} price={item.price} />)
            }
          </div>

          </div>
    </div>

)
}

export  {GirlsCarousel,BoysCarousel}