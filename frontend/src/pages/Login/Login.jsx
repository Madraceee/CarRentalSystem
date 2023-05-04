import React,{useEffect, useState} from 'react'
import "./Login.css";
import Button from '../../components/Button';
import Overlay from '../../components/Overlay';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LOGIN_URL } from '../APIURL';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

function Login() {

    // For login
    const [emailLogin,setEmailLogin] = useState("");
    const [passowordLogin,setPasswordLogin] = useState("");

    // For Registration
    const [nameRegistration,setNameRegistration] = useState("");
    const [emailRegistration,setEmailRegistration] = useState("");
    const [passwordRegistration,setPasswordRegistration] = useState("");
    const [phoneRegistration,setPhoneRegistration] = useState("");
    const [typeRegistration,setTypeRegistration] = useState("");
    const [fileRegistration,setFileRegistration] = useState(null);

    //For animation
    const [left,setLeft] = useState(false);

    //Overlay status
    const [showOverlay,setShowOverlay] = useState(false);
    const [status,setStatus] = useState(false);
    const [overlayMsg,setOverlayMsg] = useState("");

    useEffect(()=>{
        setEmailLogin("");
        setPasswordLogin("");
    },[showOverlay]);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitLoginCredentials = async (e) =>{
        e.preventDefault();
        try {
                // Encrypt data
                // For later
                const response = await axios.options(LOGIN_URL)
                    .then(  () =>{
                        return axios.post(LOGIN_URL,{
                            emailId: emailLogin,
                            password: passowordLogin
                        })
                    })
                    .catch(err=>{
                        throw err;
                    })

                if(response.data.msg === "Login Valid"){
                   setStatus(true);
                   setOverlayMsg("Login Successful");
                   setShowOverlay(true);
                   
                   dispatch(login(
                    {   emailId: response.data.emailId,
                        role:"Lender",
                        // response.data.role
                        token:response.data.token 
                    }));
                    await delay(2000);
                    navigate("/");
                }
          } catch (error) {
                if(error.response.request.status === 401){
                    setStatus(false);
                    setOverlayMsg("Login Unsuccessful");
                    setShowOverlay(true);
                }
          }
    }   

    const submitRegistrationCredentials = () =>{
        console.log(nameRegistration,emailRegistration,passwordRegistration,phoneRegistration,typeRegistration,fileRegistration);
    } 

    
    const handleBack = () =>{
        navigate("/");
    }

    return (
        <div className='ctn'>
            { showOverlay? 
            (
                <Overlay 
                status = {status}
                msg = {overlayMsg}
                handleBack = {()=>setShowOverlay(false)}
            />
            ): null}            
            <div className="box">
                <div 
                    className="cover" style={left ? {left:"0%" }: {left:"50%" }}>
                    <p
                        className='cover-text'
                        onClick={()=>setLeft(!left)}
                    >{left? "Click to Login" : "Click to Register"}</p>   
                </div>
                <div className='login-ctn'>
                    <p className='heading'>Login</p>                   
                    <input 
                        type="email"   
                        value={emailLogin}
                        onChange={(e)=>setEmailLogin(e.target.value)}
                        placeholder='Enter Email'
                        className='input-fields'
                    />                
                    <input 
                        type="password"   
                        value={passowordLogin}
                        onChange={(e)=>setPasswordLogin(e.target.value)}
                        placeholder='Enter Password'
                        className='input-fields'
                    />
                    <Button
                        BtnText={"Submit"}
                        size={"medium"}
                        color="Pink"
                        method={submitLoginCredentials}
                    >Submit
                    </Button>
                </div>

                <div className='register-ctn'>
                    <p className='heading'>Register</p>
                    <input 
                        type="text"   
                        value={nameRegistration}
                        onChange={(e)=>setNameRegistration(e.target.value)}
                        placeholder='Enter Name'
                        className='input-fields'
                    />
                    <input 
                        type="email"   
                        value={emailRegistration}
                        onChange={(e)=>setEmailRegistration(e.target.value)}
                        placeholder='Enter Email'
                        className='input-fields'
                    />
                    <input 
                        type="password"   
                        value={passwordRegistration}
                        onChange={(e)=>setPasswordRegistration(e.target.value)}
                        placeholder='Enter Password'
                        className='input-fields'
                    />
                    <input 
                        type="tel"   
                        pattern="[0-9]{10}"
                        value={phoneRegistration}
                        onChange={(e)=>setPhoneRegistration(e.target.value)}
                        placeholder='Enter Phone Number'
                        className='input-fields'
                    />
                    <div>
                        <input type="radio" name="utype" value="Renter" onChange={(e)=>setTypeRegistration(e.target.value)}  />
                        <span >Renter</span>
                        <input type="radio" name="utype" value="Lender" onChange={(e)=>setTypeRegistration(e.target.value)}/>
                        <span >Lender</span>
                    </div>
                    <input 
                        type="file"
                        onChange={(e)=>setFileRegistration(e.target.files[0])}
                        className='input-fields'
                    />
                    <Button
                        BtnText={"Create Account"}
                        size={"medium"}
                        color="Pink"
                        method={(e)=>submitRegistrationCredentials(e)}
                    />
                </div>
            </div>
            <Button
                BtnText={"Back"}
                size={"medium"}
                color="Pink"
                method={handleBack}
            />
        </div>
        
        
    )
}

export default Login