import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Search.css'


export default function Search() {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://mirsat-vercel-database.vercel.app/yooxData/?q=${text}`)
            .then((res) => setData(res.data))
    }, [text])

    return (
        <div>
            <input className='searchbox' placeholder='Search Products' type="text" onChange={(e) => setText(e.target.value)} />
            {
                text == "" ? "" : <div className='search-card-div'>
                    {
                        data.map((ele) =>
                            <Link to={`/womenItem/${ele.id}`} key={ele.id} className='search-card-main'>
                                <img src={ele.image_1} alt="" />
                                <h5>{ele.title}</h5>
                                <p>{ele.type}</p>
                                <h5>${ele.price}</h5>
                                <p>{ele.size}</p>
                            </Link>
                        )
                    }
                </div>
            }
        </div>
    )
}
