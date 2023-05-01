import { JWT_SECRET } from "../../configs/server.js";
import jwt from 'jsonwebtoken';

async function auth(data,res){
    if(data.method === "get"){
        res.writeHead(405);
        res.end("\n")
        return {auth:false}
    }
    const jsonData = JSON.parse(data.data);
    const token = jsonData.token;

    if (!token) {
        res.writeHead(403);
        res.end("\n")
        return {auth:false}
    }
    
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        console.log(decoded);
        return {auth:true, data: decoded}
    }catch (err) {
        res.writeHead(401);
        res.write("Invalid Token")
        res.end("\n")
        return {auth:false}
    }    
}

export default auth;