import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection'


function Home ({setSelectedItem}) {
    return (
        <>
            <HeroSection setSelectedItem={setSelectedItem} />
            <Cards  setSelectedItem={setSelectedItem}/>
        </>
    )
}


export default Home