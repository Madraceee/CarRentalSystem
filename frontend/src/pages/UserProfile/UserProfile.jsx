import React,{useEffect, useState} from 'react'
import "./UserProfile.css";
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import {PROFILE_URL} from "../APIURL"

function UserProfile() {
    
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/");
    }

    const [userData,setUserData] = useState({})
    const user = useSelector(store=>store.user);
    const getProfile = async ()=>{
        try{
            const reponse = await axios.options(PROFILE_URL)
            .then( ()=>{
                return axios.post(PROFILE_URL,{
                    emailId: user.emailId,
                    token: user.token
                })
            })
            .catch(err=>{
                throw err;
            });

            setUserData(reponse.data.profileDetails);
        }
        catch (error) {
            console.log(error);
      }        
    }

    useEffect(()=>{
        if(user.emailId === ""){
            navigate("/");
        }
        getProfile();
    })

    return (
        <div className='ctn'>
            <Nav />
            <div className='row'>
                <div className='column'>
                    <img 
                        src='https://pbs.twimg.com/profile_images/865695281492381696/81tOUsc7_400x400.jpg'
                        style={{maxWidth: '60%', height: 'auto'}}
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
                    <div className='car-ctn'>
                        <ol>
                            <li><div className='profileCarCard'>Wagonr</div></li>
                            <li><div className='profileCarCard'>Corolla</div></li>
                        </ol>
                    </div>
                    <br />
                    <br />
                    <br />
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
        </div>
    )
}

export default UserProfile