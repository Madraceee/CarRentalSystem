import http from "http"
import { PORT } from "./configs/server.js";

import { URLSearchParams } from "url";
import url from 'node:url';
import routes from "./controllers/router.js";

const server  = http.createServer((req,res)=>{

    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.writeHead(200);
        res.end();
      }
    
    //Get Path name
    var parsedURL = url.parse(req.url,true);
    var path = parsedURL.pathname;

    // Remove Extra charecters from start and end  /login/name/ -> login/name
    path = path.replace(/^\/+|\/+$/g,"");

    // Other information
    var qs = parsedURL.query;
    var headers = parsedURL.headers;
    var method = req.method.toLowerCase();

    // Data from POST 
    var requestData = [];

    req.on("data",chunk=>{
        requestData.push(chunk);
    });
    
    req.on("end",()=>{

        var dataBuffer ;
        if(requestData.length!=0){
            dataBuffer = Buffer.concat(requestData);
        }

        // Assign route function based on path
        let route = typeof routes[path] !== "undefined" ? routes[path] : routes["notFound"];

        let data = {
            path : path,
            queryString : qs,
            headers : headers,
            method : method
        }

        // Add query parameters to data
        if(method === "get"){
            const paramUrl = parsedURL.path.substring(parsedURL.path.indexOf('?'),parsedURL.path.length);
            const params = new URLSearchParams(paramUrl);
            data.params = params;
        }

        // Add POST data to data obj
        if(method === "post"){
            data.data = dataBuffer.toString();
        }

        if(method !== "options"){
            route(data,res);
        }        
    })
});


server.listen(PORT,()=>{
    console.log(`Server listening to PORT ${PORT}`);
})