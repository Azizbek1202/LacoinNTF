import React from 'react'
import "./style.scss"
import { data } from '../mock'

const Price = () => {
    return (
        <div>
            <div className="price">
                {
                    data.map((value)=>{
                        return(
                            <div key={value.id} className="card">
                                <img src={value.img} alt="" />
                                <p>{value.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Price
