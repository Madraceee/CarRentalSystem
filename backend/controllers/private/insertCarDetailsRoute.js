import CarListingSchema from "../../database/model/CarListingSchema.js";
import Car from "../../database/repository/car.js";


async function insertCarDetailsRoute(data, res) {
  // Parse request data and create profile object
      
    try {

        const jsonData = JSON.parse(data.data);
        const carObj = CarListingSchema.create(jsonData);
        // Extract car details from request body
              
          
              // Insert car details into database
              const payload =    await Car.insertCarDetails(carObj);


              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");


              // Send success message
              res.write('Car successfully inserted!');
            } catch (error) {
              console.error(error);
              console.log("Insert Car Error:" + error);
            }
          };
          

 export default insertCarDetailsRoute