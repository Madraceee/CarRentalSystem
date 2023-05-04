import React from 'react';
import "../css/BookCar.css";
import Button from './Button';

function BookCar({carData,method,hideTab}) {
//   const method = "Reserve"
//   const carData = {
//     renter: "Nitheesh",
//     name: "Lamborghini",
//     type: "Petrol",
//     address: "1121 Block1",
//     city: "Chennai",
//     imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   }
  return (
    <div className='overlay'>
        <div className='book-ctn'>
            <div className='col-ctn'>
                <div className='col'>
                    <span>Lender: {carData.lenderId}</span>
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
                <img className='car-image' src={carData.imgurl} alt={"Car Image"}/>
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
