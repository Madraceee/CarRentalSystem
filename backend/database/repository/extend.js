import ExtendSchema from "../model/extendSchema.js";
import connection from "../index.js"

class Ride extends RideSchema{



    static addExtendRequest(data) {
        return new Promise((resolve, reject) => {
      
        
        const queryString = `INSERT INTO Extend VALUES('${data.rideID}', '${data.renterID}', '${data.requestDate}', 'Requested');`;
  
        connection.query(queryString, (err, result) => {
          if (err) {
            return reject(err + "->Database");
          }
          return resolve(result);
        });
      }
    );
  };

  
  }
