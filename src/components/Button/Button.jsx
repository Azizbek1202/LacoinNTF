import React from 'react'
import "./style.scss"

export const Button = ({children, type, onClick,buttonStyle, buttonSize}) => {
    const STYLES= [
        "btn--One--outline",
        "btn--Two--outline",
        "btn--Three--outline",
        "btn--Four--outline",
    ]

    const SIZES =[
        "btn--small",
        "btn--medium",
        "btn--large",
    ]

    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; 
  return (
   <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
    {children}
   </button>
  )
}
