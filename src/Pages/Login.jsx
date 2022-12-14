import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './Profile.css'
import { FaHeadset } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { RiBookmark3Line } from 'react-icons/ri';
import { GiThermometerScale } from 'react-icons/gi';



export default function Login() {
  const [data, setData] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  const GetData = () => {
    axios.get(`https://mirsat-vercel-database.vercel.app/RegisterYoox`)
      .then((res) => setData(res.data))
  }
  useEffect(() => {
    GetData()
  }, [])



  let x = false
  const LoginFunc = () => {
    data.map((ele) => {
      if (ele.email === email && ele.password === password) {
        x = true;
      }
    })
    if (x) {
      alert("Login Success")
      localStorage.setItem("isAuth", true)
      localStorage.setItem("userLogin", JSON.stringify(data[data.length - 1]))
      window.location.reload()
    } else {
      alert("Something Wrong")
    }
  }
  const checkIsAuth = JSON.parse(localStorage.getItem("isAuth"))

  const User = JSON.parse(localStorage.getItem("userLogin"))
  // console.log(User)

  const logoutFunc = () => {
    localStorage.setItem("isAuth", false)
    alert("Are You sure to logout")
    window.location.reload()
  }



  if (checkIsAuth === true) {
    return (
      <div style={{ background: '#f3f3f3' }}>
        <div className='Profile-1st-con'>
          <div>
            <h2>MYOOX</h2>
            <button onClick={logoutFunc}>Logout</button>
            <p>This area of YOOX is designed exclusively for you</p>
          </div>
        </div>
        <div className='Profile-2nd-con'>
          <div>
            <div>
              <h1>HELLO {User.firstName.toUpperCase()}</h1>
              <p>You've been with us since December 2022</p>
            </div>
          </div>
          <div>
            <div>
              <FaHeadset size="35px" />
              <h4>Can we help you?</h4>
              <p>Please consult the Customer Care area for quick and easy help</p>
              <p style={{ fontSize: '14px', fontWeight: 'bold', textDecoration: 'underline' }}>GO TO CUSTOMER CARE</p>
            </div>
          </div>
        </div>
        <div className='Profile-3rd-con'>
          <div>
            <a href="">
              <BiShoppingBag size="50px" color='black' />
              <h3>MY ORDER</h3>
              <p>Track your orders and exchange or return items that weren’t right for you.</p>
            </a>
            <div className='Profile-3rd-container-child-2'>
              <p>At the moment there aren’t any orders. Get inspired by our selections!</p>
              <button>START SHOPING</button>
            </div>
          </div>
          <div>
            <a href="">
              <HiOutlineHeart size="50px" color='black' />
              <h3>DREAM BOX</h3>
              <p>Keep an eye on the items that you love the most, and don't miss out on your last chance to buy them</p>
            </a>
            <div className='Profile-3rd-container-child-2'>
              <p>Your Dream Box is empty. Let's change that right away by clicking on the heart icon to save your favorite items!</p>
              <button>START DREAMING</button>
            </div>
          </div>
        </div>
        <div className='Profile-4th-con'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div >
              <BsPerson size="60px" />
              <h3>MY DETAILS</h3>
              <p>Edit your registration, shipping and payment details</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div >
              <RiBookmark3Line size="60px" />
              <h3>PREMIÈRE</h3>
              <p>See your saved searches and discover what's new for you</p>
            </div>
          </div>
          <div>
            <img src="https://www.yoox.com/images/yoox80/banners/6736_2_HOME_2_W.jpg?634485886601286852" alt="" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div >
              <GiThermometerScale size="60px" />
              <h3>MY SIZES</h3>
              <p>Save your size and your friends’ sizes to find the perfect items</p>
            </div>
          </div>
          <div>
            <img src="https://www.yoox.com/images/yoox80/banners/6736_2_HOME_2_M.jpg?634485886601286852" alt="" />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>Login
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={LoginFunc}>{checkIsAuth ? "Logout" : "Login"}</button>
      </div>
    )
  }

}
