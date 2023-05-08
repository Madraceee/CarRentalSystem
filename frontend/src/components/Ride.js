import React, {useEffect, useState} from 'react';
import "../css/Ride.css";
import Button from './Button';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END_RIDE, GET_CAR_NAME_IMG, EXTEND_RIDE, APPROVE_RIDE, VIEW_EXTEND, UPDATE_EXTEND } from '../pages/APIURL';
import Overlay from './Overlay';

const Ride = ({ride,getRides}) => {  

    //Overlay status
    const [showOverlay,setShowOverlay] = useState(false);
    const [status,setStatus] = useState(false);
    const [overlayMsg,setOverlayMsg] = useState("");

    const user = useSelector(store=>store.user);
    const [finalDistance,setFinalDistance] = useState("");
    const [extendDate,setExtendDate] = useState("");

    const [carDetails,setCarDetails] = useState({});
    const getCarNameImg = async ()=>{
        try{
            const response = await axios.options(GET_CAR_NAME_IMG)
            .then(()=>{
                return axios.post(GET_CAR_NAME_IMG,{
                    listingID: ride.listingID
                })
            })

            if(response.status === 200){
                setCarDetails(response.data)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const endRide = async () =>{
        try{
            const response = await axios.options(END_RIDE)
            .then(()=>{
                return axios.post(END_RIDE,{
                    rideID: ride.rideID,
                    distance: finalDistance
                })
            })
            .catch(err=>{
                throw err;
            })

            if(response.status === 200){
                setStatus(true);
                setOverlayMsg("Ride Ended!");
                setShowOverlay(true);
                getRides();
            }
        }
        catch(err){
            console.log(err);
        }
    }

    const extendRide = async()=>{
        try{
            const response = await axios.options(EXTEND_RIDE)
            .then(()=>{
                return axios.post(EXTEND_RIDE,{
                    rideID: ride.rideID,
                    renterID: ride.renterID,
                    lenderID: ride.lenderID,
                    requestDate: extendDate
                })
            })

            if(response.status === 200){
                setStatus(true);
                setOverlayMsg("Ride Extend Requested!");
                setShowOverlay(true);
                getRides();
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const approveRide = async ()=>{
        try{
            const response = await axios.options(APPROVE_RIDE)
            .then(()=>{
                return axios.post(APPROVE_RIDE,{
                    rideID: ride.rideID
                })
            })

            if(response.status === 200){
                setStatus(true);
                setOverlayMsg("Ride Accepted");
                setShowOverlay(true);
                getRides();
            }
            else{
                setStatus(false);
                setOverlayMsg("Server Error");
                setShowOverlay(true);
                getRides();
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const [requestTime,setRequestTime] = useState("");
    const getExtendRequest = async ()=>{
        try{
            const response = await axios.options(VIEW_EXTEND)
            .then(()=>{
                return axios.post(VIEW_EXTEND,{
                    lenderID: ride.lenderID,
                    rideID: ride.rideID
                })
            })

            if(response.status === 200){
                if(response.data.extendRequests.length > 0){
                    console.log()
                    setRequestTime(response.data.extendRequests[0].requestDate);
                }
                else{
                    setRequestTime("");
                }
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const updateExtend = async (lenderStatus)=>{
        try{
            const response = await axios.options(UPDATE_EXTEND)
            .then(()=>{
                return axios.post(UPDATE_EXTEND,{
                    rideID: ride.rideID,
                    status: lenderStatus,
                    requestDate: requestTime
                })
            });

            if(response.status === 200){
                setStatus(true);
                setOverlayMsg("Request Updated");
                setShowOverlay(true);
                getRides();
                setRequestTime("");
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getCarNameImg();
        getExtendRequest();
    },[])


    return (
        <div className="ridecard">
            { showOverlay &&
            <Overlay
                status={status}
                msg = {overlayMsg}
                handleBack={()=>setShowOverlay(false)}
            />
            }
            
            <div>
                <img src={carDetails.carImgURL} alt="Car image" className='car-image'/>
            </div>
            <div className="ride-details">
                <span className='ride-name'>Renter: {ride.renterID}</span>
                <span className='ride-name'>Lender: {ride.lenderID}</span>
                <span className='ride-name'>Start Time: {ride.beginDate}</span>
                <span className='ride-name'>End Time: {ride.endDate}</span>
                <span className='ride-name'>Car: {carDetails.carName}</span>
                { ride.rideStatus === "Completed" && 
                    <>
                        { ride.distance === 0 ? (
                            <span className='ride-name'>Rejected</span>
                        ):(
                            <>
                                <span className='ride-name'>Distance: {ride.distance}</span>
                                <span className='ride-name'>Bill : {parseInt(ride.distance)*parseInt(carDetails.price)}</span>
                            </>
                        )}
                        
                    </>
                }
            </div>
            <div className='ride-btn-ctn'>
                { user.role === "Lender" && ride.rideStatus === "Active" &&
                <>
                    <div className='flex-row'>
                        <Button 
                            BtnText={"End"}
                            size={"medium"}
                            color="Pink"
                            method = {endRide}
                        />
                        <div className='flex-col'>
                            <span>Enter Final Distance</span>
                            <input
                                type="number"
                                placeholder='Enter Final Distance'
                                value={finalDistance}
                                onChange={(e)=>setFinalDistance(e.target.value)}
                            />
                        </div>
                    </div>
                    { requestTime !=="" && (
                        <>
                        <span>New Extended Date is {requestTime}</span>
                        <div className='flex-row'>
                            <Button
                                BtnText={"Reject"}
                                size={"medium"}
                                color="Red"
                                method = {()=>updateExtend("Rejected")}
                            />
                            <Button
                                BtnText={"Accept"}
                                size={"medium"}
                                color="Green"
                                method={()=>updateExtend("Granted")}
                            />   
                        </div>
                        </>
                    )

                    }
                </>
                }
                { user.role === "Lender" && ride.rideStatus === "Pending" &&
                    <div className='flex-row'>
                        <Button
                            BtnText={"Reject"}
                            size={"medium"}
                            color="Red"
                            method = {()=>{
                                setFinalDistance(0);
                                endRide();
                            }}
                        />
                        <Button
                            BtnText={"Accept"}
                            size={"medium"}
                            color="Green"
                            method={approveRide}
                        />                        
                    </div>
                }
                { user.role === "Renter" && ride.rideStatus !== "Completed" &&
                    <div className='flex-row'>
                    <Button
                        BtnText={"Extend"}
                        size={"medium"}
                        color="Pink"
                        method={extendRide}
                    />
                    <div className='flex-col'>
                        <span>Enter New End Date</span>
                        <input
                            type="datetime-local"
                            value={extendDate}
                            onChange={(e)=>setExtendDate(e.target.value)}
                        />
                    </div>
                </div>
                }               
            </div>
        </div>
    );
}

export default Ride