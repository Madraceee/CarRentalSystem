import connection from "./database/index.js";
import http from "http"

const PORT = 12345;

const server  = http.createServer((req,res)=>{
    
});


server.listen(PORT,()=>{
    console.log(`Server listening to PORT ${PORT}`);
})