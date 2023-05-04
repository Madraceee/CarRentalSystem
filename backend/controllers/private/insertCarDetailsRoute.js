import CarListingSchema from "../../database/model/CarListingSchema.js";
import Car from "../../database/repository/car.js";
import auth from "./auth.js";

async function insertCarDetailsRoute(data, res) {

    const authStatus = await auth(data,res);
    if(authStatus.auth === true){
      try {

          const jsonData = JSON.parse(data.data);
          const carObj = CarListingSchema.create(jsonData);
          // Extract car details from request body           
            
          // Insert car details into database
          const payload =    await Car.insertCarDetails(carObj);


          res.setHeader("Content-Type", "application/json");
          res.setHeader("Access-Control-Allow-Origin", "*");

          // Send success message
          res.writeHead(200);
          res.write('Car successfully inserted!');
          res.end("\n");
      } catch (error) {
        console.error(error);
        console.log("Insert Car Error:" + error);
        res.writeHead(500);
        res.write('Car Insertion unsuccessfull');
        res.end("\n");
      }
    }
};
          

 export default insertCarDetailsRoute