import React from 'react'
import "./style.scss"
import number1 from "../../Assets/images/Number1.png"
import number2 from "../../Assets/images/Number2.png"
import number3 from "../../Assets/images/Number3.png"
import number4 from "../../Assets/images/Number4.png"

const Number = () => {
    return (
        <div className="number">
            <div className="card">
                <img src={number1} alt="" />
                <h2>300k</h2>
                <p>Users Active</p>
            </div>
            <div className="card">
                <img src={number2} alt="" />
                <h2>52,5k</h2>
                <p>Artworks</p>
            </div>
            <div className="card">
                <img src={number3} alt="" />
                <h2>17,5k</h2>
                <p>Artists</p>
            </div>
            <div className="card">
                <img src={number4} alt="" />
                <h2>35.58</h2>
                <p>ETH Spent</p>
            </div>
        </div>
    )
}

export default Number
