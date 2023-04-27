import LoginSchema from "../../database/model/loginSchema.js";
import Login from "../../database/repository/login.js";

async function loginRoute(data,res){
    const jsonData = JSON.parse(data.data);
    const loginObj = LoginSchema.create(jsonData);

    try{
        const payload = await Login.login(loginObj);
        
        let payloadStr = JSON.stringify(payload);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.write(payloadStr);
        res.end("\n");
    }
    catch(err){
        console.log("Error"+err);
    } 

}

export {loginRoute};