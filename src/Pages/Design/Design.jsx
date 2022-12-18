import React from "react";
import Design_Sliding from "./Design_Sliding";
import "./Design.css"
import Footer from "../../Components/Footer/Footer";

const Design = () => {
    return (
        <>

            <div className="designArtPage">

                {/* Design & art page Navbar */}
                <div className='top_navbar'>
                    <div className="designArtPage_navbar">
                        <a href="#" >design</a>
                        <a href="#" >art</a>
                        <a href="#" >collaborations</a>
                        <a className="designArtPage_navbar_col" href="#">GIFT GUIDE</a>
                    </div>
                </div>


                {/* Design & art page posters */}
                <div className="designArtPage__poster">

                    <div className="poster__left">
                        <img src="https://www.yoox.com/images/yoox80/banners/6769_2_Xmas_TOP1.jpg?634485886869569819#width=890&height=648" alt="Left_poster" />
                        <div className="poster_left_Heading" >
                            <h2>IN-DEMAND DESIGN</h2>
                            <p>Art and home decor that everyone desires</p>
                        </div>
                    </div>

                    <div className="poster__right">
                        <img src="https://www.yoox.com/images/yoox80/banners/6769_1_OrangeFiber_TOP2.jpg?634485886869569819#width=430&height=450" alt="right_image" />

                        <h1>8 BY ORANGE FIBER</h1>
                        <p>Innovative and responsible discover the homeware collection</p>
                    </div>
                </div>


                {/* Crazy mood page */}
                <div className="designArtPage__crazyMood">
                    <img src="https://www.yoox.com/images/yoox80/banners/6769_27_Living_Middle.jpg?634485886869569819#width=897&height=615" alt="Crazy__mood" />

                    <h1>SOCIAL LOOK</h1>
                    <p>The new photoshoot by Living Corriere</p>
                </div>


                {/* three image div */}
                <div className="designArtPage__threeImageDiv">

                    <div className="twoImage_div">
                        <div className="firstSecondImage">
                            <img src="https://www.yoox.com/images/yoox80/banners/6769_1_ArtyStuff_Compo01.jpg?634485886869569819#width=542&height=542" alt="firstImage" />

                            <h1>AMAZING ART</h1>
                            <p>Must-have pieces to add to your collection</p>
                        </div>

                        <div className="firstSecondImage">
                            <img src="https://www.yoox.com/images/yoox80/banners/6769_1_3p_Compo2.jpg?634485886869569819#width=542&height=542" alt="second_image" />

                            <h1>MADE TO LAST</h1>
                            <p>Durable design objecys</p>
                        </div>
                    </div>

                    <div className="singleImageDiv">
                        <img src="https://www.yoox.com/images/yoox80/banners/6769_1_ABCodCollecting_Compo3.jpg?634485886869569819#width=780&height=999" alt="Single_image" />

                        <h1>ARE YOU A BUDDING COLLECTOR?</h1>
                        <p>Start your own personal collection here!</p>
                    </div>
                </div>

                {/* top picks */}

                <Design_Sliding/>
               

                {/* design art page bottom */}
                <div className="designArtPage__bottom">
                    <img src="https://www.yoox.com/images/yoox80/banners/6769_2_DesignArt_BOTTOM.jpg?634485886869569819#width=2695&height=639" alt="Bottom_image" />
                    <div className="designArtPage__bottom_Heading">
                        <h2>HOME DECOR+ART</h2>
                        <p>Protagonists, stories, collaborations, projects.</p>
                        <a href="#" >SEE ALL</a>
                    </div>
                </div>


            </div>
            <hr style={{ marginBottom:"60px"}} />
            <Footer  /> 
        </>
    )
}

export default Design;