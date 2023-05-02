import React from 'react'

import "./LandingPage.css";
import Button from '../../components/Button';
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';


function LandingPage() {
  return (
    <div className='landingPage'>        
        <header className='landingPage--herocard'>
            <Nav />
            <h1>Rides.Reimagined.</h1>
        </header>
        <div className='landingPage--info'>
            <div>
                <h2>Need a Ride?</h2>
                <ul>
                    <li><span>Rent a car from our vast network of lenders</span></li>
                    <li><span>Well-vetted listings only</span></li>
                    <li><span>Extend trip at your convenience</span></li>
                </ul>
                <Button 
                    BtnText={"Book Ride"}
                    size={"medium"}
                    color="Pink"
                />
            </div>
            <div>
                <h2>Need some Cash</h2>
                <ul>
                    <li><span>Earn passive income</span></li>
                    <li><span>Insured trips by verified drivers</span></li>
                    <li><span>Intuitive tracking interface</span></li>
                </ul>
                <Button 
                    BtnText={"Lend Ride"}
                    size={"medium"}
                    color="Pink"
                />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default LandingPage
