import React from 'react'
import "./Kids.css"

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
              </div>
          </div>

          
          {/* Top Banner */}

          <div className="bannerKidsTop">
              {/* <div className="bannerKids_box" >
                  <div className="bannerKids_title"  >
                      <h1>THE GRAND & MARVELOUS HOLIDAY FAIR</h1>
                      <p>Fun finds for the little ones</p>
                      <div className="bannerKids_link" >
                          <a href="#">SHOP GIRLS</a>
                          <a href="#">SHOP BOYS</a>
                      </div>
                  </div>
              </div> */}
          </div>
          


          {/* Sliding Girls*/}


          {/* Sliding Boys*/}



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
      
  
    </div>
  </>
  )
}
