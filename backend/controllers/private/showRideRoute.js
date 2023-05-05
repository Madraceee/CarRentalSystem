import RideSchema from "../database/model/RideSchema.js";
import Ride from "../../database/repository/ride.js";



async function displayRide(data, res) {
   
    try {
      

      const jsonData = JSON.parse(data.data); 
      const rideObj = RideSchema.create(jsonData)
      const payload = await Ride.showRide(rideObj);

     
     let payloadStr = JSON.stringify(payload);

      res.setHeader("Content-Type", "application/json");

    res.setHeader("Access-Control-Allow-Origin", "*");

      if (payload.msg === "Ride Not Found") {
        res.writeHead(404);
      } else {
        res.writeHead(200);
      }
      res.write(payloadStr);
      res.end("\n");
    } catch (err) {
      console.log("Display Route Error:" + err);
    }
  }  


export default displayRide;
