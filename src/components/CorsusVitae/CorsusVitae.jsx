import React from 'react'
import "./style.scss"
import { Button } from '../Button/Button'
import user from "../../Assets/images/Users.png"
import topcard from "../../Assets/images/imagetop.png"
const CorsusVitae = () => {
    return (
        <div className="corsusVitae">
            <div className="card">
                <div className="col-5">
                <p>OVERLINE</p>
            <h1>Cursus vitae sollicitudin donec nascetur. Join now</h1>
            <p>Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>
            <div className="btn">
                <Button onClick={()=>{console.log()}}
                type="button"
                buttonStyle="btn--One--outline"
                buttonSize="btn-small">Get started</Button>
                <Button onClick={()=>{console.log()}}
                type="button"
                buttonStyle="btn--One--outline"
                buttonSize="btn-small">Learn More</Button>
            </div>
                </div>
                <div className="col-7">
                    <img src={user} alt="" />
                </div>
            </div>
            <div className="topcard">
                <img src={topcard} alt="" />
                <div className="points">
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                </div>
            </div>
        </div>
    )
}

export default CorsusVitae
