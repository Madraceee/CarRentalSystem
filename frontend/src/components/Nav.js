import React from 'react'
import Button from './Button'
import { useNavigate,Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
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
