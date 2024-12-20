import React from 'react'
import logo from "../Assets/logo.png"

const Logo = ({ width = "100px" }) => {
    return (
        <div>
            <img className='w-10' src={logo} alt="" />
        </div>
    )
}

export default Logo
