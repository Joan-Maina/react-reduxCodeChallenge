import Carousel from './Carousel'
import React from 'react'
import Display from './Display'
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Navbar/>
            <Carousel />
            <Display />
            
        </div>
    )
}

export default Home