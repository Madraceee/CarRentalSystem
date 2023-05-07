import ProfileSchema from "../../database/model/ProfileSchema.js";
import Car from "../../database/repository/car.js";
import auth from "./auth.js";


async function showUserCars(data, res) {

    const authStatus = await auth(data,res);
    if(authStatus.auth === true){
        const jsonData = JSON.parse(data.data);
        const profileObj = ProfileSchema.create(jsonData);
        try {        
            const payload = await Car.getUserCars(profileObj);

            // Send response with payload
            let payloadStr = JSON.stringify(payload);
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Origin", "*");     
            res.writeHead(200);     
            res.write(payloadStr);
            res.end("\n");

        } catch (err) {
            console.log("User Cars Error:" + err);
            res.writeHead(500);
            res.write('Could not be fetched');
            res.end("\n");
        }
    }  
}


export default showUserCars;