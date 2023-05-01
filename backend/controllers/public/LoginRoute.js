import LoginSchema from "../../database/model/loginSchema.js";
import Login from "../../database/repository/login.js";

import { JWT_SECRET } from "../../configs/server.js";
import jwt from 'jsonwebtoken';

async function loginRoute(data,res){
    const jsonData = JSON.parse(data.data);
    const loginObj = LoginSchema.create(jsonData);

    try{
        const payload = await Login.login(loginObj); 

        if(payload.msg === "Login Valid"){
            var token = jwt.sign({id: payload.userId},JWT_SECRET,{
                expiresIn: 86400
            });        
            payload.token = token;
        }
        

        let payloadStr = JSON.stringify(payload);     
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        if(payload.msg === "Login Invalid"){
            res.writeHead(401);
        }
        else{
            res.writeHead(200);
        }
        res.write(payloadStr);
        res.end("\n");      
    }
    catch(err){
        console.log("Login Route Error:"+err);
    } 

}

export {loginRoute};