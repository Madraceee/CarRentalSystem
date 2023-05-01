import React,{useState} from 'react'
import "./UploadListing.css";
import Button from '../../components/Button';
import { useNavigate } from "react-router-dom";

function UploadListing() {

    const [modelUpload,setModelUpload] = useState("");
    const [fuelUpload,setFuelUpload] = useState("");
    const [locationUpload,setLocationUpload] = useState("");
    const [conditionUpload,setConditionUpload] = useState("");

    const uploadListing = () =>{
        console.log(modelUpload, fuelUpload, locationUpload, conditionUpload);
    } 

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/");
    }

    return (
        <div className='ctn'>
            <div className="box">
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
                >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                </select>
                <input 
                    type="text"   
                    value={locationUpload}
                    onChange={(e)=>setLocationUpload(e.target.value)}
                    placeholder='Enter location/coordinates'
                    className='input-fields'
                />
                <select 
                    name='condition' 
                    id='condition'
                    value={conditionUpload}
                    onChange={(e) => setConditionUpload(e.target.value)}
                >
                    <option value="New">Brand New</option>
                    <option value="Functional">Functional</option>
                    <option value="Flawed">Flawed</option>
                </select>
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