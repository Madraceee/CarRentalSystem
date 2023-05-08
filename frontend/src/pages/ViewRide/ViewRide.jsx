import React,{useState,useEffect} from 'react'
import "./ViewRide.css";
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import Ride from '../../components/Ride';
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { GET_RIDE_GIVEN_ID } from '../APIURL';

function ViewRide() {
    
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/userprofile");
    }

    const user = useSelector(store => store.user);
    const [rides,setRides] = useState([]);
    const getRides = async () =>{
        try{
            const response = await axios.options(GET_RIDE_GIVEN_ID)
            .then(()=>{
                let body = {}
                if(user.role === "Renter"){
                    body = {
                        renterID : user.emailId
                    }
                }
                else{
                    body = {
                        lenderID : user.emailId
                    }
                }
                return axios.post(GET_RIDE_GIVEN_ID,body);
            })
            .catch(err=>{
                throw err;
            })
  
           
            if(response.status === 200){
                setRides(response.data.activeRide);
            }
            else{
                console.log("Ride Error->",response.data);
            }
        }
        catch(error){
            console.log(error);
        }
    }   

    useEffect(()=>{
        if(user.emailId === ""){
            navigate("/login");
        }
        getRides();
    },[])

    return (
        <div className='rides-ctn'>
            <Nav />
            <div className='rides-display'>
                {  rides.length>0 && rides.map((ride,index)=>(
                        <Ride
                            ride = {ride}
                            getRides={getRides}
                        />
                    ))
                }
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