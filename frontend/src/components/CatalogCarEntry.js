import React from 'react';
import "../css/CatalogCarEntry.css";
import Button from "./Button"

const CatalogCarEntry = ({car,setBookTab}) => {  

    return (
        <div className="carcard">
            <div>
                <img src={car.imgurl} alt="Car image" className='carcard-image'/>
            </div>
            <div className="carcard-details">
                <span className='carcard-carname'>{car.carname}</span>
                <span>Type: {car.type}</span>
                <span className="carlisting-location">Location: {car.address}, {car.city}</span>
                <span>Condition: {car.carCondition}</span>
            </div>
            <div className='carcard-price'>
                <span>Price</span>
                <span>{car.price}/hr</span>
            </div>
            <div className='cardcard-btnctn'>                
                <Button
                    BtnText={"Book Now"}
                    size={"medium"}
                    color="Black"
                    method={(e)=>{
                        e.preventDefault();
                        setBookTab(car,"Book Now")}
                    }
                />
                <Button
                    BtnText={"Reserve"}
                    size={"medium"}
                    color="Black"
                    method={(e)=>{
                        e.preventDefault();
                        setBookTab(car,"Reserve")
                    }}
                />
            </div>         
        </div>
    );
}

export default CatalogCarEntry