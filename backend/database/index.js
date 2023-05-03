import sql from "mysql";
import {HOST,USERNAME,PASSWORD,DATABASE} from '../configs/database.js'

if(PASSWORD === ""){
    console.log("Enter MYSQL PASSWORD in config");
    process.exit(1);
}

const connection = sql.createConnection({
    host: HOST,
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
