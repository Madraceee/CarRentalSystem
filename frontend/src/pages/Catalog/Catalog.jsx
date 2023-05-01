import React,{useState} from 'react'
import "./Catalog.css";
import Button from '../../components/Button';
import CarCatalogEntry from '../../components/CarCatalogEntry';
import { useNavigate } from "react-router-dom";

function Catalog() {

    return (
        <div className='ctn'>
            <header>
                <Nav />
                <h1 className='heading'>Car Catalog</h1>
            </header>
            <div className='column'>
                {/*Enter lhs column*/}
                <p className='heading'>Location</p>
            </div>
            <div className='column'>
                <CarCatalogEntry
                    carname={"Wagonr"}
                    imgurl={"https://th.bing.com/th/id/R.423742f2bbfe95a629e517f2c014344f?rik=Y4O2oz6sOnPVKg&riu=http%3a%2f%2fwww.carblogindia.com%2fwp-content%2fuploads%2f2017%2f01%2f2017-maruti-wagon-r-vxi.jpg&ehk=y5qqlmGcRX%2bfBehAL5M7oWvWib4tHCEzHq4zFKypJDM%3d&risl=&pid=ImgRaw&r=0"}
                    type={"Petrol"}
                    location={"12 Gandhi Road"}
                    condition={"Functional"}
                    price={"Rs. 799"}
                    color={"White"}
                />
            </div>
            <div className="box">
                <p className='heading'>Upload Listing</p>
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

export default Catalog