import React from 'react'
import './Navbar.css'
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom'
import { TiHeartOutline } from 'react-icons/ti';
import { FaSearch } from 'react-icons/fa';
import { BsFillHandbagFill } from 'react-icons/bs';

export default function Navbar2() {
    const [cart, setCart] = useState([]);
    console.log(cart.length)

    const getData = () => {
        axios
            .get(`https://product-list-api.onrender.com/cart`)
            .then((res) => setCart(res.data));

    }

    useEffect(() => {
        getData()
    }, []);


    return (
        // 
        <div>
            <div className='navbar-2'>

                <div className='navbar-2-1st-div'>
                    <Link to="/"><h3>WOMEN</h3></Link>
                    <Link to="/men"><h3>MEN</h3></Link>
                    <Link to="/kids"><h3>KIDS</h3></Link><span>/</span>
                    <Link to="/design"><h3>DESIGN+ART</h3></Link>
                </div>
                <div className='logo-div'>
                    <Link to="/"><img src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" alt="" /></Link>
                </div>
                <div className='navbar-2-3rd-div'>
                    <Link to="search"><FaSearch size="20px" color='black' /></Link>
                    <Link to="/wishlist"><TiHeartOutline color='black' size="25px" /></Link>
                    <Link to="/cart"><BsFillHandbagFill color='black' size="20px" /></Link>
                    <div className='cart-value'>{cart.length}</div>
                </div>
            </div>
        </div>
    )
}
