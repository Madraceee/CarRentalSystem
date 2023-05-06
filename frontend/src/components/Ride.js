import React, {useState} from 'react';
import "../css/Ride.css";
import Button from "./Button"
import Timer from "./Timer"

const Ride = ({viewer, renter, lender, car, deadline}) => {  

    const [showTimer, setShowTimer] = useState(true);
    const handleTimeUp = () => {
        setShowTimer(false);
    };

    return (
        <div className="ridecard">
            <div>
                <img src={car.imageURL} alt="Car image" className='car-image'/>
            </div>
            <div className="ride-details">
                <span className='ride-name'>Renter: {renter.id}</span>
                <span className='ride-name'>Lender: {lender.id}</span>
                <span className='ride-name'>Car: {car.carname}</span>
                <span>End Time: {deadline}</span>
                {
                    viewer.id === renter.id ? (
                        <div>
                            {showTimer && <Timer onTimeUp={handleTimeUp} />}
                            {!showTimer && <div>Time's up!</div>}
                        </div>
                    ) : viewer.id === lender.id ? (
                        <span><b>Distance Covered</b></span>
                    ) : null
                }
            </div>
        </div>
    );
}

export default Ride