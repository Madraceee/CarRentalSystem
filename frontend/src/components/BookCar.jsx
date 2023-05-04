import React from 'react';
import "../css/BookCar.css";
import Button from './Button';

function BookCar({carData,method,hideTab}) {

  return (
    <div className='overlay'>
        <div className='book-ctn'>
            <div className='col-ctn'>
                <div className='col'>
                    <span>Lender: {carData.lenderID}</span>
                    <span>Car: {carData.carname}</span>
                    <span>Type: {carData.type}</span>
                    <span>Location: {carData.address} , {carData.city}</span>
                    <span>Price: {carData.price}</span>
                </div>
                <div className='col'>
                    { method==="Reserve" ?
                        (
                        <div>
                            <span>From</span>
                            <input  
                                type="datetime-local"
                            />
                        </div>
                        ): (null)         
                    }   
                    <span>To</span>      
                    <input  
                        type="datetime-local"
                    />
                </div>            
            </div>   
            <div>
                <img className='car-image' src={carData.imageURL} alt={"Car Image"}/>
            </div>
            <div className='btn-ctn'>
                <Button
                        BtnText={"Back"}
                        size={"medium"}
                        color={"Black"}
                        method={hideTab}
                />
                <Button
                        BtnText={"Book"}
                        size={"medium"}
                        color={"Black"}
                />        
            </div>
        </div>           
    </div>
  )
}

export default BookCar
