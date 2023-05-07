import Extend from "../../database/repository/extend.js";


async function addExtend(data, res) {
  // Parse request data and create profile object
      
    try {

        const jsonData = JSON.parse(data.data);
        const extendObj = Extend.create(jsonData);

        
              const payload =    await Extend.addExtendRequest(extendObj);


              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");


              // Send success message
              res.writeHead(200);
              res.write('Extend Request successfully inserted!');
              res.end("\n");
            } catch (error) {
              console.error(error);
              console.log("Insert Request Error:" + error);
            }
          };
          

 export default addExtend