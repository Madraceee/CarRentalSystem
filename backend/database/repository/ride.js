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
        
        
        const queryString = `INSERT INTO Ride(rideID, lenderID, renterID, listingID, distance, rideStatus,beginDate,endDate) VALUES('${data.rideID}', '${data.lenderID}', '${data.renterID}', '${data.listingID}', '${data.distance}', '${data.rideStatus}','${data.beginDate}', '${data.endDate}' );`;
  
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

  static getAllRides(data){
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM Ride ;`,
          (err, result) => {
            if (err) {
              return reject(err + "->Database");
            }
            var activeRides = []
            for(let i=0;i<result.length;i++){
              const car = RideSchema.create(result[i]);
              activeRides.push(car);
            }
            const payload = { msg: "Active Ride Details Found", activeRide: activeRides };
            return resolve(payload);
          });
        }
      );
    }

    
  static getRideFromID(data){
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM Ride where renterID='${data.renterID}'   OR lenderID= '${data.lenderID} ;`,
          (err, result) => {
            if (err) {
              return reject(err + "->Database");
            }
            var activeRides = []
            for(let i=0;i<result.length;i++){
              const car = RideSchema.create(result[i]);
              activeRides.push(car);
            }
            const payload = { msg: "Active Ride Details Found", activeRide: activeRides };
            return resolve(payload);
          });
        }
      );
    }

}

export default Ride;