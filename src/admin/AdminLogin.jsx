import React from 'react'
import '../Pages/Profile.css'
import '../Pages/Login.css'
import './AdminProfile.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { FaHeadset } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { RiBookmark3Line } from 'react-icons/ri';
import { GiThermometerScale } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'



export default function AdminLogin() {
    const [data, setData] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const GetData = () => {
        axios.get(`https://mirsat-vercel-database.vercel.app/AdimnRegisterYoox`)
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
            localStorage.setItem("AdminIsAuth", true)
            localStorage.setItem("AdminLogin", JSON.stringify(data[data.length - 1]))
            window.location.reload()
        } else {
            alert("Something Wrong")
        }
    }
    const checkIsAuth = JSON.parse(localStorage.getItem("AdminIsAuth"))

    const User = JSON.parse(localStorage.getItem("AdminLogin"))
    // console.log(User)

    const logoutFunc = () => {
        localStorage.setItem("AdminIsAuth", false)
        alert("Are You sure to logout")
        window.location.reload()
    }
    const dashboardFunc = () => {
        navigate('/adminIndex')
    }

    const registerFunc = () => {
        navigate('/adminRegister')
    }

    if (checkIsAuth === true) {
        return (
            <div className='Admin-profile-main-con' style={{ background: '#f3f3f3' }}>
                <div className='Profile-1st-con'>
                    <div>
                        <h2>ADMIN YOOX</h2>
                        <button className='dashboad-btn-admin' onClick={dashboardFunc} style={{ backgroundColor: 'orange', marginBottom: '20px' }}>Goto Dashboard</button> <br />
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
                <br />
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="login-con" style={{ backgroundColor: '#f3f3f3' }} >
                <div className='login-line-dotten'></div>
                <h3 style={{ marginBottom: '-15px', marginTop: '50px' }}>MYOOX</h3>
                <p style={{ fontWeight: 'normal', fontSize: '15px', marginBottom: '30px' }}>ADMIN LOG IN</p>
                <div className='login-main-con'>
                    <div className='login-main-con-child-1'>
                        <p>SIGN IN WITH YOUR E-MAIL ADDRESS</p>
                        <input style={{ marginBottom: '25px' }} type="text" placeholder='E-MAIL' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)} />
                        <p style={{ textAlign: 'right', fontSize: '12px', textDecoration: 'underline' }}>Forgot your password?</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>INDIA</p>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <input type="checkbox" /><p style={{ color: 'grey', fontStyle: 'italic', fontWeight: 'normal', fontSize: '13px' }}>Remember Me</p>
                            </div>
                        </div>
                        <button onClick={LoginFunc}>{checkIsAuth ? "Logout" : "LOG IN"}</button>
                    </div>
                    <div className='login-main-con-child-2'>
                        <p>OR LOG IN WITH</p>
                        <div className='log-main-child-2-box'>
                            <button style={{ backgroundColor: '#3d5a98', border: 'none' }}> <img width="30px" src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19751.png" alt="" /></button>
                            <button style={{ backgroundColor: 'white', border: '2px solid rgb(224, 221, 221)' }}><img width="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" /></button>
                        </div>
                        <p>ARE YOU NEW TO YOOX?</p>
                        <button className='log-reg-btn' onClick={registerFunc}>REGISTER NOW</button>
                    </div>
                </div>
                <p style={{ fontSize: '10px', marginBottom: '100px' }}>For more information, please consult the Privacy Policy</p>
                <div className='login-line-dotten'></div>
                <Footer />
            </div>
        )
    }

}
