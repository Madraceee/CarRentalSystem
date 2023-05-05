import React,{useEffect, useState,useRef} from 'react'
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

    const [carListings,setCarListings] = useState([]);
    const [receivedData,setReceivedData] = useState([]);
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
                setReceivedData(response.data.carDetails);
                minMax(response.data.carDetails);
            }
            else{
                throw Error("Restart Backend");
            }
            
        }
        catch(error){
            console.log(error);
        }
        
    }

    //Filter Options
    const [type,setType] = useState("");
    const [location,setLocation] = useState("")
    const [price,setPrice] = useState(0);

    const firstUpdate = useRef(true);
    useEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current = false;
            fetchCarListings();
            return;
        }   
        let arr = [];
        arr = filterCity();  
        arr = filterType(arr);
        arr = filterPrice(arr);
        setCarListings(arr);
    },[location,type,price]);


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

    const minMax = (carData)=>{
        let min = 99999;
        let max = 0;
        carData.forEach(car=>{
            if(max <car.price){
                max = car.price;
            }
            if(min >car.price){
                min = car.price
            }
        });
        setMaxPrice(max);
        setMinPrice(min);
        setPrice(max)
    }

    //Filter Functions
    const filterPrice = (arr)=>{
        const newArr = [];

        arr.forEach(car=>{
            if(car.price <=price){
                newArr.push(car);
            }
        });
        return newArr;
    }

    const filterCity = ()=>{
        const newArr = [];
        const regex = new RegExp(location,"i");

        if(location === ""){
            return receivedData;
        }
        carListings.forEach(car=>{
            if(regex.test(car.city)){
                newArr.push(car);
            }
        });   
        return newArr;     
    };

    const filterType = (arr)=>{
        if(type === ""){
            return arr;
        }
        const newArr = [];
        arr.forEach(car=>{
            if(car.type === type){
                newArr.push(car);
            }
        })

        return newArr;
    }


    function clearFilters(){
        setCarListings(receivedData);
        setLocation("");
        setType("");
        setPrice(maxPrice);
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
                            <span>{minPrice}</span>
                            <span>{maxPrice}</span>
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
                            BtnText={"Clear"}
                            size={"medium"}
                            color={"Black"}
                            method={clearFilters}
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