import React,{useState} from 'react'
import "./UserHistory.css";
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
            <header id='userHistoryNav'>
                <Nav />
            </header>
            <div className='box'>
                <div className='card'>
                    <img src="https://img.timesnownews.com/story/1548919145-3-4_FRONT_CO-D64369.jpg" alt="Car image" style={{width: "80px", height: "80px"}}/>
                    <div className="card-details">
                        <span style={{fontSize: "40px"}}>WagonR</span>
                        <span>Type: Petrol</span>
                        <span>Location: Chennai</span>
                        <span>Condition: Flawed</span>
                    </div>
                    <div className='card-price'>
                        <span>Price</span>
                        <span>599/hr</span>
                    </div>
                </div>
                <div className='card'>
                    <img src="https://img.timesnownews.com/story/1548919145-3-4_FRONT_CO-D64369.jpg" alt="Car image" style={{width: "80px", height: "80px"}}/>
                    <div className="card-details">
                        <span style={{fontSize: "40px"}}>WagonR</span>
                        <span>Type: Diesel</span>
                        <span>Location: Hyderabad</span>
                        <span>Condition: New</span>
                    </div>
                    <div className='card-price'>
                        <span>Price</span>
                        <span>999/hr</span>
                    </div>
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

export default UserHistory