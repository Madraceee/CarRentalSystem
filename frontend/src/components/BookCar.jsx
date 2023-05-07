import React,{useEffect, useState} from 'react';
import "../css/BookCar.css";
import Button from './Button';

import axios from "axios";
import { INSERT_RIDE } from '../pages/APIURL';
import { useSelector } from 'react-redux';
import Overlay from './Overlay';

function BookCar({carData,method,hideTab}) {

    const [from,setFrom] = useState(0);
    const [to,setTo] =  useState(0);


    //Overlay status
    const [showOverlay,setShowOverlay] = useState(false);
    const [status,setStatus] = useState(false);
    const [overlayMsg,setOverlayMsg] = useState("");

    const user = useSelector(store=>store.user);
    const bookCar = async ()=>{

        let beginDate = from;
        let endDate = to;
        beginDate = beginDate.replace("T"," ")
        beginDate+=":00";
        endDate = endDate.replace("T"," ")
        endDate+=":00";

        try{
            const response = await axios.options(INSERT_RIDE)
            .then(()=>{
                return axios.post(INSERT_RIDE,{
                    lenderID: carData.lenderID,
                    renterID: user.emailId,
                    listingID: carData.listingID,
                    distance: "0",
                    beginDate: beginDate ,
                    endDate: endDate            
                })
            })
            .catch(err=>{
                throw err;
            })

            if(response.status === 200){
                setStatus(true);
                setOverlayMsg("Ride Created");
                setShowOverlay(true);
            }

        }
        catch(error){
            setShowOverlay(true); 
            setStatus(false);
            setOverlayMsg("Ride Not Created");                       
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
