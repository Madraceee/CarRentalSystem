import React,{useEffect, useState} from 'react'
import "./UserProfile.css";
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import {PROFILE_URL} from "../APIURL"
import Footer from '../../components/Footer';

function UserProfile() {
    
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/");
    }

    const [userData,setUserData] = useState({})
    const user = useSelector(store=>store.user);
    const getProfile = async ()=>{
        try{
            const response = await axios.options(PROFILE_URL)
            .then( ()=>{
                return axios.post(PROFILE_URL,{
                    emailId: user.emailId,
                    token: user.token
                })
            })
            .catch(err=>{
                throw err;
            });

            console.log(response);
            setUserData(response.data.profileDetails);
        }
        catch (error) {
            console.log(error);
      }        
    }

    useEffect(()=>{
        if(user.emailId === ""){
            navigate("/login");
        }
        getProfile();
    },[])

    return (
        <div className='ctn'>
            <Nav />
            <div className='row'>
                <div className='column'>
                    <img 
                        src={userData.imageURL}
                        style={{maxWidth: '60%', height: 'auto'}}
                        alt = "User image"
                    /><br />
                    <div></div>
                </div>
                <div className='column'>
                    <div className='info-ctn'>
                        <p className='profile-info'>Username:{userData.name}</p>
                        <p className='profile-info'>Email: {userData.emailId}</p>
                        <p className='profile-info'>Address: {userData.address}</p>
                        <p className='profile-info'>City: {userData.city}</p>
                        <p className='profile-info'>Role: {userData.role}</p>
                    </div>                    
                    <div className='btn-ctn'>
                        {   user.role === "Lender"?
                            (
                                <Button
                                    BtnText={"New Car"}
                                    size={"medium"}
                                    color="Pink"
                                    method={()=>navigate("/uploadlisting")}
                                />
                            ):(null)
                        }
                        {   user.role === "Lender"?
                            (
                                <Button
                                    BtnText={"View Cars"}
                                    size={"medium"}
                                    color="Pink"
                                    method={()=>navigate("/carList")}
                                />
                            ):(null)
                        }
                        <Button
                            BtnText={"Home"}
                            size={"medium"}
                            color="Pink"
                            method={handleBack}
                        />
                    </div>
                    <br />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserProfile