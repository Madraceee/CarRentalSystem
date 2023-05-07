import Car from "../../database/repository/car.js";


async function showCarDetailsRoute(data, res) {
     try {
      // Get Method, Send params for filtering
      const payload = await Car.showCarDetails(data.params);

      // Send response with payload
      let payloadStr = JSON.stringify(payload);
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");     
      res.writeHead(200);     
      res.write(payloadStr);
      res.end("\n");

    } catch (err) {
      console.log("Display Route Error:" + err);
      res.writeHead(500);
      res.write('Could not be fetched');
      res.end("\n");
    }
  }  


export default showCarDetailsRoute;
