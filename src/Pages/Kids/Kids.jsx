import React from 'react'
import "./Kids.css"
import {GirlsCarousel,BoysCarousel} from './Girls_Boy_Carousel'
import Footer from '../../Components/Footer/Footer'



export default function Kids() {
    return (
        <>
            <div className="kidsPage" >


                {/* Kids page Navbar */}
                <div className='top_navbar'>
                    <div className="kidsPage_navbar">
                        <a href="#">0-24 months</a>
                        <a href="#">3-8 years</a>
                        <a href="#">9-16 years</a>
                        <a href="#">collaborations</a>
                        <a className="kidsPage_navbar_col" href="#">GIFT GUIDE</a>
                    </div>
                </div>


                {/* Top Banner */}

                <div className='bannerKids_Top' >
                    <img src="https://www.yoox.com/images/yoox80/banners/6821_2_Christmas_Main_K.jpg?634485886869569819&impolicy=cropDefault&width=100%" alt="topBanner" />
                    <div className="banner_Kids_Top" >
                        <h2>THE GRAND & MARVELOUS HOLIDAY FAIR</h2>
                        <p>Fun finds for the little ones</p>
                        <div className="bannerTop_Kids_link">
                            <a href="#">SHOP GIRLS</a>
                            <a href="#">SHOP BOYS</a>

                        </div>
                    </div>
                </div>



                {/* Sliding Girls*/}

                    <GirlsCarousel/>

                {/* Sliding Boys*/}

                    <BoysCarousel/>
              

                {/* Designers */}

                <div className="kidsPage__designer">

                    <div className="designer">
                        <h1>designers</h1>
                        <div className="girlsBoys">
                            <a href="#">GIRLS</a>
                            <h6>|</h6>
                            <a href="#">BOYS</a>
                        </div>
                    </div>

                    <div className="kidSizeDiv">

                        <div className="babySizeCloth">
                            <h1>baby 0-24 months</h1>

                            <p>DOLCE & GABBANA</p>
                            <p>FENDI</p>
                            <p>IL GUFO</p>
                            <p>BURBERRY</p>
                            <p>DSQUARED2</p>
                            <p>MARNI</p>
                            <p>KENZO</p>
                            <p>ROBERTO CAVALLI</p>
                            <p>MONCLER</p>
                            <p>SIMONETTA</p>

                            <h4>view all</h4>
                        </div>

                        <div className="babySizeCloth">
                            <h1>kids 3-8 years</h1>

                            <p>DOLCE & GABBANA</p>
                            <p>RALPH LAUREN</p>
                            <p>MSGM</p>
                            <p>BURBERRY</p>
                            <p>IL GUFO</p>
                            <p>MARNI</p>
                            <p>KARL LAGERFELD</p>
                            <p>ROBERTO CAVALLI</p>
                            <p>MONCLER</p>
                            <p>FENDI</p>

                            <h4>view all</h4>
                        </div>

                        <div className="babySizeCloth">
                            <h1>junior 9-16 years</h1>

                            <p>DOLCE & GABBANA</p>
                            <p>MARNI</p>
                            <p>KARL LAGERFELD</p>
                            <p>RALPH LAUREN</p>
                            <p>BURBERRY</p>
                            <p>DSQUARED2</p>
                            <p>KENZO</p>
                            <p>GOLDEN GOOSE DELUXE BRAND</p>
                            <p>MOSCHINO</p>
                            <p>MONCLER</p>

                            <h4>view all</h4>
                        </div>

                    </div>
                </div>

                {/* kidsPage popular brand part */}

                <div className='kidsPage_popularBrand'>
                    <div className="popularBrand__leftRight">
                        <img src="https://www.yoox.com/images/yoox80/banners/6821_1_TOYS_Tris_K.jpg?634485886869569819#width=473&height=660" alt="Left_image" />

                        <h1>LIVING IN DREAMLAND</h1>
                        <p>Homewear & Toys</p>

                        <div className='twoSubDiv'>
                            <a href="#">SHOP GIRLS</a>
                            <a href="#">SHOP BOYS</a>
                        </div>
                    </div>

                    <div className="popularBrand__center">
                        <img src="https://www.yoox.com/images/yoox80/banners/6821_1_Newborn_Tris_K.png?634485886869569819#width=387&height=540" alt="Center_image" />

                        <h1>SOFT & FUZZY</h1>
                        <p>Comfort is key</p>

                        <div className='twoSubDiv'>
                            <a href="#">SHOP GIRLS</a>
                            <a href="#">SHOP BOYS</a>
                        </div>
                    </div>

                    <div className="popularBrand__leftRight">
                        <img src="https://www.yoox.com/images/yoox80/banners/6821_1_Adidas_Tris_K.jpg?634485886869569819#width=387&height=540" alt="Right_image" />

                        <h1>ADIDAS</h1>
                        <p>The perfect present awaits</p>

                        <div className='twoSubDiv'>
                            <a href="#">SHOP GIRLS</a>
                            <a href="#">SHOP BOYS</a>
                        </div>
                    </div>
                </div>

                {/* Last Banner */}

                <div className='bannerKids_Last' >
                    <img src="https://www.yoox.com/images/yoox80/banners/6821_1_Alpine_Bottom_K.jpg?634485886869569819&impolicy=cropDefault&width=98%" alt="lastBanner" />
                    <div className="banner_Kids_Last" >
                        <h2>SNOWY ADVENTURES</h2>
                        <p>Cold-proof pieces for the streets to the slopes</p>
                        <div className="bannerLast_Kids_link">
                            <a href="#">SHOP GIRLS</a>
                            <a href="#">SHOP BOYS</a>

                        </div>
                    </div>
                </div>


            </div>
            <hr style={{ marginTop:"100px", marginBottom:"60px"}} />
            <Footer  /> 
        </>
    )
}
