import RideSchema from "../../database/model/RideSchema.js";
import Ride from "../../database/repository/ride.js";


async function insertRideRoute(data, res) {
  // Parse request data and create profile object
      
    try {

        const jsonData = JSON.parse(data.data);
        const rideObj = RideSchema.create(jsonData);
        
              const payload =    await Ride.insertRide(rideObj);


              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");


              // Send success message
              res.writeHead(200);
              res.write('Ride successfully inserted!');
              res.end("\n");
            } catch (error) {
              console.error(error);
              console.log("Insert Ride Error:" + error);
            }
          };
          

 export default insertRideRoute