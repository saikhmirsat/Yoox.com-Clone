import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillUnlock } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';



export default function Navbar() {
    const checkIsAuth = JSON.parse(localStorage.getItem("isAuth"))
    const checkAdminIsAuth = JSON.parse(localStorage.getItem("AdminLogin"))
    return (
        <div className='navbar'>
            <div className='navbar-1'>
                <div className='navbar-1-divs'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p className='ind-cu-un'>INDIA</p><span><MdArrowDropDown size="20px" /></span></div>
                    <p className='ind-cu-un'>CUSTOMER CARE</p>
                </div>
                <div className='navbar-1-divs'>
                    <p>WANT TO RECEIVE YOUR GIFTS IN TIME?  |</p><p>DISCOVER MORE</p>
                </div>
                <div className='navbar-1-divs'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>{checkIsAuth ? "" : <BsFillPencilFill />}<Link to="/register">{checkIsAuth ? "" : "Register"}</Link></div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>{checkIsAuth ? <BsFillPersonFill /> : <AiFillUnlock />} <Link to="/login">{checkIsAuth ? "MYOOX" : "LOGIN"}</Link></div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}> <RiAdminFill /><Link to={checkAdminIsAuth ? "/adminLogin" : "/adminRegister"}>{checkAdminIsAuth ? "YOOXADMIN" : "ADMIN"}</Link></div>
                </div>
            </div>
            <div className='nav-line'></div>
        </div >
    )
}
