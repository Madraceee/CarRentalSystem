import React,{useState} from 'react'
import "./UserProfile.css";
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import { useNavigate } from "react-router-dom";

function UserProfile() {
    
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/");
    }

    return (
        <div className='ctn'>
            <header id='userProfileNav'>
                <Nav />
            </header>
            <div className='row'>
                <div className='column'>
                    <img 
                        src='https://pbs.twimg.com/profile_images/865695281492381696/81tOUsc7_400x400.jpg'
                        style={{width: '60%', height: 'auto'}}
                    /><br />
                    <div></div>
                </div>
                <div className='column' style={{overflowY: "scroll"}}>
                    <p>Username: Sanchi</p>
                    <hr className='horline'/>
                    <p>Email: sanchi@gmail.com</p>
                    <hr className='horline'/>
                    <p>Address: 12 Gandhi Road</p>
                    <hr className='horline'/>
                    <p>City: Chennai</p>
                    <hr className='horline'/>
                    <br />
                    <br />
                    <div style={{marginLeft: "25%"}}>
                        <ol>
                            <li><div className='profileCarCard'>Wagonr</div></li>
                            <li><div className='profileCarCard'>Corolla</div></li>
                        </ol>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <Button
                            BtnText={"Back"}
                            size={"medium"}
                            color="Pink"
                            method={handleBack}
                        />
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default UserProfile