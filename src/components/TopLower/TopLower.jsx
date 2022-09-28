import React from 'react'
import "./style.scss"
import oclock from "../../Assets/images/oclock.png"
import low1 from "../../Assets/images/Low.png"
import low2 from "../../Assets/images/low2.png"
import low3 from "../../Assets/images/low3.png"
import low4 from "../../Assets/images/low4.png"
import low5 from "../../Assets/images/low5.png"
import low6 from "../../Assets/images/low6.png"
import yurek from "../../Assets/images/yurak.png"
import carvek from "../../Assets/images/vek.png"
import hand from "../../Assets/images/hand.png"
import { Button } from '../Button/Button'

const TopLower = () => {
    return (
        <div className="topLower">
            <div className="step1"> 
               <h5>Check out the hottest Sale offers</h5>
             <div className="divs">
             <div className="card">

<img src={low1} alt="" />
<h6>Faucibus habitasse at et platea massa mauris</h6>
<div className="oclo">
    <img src={oclock} alt="" />
    <p>22:59</p>
    <div className="bac">
    2.55 ETH
    </div>
</div>
<hr />
<div className="info">
    <p>101 people are bidding</p>
    <img src={yurek} alt="" />
</div>
</div>
<div className="card2">

<img src={low2} alt="" />
<h6>Fames habitasse ris ultricies tortor sit</h6>
<div className="oclo">
    <img src={oclock} alt="" />
    <p>22:59</p>
    <div className="bac" style={{width: '10'}}>
    2.55
    </div>
</div>
<hr />
<div className="info">
    <p>101 people are bidding</p>
    {/* <img src={yurek} alt="" /> */}
</div>
    <div className="icon">
        <img src={carvek} alt="" />
    </div>
</div>
             </div>
             <Button onClick={()=>{console.log("hi"); }}
              type="button"
              buttonStyle="btn--One--outline"
              buttonSize="btn--medium">
                Show me more
              </Button>
            </div>
            <div className="step2">
                <img src={hand} alt="" /> 
                <h6>Get started creating selling your NFTs</h6>
                <p>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
                <Button onClick={()=>{console.log("hi"); }}
              type="button"
              buttonStyle="btn--One--outline"
              buttonSize="btn--medium">
                Show me more
              </Button>
            </div>
            <div className="step3"> 
                 <h5>Top NFT at a lower price</h5>
                 <div className="cards">
                 <div className="card">

<img src={low3} alt="" />
<div className="title">
<h6>Faucibus habitasse at et platea massa mauris</h6>
<div className="oclo">
    <img src={oclock} alt="" />
    <p>22:59</p>
    <div className="bac">
    2.55 ETH
    </div>
</div>
<div className="info">
    <p>101 people are bidding</p>
    <img src={yurek} alt="" />
</div>
</div>
                 </div>
                 <div className="card">

<img src={low4} alt="" />
<div className="title">
<h6>Egestas blandit sit egestas non sed. Purus semper</h6>
<div className="oclo">
    <img src={oclock} alt="" />
    <p>22:59</p>
    <div className="bac">
    2.55 ETH
    </div>
</div>
<div className="info">
    <p>101 people are bidding</p>
    <img src={yurek} alt="" />
</div>
</div>
                 </div>
                 <div className="card">

<img src={low5} alt="" />
<div className="title">
<h6>Id ut consequat netus nec vel amet ut porta in augue</h6>
<div className="oclo">
    <img src={oclock} alt="" />
    <p>22:59</p>
    <div className="bac">
    2.55 ETH
    </div>
</div>
<div className="info">
    <p>101 people are bidding</p>
    <img src={yurek} alt="" />
</div>
</div>
                 </div>
                 <div className="card">

<img src={low6} alt="" />
<div className="title">
<h6>Sed et nibh felis integer tellus turpin</h6>
<div className="oclo">
    <img src={oclock} alt="" />
    <p>22:59</p>
    <div className="bac">
    2.55 ETH
    </div>
</div>
<div className="info">
    <p>101 people are bidding</p>
    <img src={yurek} alt="" />
</div>
</div>
                 </div>
                 <Button onClick={()=>{console.log("hi"); }}
              type="button"
              buttonStyle="btn--One--outline"
              buttonSize="btn--medium">
                Show me more
              </Button>
                 </div>
            </div>
        </div>
    )
}

export default TopLower
