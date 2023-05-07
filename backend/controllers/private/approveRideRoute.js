import Ride from "../../database/repository/ride.js";


async function approveRide(data, res) {
  // Parse request data and create profile object
      
    try {

        const jsonData = JSON.parse(data.data);
        const rideObj = Ride.create(jsonData);

        
              const payload =    await Ride.approveRide(rideObj);


              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");


              // Send success message
              res.writeHead(200);
              res.write('Ride Status changed to Active!');
              res.end("\n");
            } catch (error) {
              console.error(error);
              console.log("Error:" + error);
            }
          };
          

 export default approveRide