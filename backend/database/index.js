import sql from "mysql";
import {USERNAME,PASSWORD,DATABASE} from '../configs/database.js'

const connection = sql.createConnection({
    host: "localhost",
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        process.exit();
    }
    console.log("SQL CONNECTED TO DATABASE");
});


export default connection
