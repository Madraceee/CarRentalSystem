import React from 'react';
import "../css/CatalogCarEntry.css";
import Button from "./Button"

const CatalogCarEntry = ({carname, imgurl, type, location, condition, price, size, color}) => {  

    return (
        <div className="carcard">
            <img src={imgurl} style={{maxWidth: 50, maxHeight: 50}} />
            <p> {carname} </p>
            <p> {price} </p><br />
            <p>Type: {type}</p><br />
            <p>Location: {location}</p><br />
            <p>Condition: {condition}</p><br />
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
    );
}

export default CatalogCarEntry