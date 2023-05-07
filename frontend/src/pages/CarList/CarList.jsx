import React,{useState,useEffect} from 'react'
import "./CarList.css";
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import CatalogCarEntry from '../../components/CatalogCarEntry';
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { USER_CARS } from '../APIURL';

function CarList() {
    
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/userprofile");
    }

    const user = useSelector(store=>store.user);
    const [userCars,setUserCars] = useState([])
    const getUserCars =async ()=>{
        try{
            const response = await axios.options(USER_CARS)
                .then(()=>{
                    return axios.post(USER_CARS,{
                        emailId: user.emailId,
                        token: user.token
                    })
                })
                .catch(err=>{
                    throw err;
                });
            setUserCars(response.data.carDetails);            
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(user.emailId === ""){
            navigate("/");
        }
        getUserCars();
    },[])


    return (
        <div className='usercars-ctn'>
            <Nav />
                <div className='usercars-display'>
                    { userCars.length>0 && userCars.map((car,index)=>(
                        <CatalogCarEntry
                            key={index}
                            car = {car}
                            display={false}
                    />
                    ))}
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

export default CarList