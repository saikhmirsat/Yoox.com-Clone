import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Navbar2 from './Components/Navbar/Navbar2'
import Allroutes from './Routes/Allroutes'


export default function Home() {
    return (
        <div>
            <Navbar />
            <Navbar2 />
            <Allroutes />
        </div>
    )
}
