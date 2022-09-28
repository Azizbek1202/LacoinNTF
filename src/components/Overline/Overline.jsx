import React from 'react'
import "./style.scss"
import { Button } from '../Button/Button'
import right from "../../Assets/images/Rightimage.png"

const Overline = () => {
  return (
    <div className='overline'>
        <div className="stepone">
            <p>OVERLINE</p>
            <h1>Sapien ipsum scelerisque convallis fusce</h1>
            <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
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
        <div className="steptwo">
            <img src={right} alt="" />
        </div>
    </div>
  )
}

export default Overline;