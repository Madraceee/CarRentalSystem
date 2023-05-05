import RideSchema from "../model/RideSchema.js";
import connection from "../index.js";

class Ride extends RideSchema{
    static bookRide(data){
        return new Promise((resolve,reject)=>{
            connection.query("")
        })
    }
}