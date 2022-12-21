import React from 'react'
import WomenNavbar from './WomenNavbar'
import "./women.css"
import { WomenCarousel, OneInAllCarousel } from './WomenCarousel'
import { CarouselCard } from './CarouselCard'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import ImagePlusSlider from './Image-plus-slider'
import Footer from '../../Components/Footer/Footer'


export default function Women() {


  return (
    <div className='women-main-full-container' style={{ backgroundColor: "#f3f3f3" }} >
      <WomenNavbar />


      <div className='first-container' >
        <img src="https://www.yoox.com/images/yoox80/banners/6895_1_Genz_WM_Main.png" width="1340px" height="640px" alt="" />
        <div className='here-comes-night' >
          <h2>HERE COMES THE NIGHT</h2>
          <p>Rock-inspired leather looks and daring details</p>
          <div>
            <span>GET THE LOOK</span>
            <span className='discover' >DISCOVER MORE</span>

          </div>
          <br />
        </div>
      </div>

      <div className='designers-container' >
        <div className="designer-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6824_3_WinterChecklist_HL_W.jpg?634485886601286852#width=430&height=600" alt="" />
          <div className='designer-item-div' >
            <h2>IT'S COLD OUTSIDE</h2>
            <p>Everything you need to stay warm this winter</p>
            <div>
              <span>SHOP NOW </span>


            </div>
            <br />
          </div>
        </div>
        <div className="designers-list">
          <h4>DESIGNERS</h4>
          <div>
            <p>DOLCE & GABBANA</p>
            <p>ROBERTO CAVALp</p>
            <p>DSQUARED2</p>
            <p>MARNI</p>
            <p>CHLOE</p>
            <p>MAISON MARGIELA</p>
            <p>STELLA MCCARTNEY</p>
            <p>BALENCIAGA</p>
            <p>GUCCI</p>
            <p>PRADA</p>
          </div>
          <p className='view_all'  > View All </p>
        </div>
        <div className="designer-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6824_1_XmasGift_W_MainMob.jpg?634485886601286852#width=430&height=600" alt="" />
          <div className='designer-item-div' >
            <h2>WOW AT FIRST SIGHT</h2>
            <p>Special gifts that will leave them speechless</p>
            <div>
              <span>SHOP THE MAGIC </span>
              <span className='discover' >DISCOVER MORE</span>

            </div>
            <br />
          </div>
        </div>
      </div>


      <WomenCarousel />


      <div className="brands-container">
        <div className="brands-container-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6825_5_BaumeMercier_Tris_W.png  " alt="" />
          <h2>BAUME & MERCIER</h2>
          <p>The New Riviera Collection</p>
        </div>
        <div id='brands-container-item' className="brands-container-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6825_1_Boss_W_Tris.jpg" alt="" />
          <h2>BOSS</h2>
          <p>Be your own BOSS</p>
        </div>
        <div className="brands-container-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg" alt="" />
          <h2>MONTBLANC</h2>
          <p>The New Gift Generation</p>
        </div>
      </div>


      <OneInAllCarousel />

      <ImagePlusSlider />

      <div className='last-div'>
        <img src="https://www.yoox.com/images/yoox80/banners/6824_1_XmasGift_WM_Bottom.jpg" width="1350px" alt="" />
        <div className='last-div-item' >
          <h2>WOW AT FIRST SIGHT</h2>
          <p>Special gifts that will leave them speechless</p>
          <div>
            <span>SHOP THE MAGIC </span>
            <span className='discover-more' >DISCOVER MORE</span>

          </div>
          <br />
        </div>
      </div>



      <hr style={{ marginBottom: "60px" }} />
      <Footer />
    </div>

  )
}
