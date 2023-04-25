import React from 'react'
import Button from './Button'
import { useNavigate } from "react-router-dom";

import "../css/Nav.css";

function Nav(){

  const navigate = useNavigate();
  const handLogin = ()=>{
    navigate("/login");
  }

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
            method={handLogin}
        />
    </div>
  )
}

export default Nav
