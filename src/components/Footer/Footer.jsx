import React from 'react'
import "./style.scss"
import logo from "../../Assets/images/Logo.png"
import { Button } from '../Button/Button'
import facebook from "../../Assets/images/facebook.png"
import linkend from "../../Assets/images/linkedn.png"
import github from "../../Assets/images/github.png"
import twitter from "../../Assets/images/twitter.png"
import instagram from "../../Assets/images/instagram.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="onestep">
                <img src={logo} alt="" />
                <div className="links">
                    <a href="#">Suppor</a>
                    <a href="#">Time of service</a>
                    <a href="#">License</a>
                </div>
            </div>
            <div className="lineone"></div>
            <div className="twostep">
                    <h6>Auctions</h6>
                    <h6>Roadmap</h6>
                    <h6>Discover</h6>
                    <h6>Community</h6>
                    <Button onClick={()=>{console.log("hi"); }}
              type="button"
              buttonStyle="btn--One--outline"
              buttonSize="btn-small">
                My accaunt
              </Button>
              <div className="pic">
                <img src={facebook} alt="" />
                <img src={linkend} alt="" />
                <img src={github} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
            <div className="linetwo"></div>
            <div className="threestep">
                <p>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
                <input type="text" placeholder="Newsletter" />
                <h6>Sign in</h6>
            </div>

        </div>
    )
}

export default Footer
