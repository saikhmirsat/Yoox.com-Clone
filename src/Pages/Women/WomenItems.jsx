import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './WomenItem.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function WomenItems() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    console.log(data)
    const GetData = () => {
        axios.get(`https://mirsat-vercel-database.vercel.app/yooxData`)
            .then((res) => setData(res.data))
    }
    useEffect(() => {
        GetData()
    }, [])

    const resultArr = data.filter((ele) => {
        return ele.for_whom == 'women'
    })

    console.log(resultArr)

    return (
        <div className='womenItme-main-con'>
            <div className='womenItem-main-con-1st-div'>
                <h1>filter</h1>
            </div>
            <div className='womenItem-main-con-2nd-div'>
                {
                    data.map((ele) =>
                        <Link to={`/womenItem/${ele.id}`} key={ele.id} className='card-main'>
                            <img src={ele.image_1} alt="" />
                            <h5>{ele.title}</h5>
                            <p>{ele.type}</p>
                            <h5>${ele.price}</h5>
                            <p>{ele.size}</p>
                        </Link>
                    )
                }
            </div>

        </div>
    )
}
