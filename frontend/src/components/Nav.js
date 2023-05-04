import React,{ useEffect, useState } from 'react'
import Button from './Button'
import Overlay from './Overlay';
import { useNavigate,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/userSlice';

import "../css/Nav.css";

function Nav(){

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = ()=>{
    navigate("/login");
  };

  const [showOverlay,setShowOverlay] = useState(false);
  const [status,setStatus] = useState(false);
  const [overlayMsg,setOverlayMsg] = useState("");

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleLogout = async ()=>{  
    setStatus(true);
    setOverlayMsg("Logout Successful");
    setShowOverlay(true);
    dispatch(logout());
    await delay(1000);
    navigate("/");
  }

  const [login,setLogin] = useState(false);
  const user = useSelector(store=>store.user);
  
  useEffect(()=>{
    if(user.emailId===""){
      setLogin(false)
    }
    else{
      setLogin(true)
    }
  },[user])

  return (
    <div className='nav'>
          { showOverlay? 
            (
                <Overlay 
                status = {status}
                msg = {overlayMsg}
                handleBack = {()=>setShowOverlay(false)}
            />
            ): null} 
        <img />
        <div className='nav--links'>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            {login ? (<Link to="/userprofile">Profile</Link>): (<></>) } 
        </div>
        { login ?
          (
            <Button
              BtnText={"Logout"}
              size={"medium"}
              color={"Pink"}
              method={handleLogout}
            />
          ):
          (
            <Button
              BtnText={"Login"}
              size={"medium"}
              color={"Pink"}
              method={handleLogin}
            />
          )
        }
        
    </div>
  )
}

export default Nav
