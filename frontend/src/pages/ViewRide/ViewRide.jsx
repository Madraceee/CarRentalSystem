import React,{useState,useEffect} from 'react'
import "./ViewRide.css";
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import Ride from '../../components/Ride';
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { USER_CARS } from '../APIURL';

function ViewRide() {
    
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/userprofile");
    }

    const renter = {
        id: "1234"
    };
    const lender = {
        id: "1235"
    };
    const car = {
        carname: "Wagonr"
    };

    return (
        <div className='rides-ctn'>
            <Nav />
                <div className='rides-display'>
                    <Ride
                            renter={renter}
                            car = {car}
                            lender={lender}
                            viewer={renter}
                            deadline={"6-5-23 10:00"}
                    />
                </div>
            <Button
                BtnText={"Back"}
                size={"medium"}
                color="Pink"
                method={handleBack}
            />
            <Footer />
        </div>
    )
}

export default ViewRide