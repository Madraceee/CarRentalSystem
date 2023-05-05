import React,{useEffect, useState} from 'react';
import "../css/BookCar.css";
import Button from './Button';

import axios from "axios";
import { BOOK_CAR } from '../pages/APIURL';
import { useSelector } from 'react-redux';
import Overlay from './Overlay';

function BookCar({carData,method,hideTab}) {

    const [from,setFrom] = useState(0);
    const [to,setTo] =  useState(0);
    const [duration,setDuration] = useState(0);

    const findDuration = ()=>{
        let startDate;
        if(method === "Book Now"){
            startDate = new Date();
        }
        else{
            startDate = new Date(from);
        }        
        const endDate = new Date(to);
        const diffMs = endDate - startDate;
        const diffSecs = Math.round(diffMs / 1000);
        setDuration(diffSecs);
    }

    useEffect(()=>{
        findDuration();
    },[from,to]);

    //Overlay status
    const [showOverlay,setShowOverlay] = useState(false);
    const [status,setStatus] = useState(false);
    const [overlayMsg,setOverlayMsg] = useState("");

    const user = useSelector(store=>store.user);
    const bookCar = async ()=>{
        try{
            const response = await axios.options(BOOK_CAR)
            .then(()=>{
                return axios.post(BOOK_CAR,{
                    lenderID: carData.lenderID,
                    renterID: user.emailId,
                    listingID: carData.listingID,
                    duration: duration                  
                })
            })
            .catch(err=>{
                throw err;
            })

            if(response.data.msg === "Ride Created"){
                setStatus(true);
                setOverlayMsg("Ride Created");
                setShowOverlay(true);
            }

        }
        catch(error){
            setStatus(false);
            setOverlayMsg("Ride Not Created");
            setShowOverlay(true);            
        }
        
    }

    return (
        <div className='overlay'>
            { showOverlay? 
            (
                <Overlay 
                status = {status}
                msg = {overlayMsg}
                handleBack = {()=>setShowOverlay(false)}
            />
            ): null} 
            <div className='book-ctn'>
                <div className='col-ctn'>
                    <div className='col'>
                        <span>Lender: {carData.lenderID}</span>
                        <span>Car: {carData.carname}</span>
                        <span>Type: {carData.type}</span>
                        <span>Location: {carData.address} , {carData.city}</span>
                        <span>Price: {carData.price}</span>
                    </div>
                    <div className='col'>
                        { method==="Reserve" ?
                            (
                            <div>
                                <span>From</span>
                                <input  
                                    value={from}
                                    type="datetime-local"
                                    onChange={(e)=>setFrom(e.target.value)}
                                />
                            </div>
                            ): (null)         
                        }   
                        <span>To</span>      
                        <input  
                            value={to}
                            type="datetime-local"
                            onChange={(e)=>setTo(e.target.value)}
                        />
                    </div>            
                </div>   
                <div>
                    <img className='car-image' src={carData.imageURL} alt={"Car Image"}/>
                </div>
                <div className='btn-ctn'>
                    <Button
                            BtnText={"Back"}
                            size={"medium"}
                            color={"Black"}
                            method={hideTab}
                    />
                    <Button
                            BtnText={"Book"}
                            size={"medium"}
                            color={"Black"}
                            method={bookCar}
                    />        
                </div>
            </div>           
        </div>
    )
}

export default BookCar
