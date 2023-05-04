import ProfileSchema from "../../database/model/profileSchema.js";
import Profile from "../../database/repository/profile.js";


async function insertProfileRoute(data, res) {
  // Parse request data and create profile object
      
    try {

        const jsonData = JSON.parse(data.data);
        const profileObj = ProfileSchema.create(jsonData);
        // Extract car details from request body
              
          
              // Insert car details into database
              const payload =    await Profile.insertProfile(profileObj);


              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");


              // Send success message
              res.writeHead(200);
              res.write('Profile successfully inserted!');
              res.end("\n");
            } catch (error) {
              console.error(error);
              console.log("Insert Profile Error:" + error);
            }
          };
          

 export default insertProfileRoute