import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./style.scss"
import Experience from '../../components/Experience/Experience';
import Overline from '../../components/Overline/Overline';
import OverlineTwo from '../../components/OverlineTwo/OverlineTwo';
import MostPopularAuctions from '../../components/MostPopularAuction/MostPopularAuctions';
import Number from '../../components/Number/Number';
import CorsusVitae from '../../components/CorsusVitae/CorsusVitae';
import Price from '../../components/Price/Price';
import Footer from '../../components/Footer/Footer';
import TopLower from '../../components/TopLower/TopLower';
import LatestAuctions from '../../components/LatestAuctions/LatestAuctions';



const HomePage = () => {
  return (
    <div className='home'>
        <Navbar />
        <Experience />
        <LatestAuctions />
        <Overline />
        <TopLower />
        <OverlineTwo />
        <hr />
        <MostPopularAuctions />
        <hr />
        <Number />
        <CorsusVitae />
        <Price />
        <Footer />
    </div>
  )
}

export default HomePage;
