import RideSchema from "../model/RideSchema.js";
import connection from "../index.js"

class Ride extends RideSchema{



    static insertRide(data) {
        return new Promise((resolve, reject) => {
        connection.query(`SELECT MAX(CAST(rideID AS UNSIGNED)) AS maxRideID FROM Ride;`,
        (err, result) => {
        if (err) {
        return reject(err + "->Database");
        }
        
        const maxRideID = result[0].maxRideID;
        const newRideID = maxRideID + 1;
        data.rideID = newRideID.toString();
        
        
        const queryString = `INSERT INTO Ride(rideID, lenderID, renterID, listingID, duration, distance, rideStatus) VALUES('${data.rideID}', '${data.lenderID}', '${data.renterID}', '${data.listingID}', '${data.duration}', '${data.distance}', '${data.rideStatus}')`;
  
        connection.query(queryString, (err, result) => {
          if (err) {
            return reject(err + "->Database");
          }
          return resolve(result);
        });
      }
    );
  });
  }



  static showRide(data) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM Ride WHERE rideID='${data.rideID}';`, (err, result) => {
        if (err) { 
          return reject(err + "->Database");
        }

        if (typeof result !== undefined && result.length === 1) {
          const data =  {
                          msg: "Ride Details Found",
                          rideDetails: RideSchema.create(result[0]),
                        };
          return resolve(data);
        } else if (typeof result !== undefined) {
            const data = { msg: "Ride Not Found" };
            return resolve(data);
        } else {
            const data = { err: "Database Error" };
            return reject(data);
          }
      });
    });
  }

}

export default Ride;