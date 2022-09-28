import React from 'react'
import "./style.scss"
import most1 from "../../Assets/images/most1.png"
import most2 from "../../Assets/images/most2.png"
import most3 from "../../Assets/images/most3.png"
import most4 from "../../Assets/images/most4.png"
import most5 from "../../Assets/images/most5.png"
import most6 from "../../Assets/images/most6.png"
import oclock from "../../Assets/images/oclock.png"
import yurek from "../../Assets/images/yurak.png"
import { Button } from '../Button/Button'

const MostPopularAuctions = () => {
    return (
        <div className="mostPopularAuction">
            <p>OVERLINE</p>
            <h4>Most popular live auctions</h4>
            <div className="btns">
                <button>Architecture</button>
                <button>Photography</button>
                <button>Games</button>
                <button>Music</button>
            </div>
            <div className="allCard">
            <div className="card">
                <img src={most1} alt="" />
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
            <div className="card">
                <img src={most2} alt="" />
                <h6>Diam purus sagittis nisl erat mauris</h6>
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
            <div className="card">
                <img src={most3} alt="" />
                <h6>Nascetur mauris viverra vel id id sem </h6>
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
            <div className="card">
                <img src={most4} alt="" />
                <h6>Velit, fusce id non dui amet amet maecenas</h6>
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
            <div className="card">
                <img src={most5} alt="" />
                <h6>Tellus duis neque fringilla pulvinar</h6>
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
            <div className="card">
                <img src={most6} alt="" />
                <h6>Odio lacus neque ultrices purus eget</h6>
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
            </div>
            <Button onClick={()=>{console.log("hi"); }}
              type="button"
              buttonStyle="btn--One--outline"
              buttonSize="btn-small">
                Show More
              </Button>
              <hr />
        </div>
    )
}
export default MostPopularAuctions;