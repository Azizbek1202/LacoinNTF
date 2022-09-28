import React from 'react';
import "./style.scss";
import new1 from "../../Assets/images/new.png"
import frame from "../../Assets/images/Frame.png"
import image1 from "../../Assets/images/Image1.png"
import image2 from "../../Assets/images/Image2.png"
import image3 from "../../Assets/images/Image3.png"
import image4 from "../../Assets/images/Image4.png"
import image5 from "../../Assets/images/Image5.png"
import image6 from "../../Assets/images/Image6.png"
import ritter from "../../Assets/images/ritter.png"
import nike from "../../Assets/images/nike.png"
import adidas from "../../Assets/images/adidas.png"
import newholland from "../../Assets/images/newholland.png"
import search from "../../Assets/images/Searchicon.png"
const Experience = () => {
  return (
    <div className="experience">
         <p>NON FUNGIBLE TOKENS</p>
         <div className="new">
         <h1>A new NFT</h1>
         <img src={new1} alt="" />
         </div>
         <div className="new1">
         <img src={frame} alt="" />
         <h1>Experience</h1>
         </div>
         <p>Discover, collect and sell</p>
<div className="input">
<input type="text" placeholder="Items,  collections  and  creators    | Category"/>
<img src={search} alt="" />
</div>
<div className="imgs">
  <div className="img1">
    <img src={image1} alt="" />
    <p>2.55 ETH</p>
  </div>
  <div className="img2">
    <img src={image2} alt="" />
    <p>2.55 ETH</p>
  </div>
  <div className="img3">
    <img src={image3} alt="" />
    <p>2.55 ETH</p>
  </div>
  <div className="img4">
    <img src={image4} alt="" />
    <p>2.55 ETH</p>
  </div>
  <div className="img5">
    <img src={image5} alt="" />
    <p>2.55 ETH</p>
  </div>
  <div className="img6">
    <img src={image6} alt="" />
    <p>5 ETH</p>
  </div>
</div>
<div className="brands">
        <img src={ritter} alt="" />
        <img src={nike} alt="" />
        <img src={adidas} alt="" />
        <img src={newholland} alt="" />
</div>
    </div>
  )
}

export default Experience;