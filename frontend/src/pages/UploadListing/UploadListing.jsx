import React,{useEffect, useState} from 'react'
import "./UploadListing.css";
import Button from '../../components/Button';
import UploadWidget from '../../components/UploadWidget';
import Overlay from '../../components/Overlay';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import axios from 'axios';
import { UPLOAD_CAR } from '../APIURL';

function UploadListing() {

    const [modelUpload,setModelUpload] = useState("");
    const [fuelUpload,setFuelUpload] = useState("");
    const [addressUpload,setAddressUpload] = useState("");
    const [imageUpload,setImageUpload] = useState({});
    const [cityUpload,setCityUpload] = useState("");
    const [priceUpload,setPriceUpload] = useState("");

    //Overlay status
    const [showOverlay,setShowOverlay] = useState(false);
    const [status,setStatus] = useState(false);
    const [overlayMsg,setOverlayMsg] = useState("");


    const user = useSelector(store =>store.user);

    const uploadListing = async () =>{
        try{
            const reposnse = await axios.options(UPLOAD_CAR)
                .then(()=>{
                    return axios.post(UPLOAD_CAR,{
                        lenderID: user.emailId,
                        carname: modelUpload,
                        type: fuelUpload,
                        carCondition : "Used",
                        imageURL: imageUpload,
                        address: addressUpload,
                        city: cityUpload,
                        price: priceUpload,
                        token: user.token
                    })
                    .catch(err=>{
                        throw err;
                    })
                })
            if(reposnse.request.status === 200){
                setStatus(true);
                setOverlayMsg("Insertion Successful");
                setShowOverlay(true);
            }
            if(reposnse.status === 500){
                setStatus(false);
                setOverlayMsg("Insertion Unsuccessful");
                setShowOverlay(true);
            }
        }
        catch(error){
            console.log(error);
            setStatus(false);
            setOverlayMsg("Insertion Unsuccessful");
            setShowOverlay(true);
        }
    } 

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/userprofile");
    }

    useEffect(()=>{
        if(user.emailId === ""){
            navigate("/login");
        }
    })

    return (
        <div className='upload-ctn'>
            { showOverlay? 
            (
                <Overlay 
                status = {status}
                msg = {overlayMsg}
                handleBack = {()=>setShowOverlay(false)}
            />
            ): null}
            <div className="upload-box">
                <p className='heading'>Upload Listing</p>
                <input 
                    type="text"   
                    value={modelUpload}
                    onChange={(e)=>setModelUpload(e.target.value)}
                    placeholder='Enter Model'
                    className='input-fields'
                />
                <select 
                    name='fuel' 
                    id='fuel'
                    value={fuelUpload}
                    onChange={(e) => setFuelUpload(e.target.value)}
                    className='custom-select'
                >
                    <option value="">Select Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                </select>
                <input 
                    type="text"   
                    value={addressUpload}
                    onChange={(e)=>setAddressUpload(e.target.value)}
                    placeholder='Enter Address'
                    className='input-fields'
                />
                <input 
                    type="text"   
                    value={cityUpload}
                    onChange={(e)=>setCityUpload(e.target.value)}
                    placeholder='Enter City'
                    className='input-fields'
                />
                <input 
                    type="number"   
                    value={priceUpload}
                    onChange={(e)=>setPriceUpload(e.target.value)}
                    placeholder='Enter Price per Hour'
                    className='input-fields'
                    min={0}
                />
                <UploadWidget 
                    setImageUpload = {setImageUpload}
                />
                <Button
                    BtnText={"List Car"}
                    size={"medium"}
                    color="Pink"
                    method={uploadListing}
                />
            </div>
            <Button
                BtnText={"Back"}
                size={"medium"}
                color="Pink"
                method={handleBack}
            />
        </div>
    )
}

export default UploadListing