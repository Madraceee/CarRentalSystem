import React,{useEffect, useState} from 'react'
import "./BookReserve.css"
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import {PROFILE_URL} from "../APIURL"

function BookReserve() {
    return (
        <div className='ctn'>
            <Nav />
            <div className='ride-ctn'>
                <div className='rideCard'>
                    <p>Renter: user1</p>
                    <p>Lender: user2</p>
                    <p>Car: Wagonr</p>
                    <p><b>Time left: 1:59</b></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
