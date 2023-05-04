import React,{useEffect, useState} from 'react'
import "./Catalog.css";
import Nav from '../../components/Nav';
import CatalogCarEntry from '../../components/CatalogCarEntry';
import Button from '../../components/Button';
import BookCar from '../../components/BookCar.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';

import axios from 'axios';
import { CAR_CATALOG } from '../APIURL';

function Catalog() {

    const [carListings,setCarListings] = useState([]) 
    const fetchCarListings = async ()=>{
        try{
            const response = await axios.options(CAR_CATALOG)
            .then(()=>{
                return axios.get(CAR_CATALOG);
            })
            .catch(err=>{
                throw err;
            })

            if(response.status === 200){
                setCarListings(response.data.carDetails);
            }
            else{
                throw Error("Restart Backend");
            }
            
        }
        catch(error){
            console.log(error);
        }
        
    }

    useEffect(()=>{
        fetchCarListings();
    },[]);

    //Filter Options
    const [type,setType] = useState("");
    const [location,setLocation] = useState("")
    const [price,setPrice] = useState(0);

    //Book tab variables
    const [showBookTab,setShowBookTab] = useState(false);
    const [bookTabData,setBookTabData] = useState({});
    const [method,setMethod] = useState("");

    const user = useSelector(store=>store.user);
    const navigate = useNavigate();
    
    const hideTab = ()=>{
        setShowBookTab(false);
        setBookTabData({});
        setMethod("");
    }

    const setBookTab = (car,method) =>{
        if(user.emailId === ""){
            navigate("/login");
        }
        else{
            setBookTabData(car);
            setMethod(method);
            setShowBookTab(true);
        }        
    }

    // Get the data and find the min and max value then set it
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(100);


    function submitFilter(){
        console.log(type,location,price);
    }

    return (
        <div className='catalog-ctn'>
            <Nav />
            { showBookTab?
                (
                    <BookCar
                        carData = {bookTabData}
                        method = {method}
                        hideTab = {hideTab}
                    />
                ):(null)
            }
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
                    { carListings.length>0 && carListings.map((car,index)=>(
                        <CatalogCarEntry
                            key={index}
                            car = {car}
                            setBookTab = {setBookTab}
                            display={true}
                    />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Catalog