import React from 'react'
import "./style.scss"
import lat1 from "../../Assets/images/lat.png"
import lat2 from "../../Assets/images/lat1.png"
import lat3 from "../../Assets/images/lat3.png"
import lat4 from "../../Assets/images/lat4.png"
import lat5 from "../../Assets/images/lat5.png"
import oclock from "../../Assets/images/oclock.png"
import yurek from "../../Assets/images/yurak.png"
import coment1 from "../../Assets/images/coment1.png"
import coment2 from "../../Assets/images/coment2.png"
import coment3 from "../../Assets/images/coment3.png"
import coment4 from "../../Assets/images/coment4.png"
import coment5 from "../../Assets/images/coment5.png"
import coment6 from "../../Assets/images/coment6.png"
import coment7 from "../../Assets/images/coment7.png"
import coment8 from "../../Assets/images/coment8.png"
import coment9 from "../../Assets/images/coment9.png"
import coment10 from "../../Assets/images/coment10.png"
import coment11 from "../../Assets/images/coment11.png"
import coment12 from "../../Assets/images/coment12.png"
import coment13 from "../../Assets/images/coment13.png"
import coment14 from "../../Assets/images/coment14.png"
import coment15 from "../../Assets/images/coment15.png"
import carvek from "../../Assets/images/vek.png"



const LatestAuctions = () => {
    return (
        <div className="latestAuctions">
            <div className="cards">
            <div className="card">
                <img src={lat2} alt="" />
                <div className="body">
                <h6> enim,a etiam</h6>
                <div className="bac">
                2.55 ETH 
                    </div>
                </div>
                <div className="oclo">
                    <img src={oclock} alt="" />
                    <p>22:59 min left</p>
                </div>
                <hr />
                <div className="info">
                    <p>ple are bidding</p>
                    <img src={yurek} alt="" />54
                </div>
            </div>
            <div className="card">
                <img src={lat1} alt="" />
                <div className="body">
                <h6>Diam purus sagittis nisl erat mauris</h6>
                <div className="bac">
                3.19 ETH
                    </div>
                </div>
                <div className="oclo">
                    <img src={oclock} alt="" />
                    <p>2:41 min left</p>
                </div>
                <hr />
                <div className="info">
                    <div className="imgin">
                        <img src={coment1} alt="" />
                        <img src={coment2} alt="" />
                        <img src={coment3} alt="" />
                        <img src={coment4} alt="" />
                    </div>
                    <p>37 people are bidding</p>
                    <img src={yurek} alt="" />120
                </div>
            </div>
            <div className="card">
                <img src={lat3} alt="" />
                <div className="body">
                <h6>Dui accumsan leo vestibulum ornare eu</h6>
                <div className="bac">
                1.11 ETH
                    </div>
                </div>
                <div className="oclo">
                    <img src={oclock} alt="" />
                    <p>22:59 min left</p>
                </div>
                <hr />
                <div className="info">
                    <div className="imgin">
                        <img src={coment5} alt="" />
                        <img src={coment6} alt="" />
                        <img src={coment7} alt="" />
                        <img src={coment8} alt="" />
                    </div>
                    <p>101 people are bidding</p>
                    <img src={yurek} alt="" />570
                </div>
            </div>
            <div className="card">
                <img src={lat4} alt="" />
                <div className="body">
                <h6>Senectus adipiscing  accumsan etiam</h6>
                <div className="bac">
                1.63 ETH
                    </div>
                </div>
                <div className="oclo">
                    <img src={oclock} alt="" />
                    <p>37:01 min left</p>
                </div>
                <hr />
                <div className="info">
                    <div className="imgin">
                        <img src={coment9} alt="" />
                        <img src={coment10} alt="" />
                        <img src={coment11} alt="" />
                    </div>
                    <p>12 people are bidding</p>
                    <img src={yurek} alt="" />98
                </div>
            </div>
            <div className="card">
                <img src={lat5} alt="" />
                <div className="body">
                <h6>Mattis at diam lorem nisl nam sed sociis</h6>
                </div>
                <div className="oclo">
                    <img src={oclock} alt="" />
                    <p>12:15 min left</p>
                </div>
                <hr />
                <div className="info">
                    <div className="imgin">
                        <img src={coment12} alt="" />
                        <img src={coment13} alt="" />
                        <img src={coment14} alt="" />
                        <img src={coment15} alt="" />
                    </div>
                    <p>19 people </p>
                    
                </div>
            </div>
            <div className="icon">
        <img src={carvek} alt="" />
    </div>
            </div>
        </div>
    )
}

export default LatestAuctions
