import React,{useState} from 'react'
import "./Catalog.css";
import Nav from '../../components/Nav';
import CatalogCarEntry from '../../components/CatalogCarEntry';
import Button from '../../components/Button';

function Catalog() {

    const carListings = [
        {
            carname:"Wagnor",
            imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            type:"Petrol",
            location:"12 Gandhi Road12andhi Road12 andhi Road12",
            condition:"Functional",
            price:"Rs. 799",
            color:"White"
        },
        {
            carname:"Wagnor",
            imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            type:"Petrol",
            location:"12 Gandhi Road",
            condition:"Functional",
            price:"Rs. 799",
            color:"White"
        },
        {
            carname:"Wagnor",
            imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            type:"Petrol",
            location:"12 Gandhi Road",
            condition:"Functional",
            price:"Rs. 799",
            color:"White"
        },
        {
            carname:"Wagnor",
            imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            type:"Petrol",
            location:"12 Gandhi Road",
            condition:"Functional",
            price:"Rs. 799",
            color:"White"
        },
        {
            carname:"Wagnor",
            imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            type:"Petrol",
            location:"12 Gandhi Road",
            condition:"Functional",
            price:"Rs. 799",
            color:"White"
        },
        {
            carname:"Wagnor",
            imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            type:"Petrol",
            location:"12 Gandhi Road",
            condition:"Functional",
            price:"Rs. 799",
            color:"White"
        },
        {
            carname:"Wagnor",
            imgurl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            type:"Petrol",
            location:"12 Gandhi Road",
            condition:"Functional",
            price:"Rs. 799",
            color:"White"
        }
    ]

    const [type,setType] = useState("");
    const [location,setLocation] = useState("")
    const [price,setPrice] = useState(0);

    // Get the data and find the min and max value then set it
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(100);


    function submitFilter(){
        console.log(type,location,price);
    }

    return (
        <div className='catalog-ctn'>
            <Nav />
            <div className='catalog-body'>
                <div className='catalog-options'>
                    <h3>Filter Options</h3>
                    <div>
                        <h3>Select Vehicle type</h3>
                        <div className='custom-select'>
                            <select value={type} onChange={(e)=>{setType(e.target.value)}}>
                                <option value="">Any</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electic">Electic</option>
                            </select>
                        </div>                        
                    </div>
                    <div>
                        <h3>Enter Location</h3>
                        <input 
                        type="text"   
                        value={location}
                        onChange={(e)=>setLocation(e.target.value)}
                        className='catalog-location'
                    />
                    </div>
                    <div>
                        <h3>Select Price</h3>
                        <div className='price-min-max'>
                            <span>0</span>
                            <span>100</span>
                        </div>
                        <input 
                            type="range" 
                            id="myRange" 
                            name="myRange" 
                            min={minPrice} 
                            max={maxPrice}
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                        />
                        <span className='selected-price'>{price}{"\u20B9"}</span>
                    </div>
                    <div style={{margin:" 1rem auto"}}>
                        <Button
                            BtnText={"Submit"}
                            size={"medium"}
                            color={"Black"}
                            method={submitFilter}
                        />
                    </div>
                    
                </div>
                <div className='catalog-display'>
                    {carListings.map((car)=>(
                        <CatalogCarEntry
                        carname={car.carname}
                        imgurl={car.imgurl}
                        type={car.type}
                        location={car.location}
                        condition={car.condition}
                        price={car.price}
                        color={car.color}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog