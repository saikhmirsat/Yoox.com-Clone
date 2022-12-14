import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'

const WomenCarousel = () => {

    const new_arrivals_data = [
        {
          "img": "https://www.yoox.com/images/items/14/14295830IB_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "STELLA McCARTNEY",
          "category":"Sweater",
          "discount":"34",
          "price":"671.00"
    
        },
        {
          "img": "https://www.yoox.com/images/items/50/50294257EM_14_f.jpg?impolicy=crop&width=306&height=390" ,
          "brand": "APM Monaco",
          "category":"Earrings",
          "discount":"",
          "price":"139.00"
        },
        {
          "img": "https://www.yoox.com/images/items/13/13909917KN_14_f.jpg?impolicy=crop&width=306&height=390" ,
          "brand": "MSGM",
          "category":"Casual pants",
          "discount":"27",
          "price":"282.00"
        },
        {
          "img":"https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390" ,
          "brand": "MARNI",
          "category":"Cross body bags",
          "discount":"",
          "price":"1,936.00"
        },
        {
          "img": "https://www.yoox.com/images/items/16/16199356WX_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "MINIMUM",
          "category":"Coat",
          "discount":"",
          "price":"326.00"
        },
        {
          "img":"https://www.yoox.com/images/items/14/14293562JI_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "GANNI",
          "category":"Cardigan",
          "discount":"31",
          "price":"230.00"
        },
        {
          "img":"https://www.yoox.com/images/items/45/45721715SC_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "ARKET",
          "category":"Handbag",
          "discount":"",
          "price":"112.00"
        },
        {
          "img":"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "TOPSHOP",
          "category":"Coat",
          "discount":"",
          "price":"147.00"
        },
        {
          "img":"https://www.yoox.com/images/items/16/16200872MJ_14_f.jpg?impolicy=crop&width=306&height=390",
          "brand": "TOPSHOP",
          "category":"Coat",
          "discount":"",
          "price":"147.00"
        },
        
      ]

  return (
    <CCarousel style={{backgroundColor:"black"}} controls>
        <CCarouselItem style={{width:"100px"}} >
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/50/50294257EM_14_f.jpg" width="100px" alt="slide 1" />
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/50/50294257EM_14_f.jpg" width="100px" alt="slide 1" />
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/50/50294257EM_14_f.jpg" width="100px" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem style={{width:"100px"}}>
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/13/13909917KN_14_f.jpg" width="100px" alt="slide 2" />
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/13/13909917KN_14_f.jpg" width="100px" alt="slide 2" />
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/13/13909917KN_14_f.jpg" width="100px" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem style={{width:"100px"}}>
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/45/45717732NW_14_f.jpg" width="100px" alt="slide 3" />
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/45/45717732NW_14_f.jpg" width="100px" alt="slide 3" />
            <CImage className="d-block w-100" src="https://www.yoox.com/images/items/45/45717732NW_14_f.jpg" width="100px" alt="slide 3" />
        </CCarouselItem>
    </CCarousel>
  )
}

export default WomenCarousel