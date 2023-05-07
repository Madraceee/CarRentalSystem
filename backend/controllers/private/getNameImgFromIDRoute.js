import Ride from "../../database/repository/car.js";

async function getNameImgFromID(data, res) {
   
    try {
      
      const jsonData = JSON.parse(data.data); 
      const carObj = Car.create(jsonData)
      const payload = await Ride.getRideFromID(carObj);

     
     let payloadStr = JSON.stringify(payload);

      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");

      if (payload.msg === "Car Name+Img Not Found") {
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


export default getNameImgFromID;
