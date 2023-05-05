import sql from "mysql";
import {HOST,USERNAME,PASSWORD,DATABASE} from '../configs/database.js'

if(PASSWORD === ""){
    console.log("Enter MYSQL PASSWORD in config");
    process.exit(1);
}

const config = {
    host: HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    keepAlive: true
}

let connection = sql.createConnection(config);

connection.connect((err)=>{
    if(err){
        console.log(err);
        process.exit();
    }
    console.log("SQL CONNECTED TO DATABASE");
});

// To keep the connection alive and reconnect if the connection is dead
function handleDisconnect() {
    console.log('Lost connection to MySQL server.');
  
    connection.destroy(); 
  
    connection = sql.createConnection(config); 
  
    connection.connect(function(err) {
      if (err) {
        console.error('Failed to reconnect to MySQL server:', err);
        setTimeout(handleDisconnect, 2000); 
      } else {
        console.log('Successfully reconnected to MySQL server.');
      }
    });
}

connection.on('error', function(err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      console.error('MySQL error:', err);
    }
});

setInterval(function() {
    connection.query('SELECT 1', function(err, results) {
      if (err) {
        console.error('Failed to keep connection alive:', err);
      } else {
        console.log('Connection is alive.');
      }
    });
}, 60000);

//Close connection on pressing ctnl+c
process.on('SIGINT', () => {
    console.log('Received SIGINT signal, closing MySQL connection...');

    // close the MySQL connection
    connection.end((err) => {
        if (err){
          console.log(err);
        }
        console.log('MySQL connection closed!');
        
        // exit the Node.js process
        process.exit(0);
    });
});

export default connection