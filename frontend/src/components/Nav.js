import React from 'react'
import Button from './Button'

import "../css/Nav.css";

const Nav = ()=>{
  return (
    <div className='nav'>
        <img />
        <div className='nav--links'>
            <p>About</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <Button
            BtnText={"Login"}
            size={"medium"}
            color={"Pink"}
        />
    </div>
  )
}

export default Nav
