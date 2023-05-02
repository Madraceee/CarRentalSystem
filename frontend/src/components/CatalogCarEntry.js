import React from 'react';
import "../css/CatalogCarEntry.css";
import Button from "./Button"

const CatalogCarEntry = ({carname, imgurl, type, location, condition, price, size, color}) => {  

    return (
        <div className="carcard">
            <div>
                <img src={imgurl} alt="Car image" className='carcard-image'/>
            </div>
            <div className="carcard-details">
                <span className='carcard-carname'>{carname}</span>
                <span>Type: {type}</span>
                <span className="carlisting-location">Location: {location}</span>
                <span>Condition: {condition}</span>
            </div>
            <div className='carcard-price'>
                <span>Price</span>
                <span>{price}/hr</span>
            </div>
            <div className='cardcard-btnctn'>                
                <Button
                    BtnText={"Book Now"}
                    size={"medium"}
                    color="Pink"
                    // method={handleBack}
                />
                <Button
                    BtnText={"Reserve"}
                    size={"medium"}
                    color="Pink"
                    // method={handleBack}
                />
            </div>         
        </div>
    );
}

export default CatalogCarEntry