import React from 'react'
import "./style.scss"
import { Button } from '../Button/Button'
import left from "../../Assets/images/Leftimage.png"
import tv from "../../Assets/images/tv.png"
import group from "../../Assets/images/Group.png"

const OverlineTwo = () => {
  return (
    <div className="overline2">
        <div className="steptwo">
            <img src={left} alt="" />
        </div>
        <div className="stepone">
            <p>OVERLINE</p>
            <h1>Sapien ipsum scelerisque convallis fusce</h1>
            <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
            <div className="card">
                <div className="incard">
                    <img src={tv} alt="" />
                    <h6>Sollicitudin sapien</h6>
                    <p>Cursus fermentum</p>
                </div>
                <div className="incard">
                    <img src={group} alt="" />
                    <h6>Pulvinar metus</h6>
                    <p>Nunc sed</p>
                </div>
            </div>
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
    </div>
  )
}

export default OverlineTwo;
