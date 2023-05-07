import Extend from "../../database/repository/extend.js";


async function viewExtend(data, res) {
  // Parse request data and create profile object
      
    try {

        const jsonData = JSON.parse(data.data);
        const extendObj = Extend.create(jsonData);

        
              const payload =    await Extend.viewExtend(extendObj);


              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");


             
              let payloadStr = JSON.stringify(payload);

                res.writeHead(200);
              
              res.write(payloadStr);
              res.end("\n");
            } catch (err) {
              console.log("Display Route Error:" + err);
            }
          };
          

 export default viewExtend