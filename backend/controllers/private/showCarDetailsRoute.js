import CarListingSchema from "../../database/model/CarListingSchema.js";
import Car from "../../database/repository/car.js";


async function showCarDetailsRoute(data, res) {
     try {
      // Attempt to fetch profile details
      const jsonData = JSON.parse(data.data); 
      const carObj = CarListingSchema.create(jsonData)
      const payload = await Car.showCarDetails(carObj);

          // Send response with payload
      let payloadStr = JSON.stringify(payload);
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
     
        res.writeHead(200);
     
      res.write(payloadStr);
      res.end("\n");
    } catch (err) {
      console.log("Display Route Error:" + err);
    }
  }  


export default showCarDetailsRoute;
