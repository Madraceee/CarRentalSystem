import React,{useState} from 'react'
import "./Login.css";
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";

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


    const submitLoginCredentials = () =>{
        console.log(emailLogin,passowordLogin);
    }   

    const submitRegistrationCredentials = () =>{
        console.log(nameRegistration,emailRegistration,passwordRegistration,phoneRegistration,typeRegistration,fileRegistration);
    } 

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/");
    }

    return (
        <div className='ctn'>
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
                        method={submitRegistrationCredentials}
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
