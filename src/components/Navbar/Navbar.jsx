import React from 'react'
import "./style.scss"
import logo from "../../Assets/images/Logo.png"
import { Button } from '../Button/Button'

const Navbar = () => {
  return (
    <div className='navbar'>
          <img src={logo} alt="" />
          <div className='links'>
            <a href='#'>Auctions</a>
            <a href='#'>Roadmap</a>
            <a href='#'>Discover</a>
            <a href='#'>Community</a>
          </div>
          <div className='buttons'>
              <Button onClick={()=>{console.log("hi"); }}
              type="button"
              buttonStyle="btn--One--outline"
              buttonSize="btn-small">
                Contact
              </Button>
              <Button onClick={()=>{console.log("hi"); }}
              type="button"
              buttonStyle="btn--One--outline"
              buttonSize="btn-small">
                My accaunt
              </Button>
          </div>
    </div>
  )
}

export default Navbar