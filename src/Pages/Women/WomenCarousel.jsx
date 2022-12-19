import React, { useEffect, useRef, useState } from 'react'
import { CarouselCard, OneInAllCarouselCard } from './CarouselCard'
import "./women-carousel.css";
import { useNavigate } from 'react-router-dom'
// import {BiArrowBack} from "react-icons"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Heading } from '@chakra-ui/react';

const WomenCarousel = () => {
  const [cliWidth, setClientWidth] = useState(0);


  const new_arrivals_data = [
    {
      "img": "https://www.yoox.com/images/items/14/14295830IB_14_f.jpg",
      "brand": "STELLA McCARTNEY",
      "category": "Sweater",
      "discount": "34",
      "price": "671.00",
      "id": 1

    },
    {
      "img": "https://www.yoox.com/images/items/50/50294257EM_14_f.jpg",
      "brand": "APM Monaco",
      "category": "Earrings",
      "discount": "",
      "price": "139.00",
      "id": 2
    },
    {
      "img": "https://www.yoox.com/images/items/13/13909917KN_14_f.jpg",
      "brand": "MSGM",
      "category": "Casual pants",
      "discount": "27",
      "price": "282.00",
      "id": 3,
    },
    {
      "img": "https://www.yoox.com/images/items/45/45717732NW_14_f.jpg",
      "brand": "MARNI",
      "category": "Cross body bags",
      "discount": "",
      "price": "1,936.00",
      "id": 4
    },
    {
      "img": "https://www.yoox.com/images/items/16/16199356WX_14_f.jpg",
      "brand": "MINIMUM",
      "category": "Coat",
      "discount": "",
      "price": "326.00",
      "id": 5
    },
    {
      "img": "https://www.yoox.com/images/items/14/14293562JI_14_f.jpg",
      "brand": "GANNI",
      "category": "Cardigan",
      "discount": "31",
      "price": "230.00",
      "id": 6
    },
    {
      "img": "https://www.yoox.com/images/items/45/45721715SC_14_f.jpg",
      "brand": "ARKET",
      "category": "Handbag",
      "discount": "",
      "price": "112.00",
      "id": 7
    },
    {
      "img": "https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg",
      "brand": "TOPSHOP",
      "category": "Coat",
      "discount": "",
      "price": "147.00",
      "id": 8
    },
    // {
    //   "img":"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg",
    //   "brand": "TOPSHOP",
    //   "category":"Coat",
    //   "discount":"",
    //   "price":"147.00",
    //   "id":9
    // },

  ]


  const ref = useRef(null); //ref to parent div
  const box = document.getElementsByClassName("women-product-slider")
  console.log("box", box)
  // console.log("box",box[0].clientWidth)
  useEffect(() => {

    let width = box.clientWidth;
    // console.log('width',width)
    setClientWidth(width)

  }, [])

  // const handlePrevbtn = () => {
  //   let width = ref.current.clientWidth;

  //   console.log(width)
  //   ref.current.scrollLeft = ref.current.scrollLeft - width;
  // };
  // const handleNextbtn = () => {
  //   let width = ref.current.clientWidth;
  //   ref.current.scrollLeft = ref.current.scrollLeft + width;
  // };
  const handlePrevbtn = () => {
    const width = box[0].clientWidth;
    // console.log(width)
    box[0].scrollLeft = box[0].scrollLeft - width;


  }

  const handleNextbtn = () => {
    const width = box[0].clientWidth;
    // console.log(width)
    box[0].scrollLeft = box[0].scrollLeft + width;

  }
  const navigate = useNavigate()
  const viewallfunc = () => {
    navigate('/womenItem')
  }
  return (
    <div>
      <p className='women-new-arrival-heading' > NEW ARRIVALS </p>
      <p className='women-view-all-heading' onClick={viewallfunc}> VIEW ALL</p>
      <div className='women-product-container' >

        <button className="women-prev-btn" onClick={handlePrevbtn} > <p  ><HiArrowLeft /></p> </button>
        <button className="women-next-btn" onClick={handleNextbtn} > <p  ><HiArrowRight /></p> </button>

        <div className="women-product-slider">
          {
            new_arrivals_data.map((item) => <CarouselCard key={item.id} img={item.img}
              brand={item.brand} category={item.category} price={item.price} />)
          }
        </div>

      </div>
    </div>
  )
}

const OneInAllCarousel = () => {

  const one_in_all_data = [
    {
      "img": "https://www.yoox.com/images/items/15/15257841AU_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "SOLACE LONDON",
      "category": "Short Dress",
      "discount": "34",
      "price": "282.00",
      "id": 1

    },
    {
      "img": "https://www.yoox.com/images/items/17/17449510RK_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "SAINT LOURENT",
      "category": "Boots",
      "discount": "34",
      "price": "1391.00",
      "id": 2
    },
    {
      "img": "https://www.yoox.com/images/items/16/16178443DB_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "MSGM",
      "category": "Full Length Jacket",
      "discount": "27",
      "price": "1282.00",
      "id": 3,
    },
    {
      "img": "https://www.yoox.com/images/items/12/12982527FC_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "JIL SANDERS",
      "category": "Solid color shirt & Blouses",
      "discount": "34",
      "price": "193.00",
      "id": 4
    },
    {
      "img": "https://www.yoox.com/images/items/50/50294230PG_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "DRIES VAN NOTEN",
      "category": "Necklace",
      "discount": "39",
      "price": "499.00",
      "id": 5
    },
    {
      "img": "https://www.yoox.com/images/items/10/10029939DQ_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "ROTATE BIRGER CHRISTENSEN",
      "category": "Top",
      "discount": "34",
      "price": "239.00",
      "id": 6
    },
    {
      "img": "https://www.yoox.com/images/items/13/13911106JD_14_f.jpg?impolicy=crop&width=306&height=390",
      "brand": "NANUSHKA",
      "category": "Casual pants",
      "discount": "41",
      "price": "291.00",
      "id": 7
    },
    // {
    //   "img":"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg",
    //   "brand": "TOPSHOP",
    //   "category":"Coat",
    //   "discount":"",
    //   "price":"147.00",
    //   "id":8
    // },
    // {
    //   "img":"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg",
    //   "brand": "TOPSHOP",
    //   "category":"Coat",
    //   "discount":"",
    //   "price":"147.00",
    //   "id":9
    // },

  ]

  const box = document.getElementsByClassName("women-one-product-slider");
  console.log(box)
  const handlePrevbtn = () => {
    const width = box[0].clientWidth;
    // console.log(width)
    box[0].scrollLeft = box[0].scrollLeft - width;


  }

  const handleNextbtn = () => {
    const width = box[0].clientWidth;
    // console.log(width)
    box[0].scrollLeft = box[0].scrollLeft + width;

  }
  return (
    <div>
      <p className='women-ONE-OF-A-KIND' > ONE OF A KIND </p>
      <p className='women-view-all-heading' > VIEW ALL</p>
      <div className='women-one-product-container' >

        <button className="women-one-prev-btn" onClick={handlePrevbtn} > <p  ><HiArrowLeft /></p> </button>
        <button className="women-one-next-btn" onClick={handleNextbtn} > <p  ><HiArrowRight /></p> </button>

        <div className="women-one-product-slider">
          {
            one_in_all_data.map((item) => <CarouselCard key={item.id} img={item.img}
              brand={item.brand} category={item.category} price={item.price} />)
          }
        </div>

      </div>
    </div>
  )
}

export { WomenCarousel, OneInAllCarousel }