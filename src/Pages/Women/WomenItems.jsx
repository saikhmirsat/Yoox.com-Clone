import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './WomenItem.css'
import Footer from '../../Components/Footer/Footer'
// import Footer from '.../'

export default function WomenItems() {
    const [data, setData] = useState([])
    const [fromPrice, setFromPrice] = useState('')
    const [toPrice, setToPrice] = useState('')
    const [size,setSize] = useState(0)
    const navigate = useNavigate()
    const [notFound, setNotFount] = useState(false)

   
    const GetData = () => {
        axios.get(`https://mirsat-vercel-database.vercel.app/yooxData`)
            .then((res) => setData(res.data))
    }
    useEffect(() => {
        GetData()
    }, [])

   
    

    const handlePriceApply = () =>{
        let filterdData = data.filter(item => (item.price>=Number(fromPrice) && item.price <= Number(toPrice)) );
        if(filterdData.length == 0){
            setNotFount(true)
        }
        else{
            setData(filterdData)
        }
        
    }

    const handleSizeApply = () =>{
        let filterdData = data.filter(item => item.size == Number(size))
        if(filterdData.length == 0){
            setNotFount(true)
        }
        else{
            setData(filterdData)
        }
        // setData(filterdData)
    }

    const handleColor = ({id,color}) =>{

        let i = document.getElementById(id);
            if(i.checked == true){
                
                    let filterdData = data.filter(item => item.color == color)
                    if(filterdData.length == 0){
                        setNotFount(true)
                    }
                    else{
                        setData(filterdData)
                    }
                    
                    // setData(filterdData)
                
            }
            
            

    }
    
    const resultArr = data.filter((ele) => {
        return ele.for_whom == 'women'
    })
    
    return (
        <div className='women-head-container'>
            <div className='womenItme-main-con'>
            <div className='womenItem-main-con-1st-div'>
                <h1>Filter</h1>
                <hr />
                <div className="price-filter">
                    <h3>PRICE RANGE</h3>
                    <input type="text" placeholder='from...' onChange={e => setFromPrice(e.target.value)} />
                    <input type="text" placeholder='to...' onChange={e => setToPrice(e.target.value)} />
                    
                    <button onClick={handlePriceApply} > Apply </button>
                </div>
                <hr />
                <div className="size-filter">
                    <h3>SIZES</h3>
                    <input type="text" placeholder='Size...' onChange={e => setSize(e.target.value)}  />
                    <button onClick={handleSizeApply} >Apply</button>
                </div>
                <hr />
                <div className='color-filter' >
                    <h3>COLORS</h3>
                    <input id='pink-input'  type="checkbox" name='pink' onClick={() => handleColor({id:"pink-input",color:"pink"})} />
                     <label htmlFor="">Pink</label>
                    <input id='black-input' type="checkbox" name='black'  onClick={() => handleColor({id:"black-input",color:"black"})}  /> 
                    <label htmlFor="">Black</label>
                    <input type="checkbox" id='gold-input' name='gold' onClick={() => handleColor({id:"gold-input",color:"gold"})} /> 
                    <label htmlFor="">Gold</label>
                    
                </div>
            </div>
            <div className='womenItem-main-con-2nd-div'>
                {
                    notFound? <img src="https://media.tenor.com/unvXyxtdn3oAAAAC/no-result.gif" alt="" />:resultArr.map((ele) => 
                    <Link to={`/womenItem/${ele.id}`} key={ele.id} className='card-main'>
                        <img src={ele.image_1} alt="" />
                        <h5>{ele.title}</h5>
                        <p>{ele.type}</p>
                        <h5> Price: ${ele.price}</h5>
                        <p> Size: {ele.size}</p>
                    </Link>
                )
                }
            </div>
            
            
            
        </div>
        <hr style={{marginTop:"60px",marginBottom:"60px"}} />
            <Footer  /> 
        </div>
    )
}



// size
// price


