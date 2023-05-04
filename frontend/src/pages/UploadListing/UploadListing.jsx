import React,{useEffect, useState} from 'react'
import "./UploadListing.css";
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function UploadListing() {

    const [modelUpload,setModelUpload] = useState("");
    const [fuelUpload,setFuelUpload] = useState("");
    const [addressUpload,setAddressUpload] = useState("");
    const [imageUpload,setImageUpload] = useState({});
    const [cityUpload,setCityUpload] = useState("")
    const [priceUpload,setPriceUpload] = useState("")

    const uploadListing = () =>{
        console.log(modelUpload, fuelUpload, addressUpload,cityUpload,priceUpload, imageUpload);
    } 

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/userprofile");
    }

    const user = useSelector(store => store.user);
    useEffect(()=>{
        if(user.emailId === ""){
            navigate("/login");
        }
    })

    return (
        <div className='upload-ctn'>
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
                <input  
                    type='file'
                    placeholder='Enter Photo'
                    filename={imageUpload}
                    onChange={(e)=>setImageUpload(e.target.files)}
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