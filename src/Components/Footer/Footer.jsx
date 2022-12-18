import React from 'react'
import './Footer.css'
import { FiMail } from 'react-icons/fi';
import { GrFacebookOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaPinterestP } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { MdOutlineTabletAndroid } from 'react-icons/md';
import { MdPhoneAndroid } from 'react-icons/md';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-1st-con'>
        <div>
          <h4>NEW TO YOOX</h4>
          <hr />
          <p> Shopping guide</p>
          <p>iPhone/iPad/Android</p>
          <p> Browse all Designers </p>
          <p>Browse all Categories</p>
          <p> Gift delivery</p>
        </div>
        <div>
          <h3>HELP</h3>
          <hr />
          <p>Shipping times & costs</p>
          <p>Payments and web security</p>
          <p>Product quality</p>
          <p>Track your order</p>
          <p>Returns & refunds</p>
          <p>FAQs</p>
          <p>Size Guide</p>
        </div>
        <div className='footer-1st-con-mid-con'>
          <FiMail size="25px" />
          <h2>YOOX NEWS</h2>
          <p>Sign up for the newsletter
            and discover the latest arrivals and promotions</p>
          <input type="text" placeholder='insert your email address' />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <div style={{ display: 'flex' }}><input type="checkbox" /><p>Woman</p></div>
            <div style={{ display: 'flex' }}><input type="checkbox" /><p>Men</p></div>
          </div>
          <div style={{ display: 'flex', gap: "20px" }}>
            <input type="checkbox" />
            <p style={{ color: 'grey', fontSize: '12px', textAlign: 'left', lineHeight: '1.2' }}>I consent to receive YOOX newsletters via email. For further information, please consult the Privacy Policy.
            </p>
          </div>
          <button className='footer-signup'>SIGN UP</button>
        </div>
        <div>
          <h3>MYOOX</h3>
          <hr />
          <p>Home</p>
          <p>My Orders</p>
          <p>My Details</p>
          <p>Dream Box</p>
          <p>Première</p>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <hr />
          <p>Company Info</p>
          <p>Press</p>
          <p>Affiliation</p>
          <p>Careers</p>

        </div>
      </div>
      <div style={{ borderBottom: '2px solid white', marginTop: '30px' }}></div>
      <div className='footer-2nd-con'>
        <div>
          <p>CONNECT WITH US</p>
          <a href="#"><GrFacebookOption color='black' size="20px" /></a>
          <a href="#"><BsTwitter color='black' size="20px" /></a>
          <a href="#"><BsInstagram color='black' size="20px" /></a>
          <a href="#"><BsYoutube color='black' size="20px" /></a>
          <a href="#"><FaPinterestP color='black' size="20px" /></a>
          <a href="#"><FaTiktok color='black' size="20px" /></a>
        </div>
        <div>
          <a href="#"><MdOutlineTabletAndroid color='black' size="25px" /></a>
          <p>DOWNLOAD THE APP FOR iOS / ANDROID</p>
        </div>
      </div>
      <div className='footer-last-container'>
        <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</p>
        <span style={{ color: 'grey' }}>LEGAL AREA   </span><span>/</span><span style={{ color: 'grey' }}> PRIVACY POLICY</span>
      </div>
    </div>
  )
}
