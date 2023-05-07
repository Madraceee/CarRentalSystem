import ExtendSchema from "../model/extendSchema.js";
import connection from "../index.js"
import { resolve } from "url";
import { rejects } from "assert";

class Extend extends ExtendSchema{



    static addExtendRequest(data) {
        return new Promise((resolve, reject) => {
      
        
        const queryString = `INSERT INTO Extend VALUES('${data.rideID}', '${data.renterID}','${data.lenderID}', '${data.requestDate}', 'Requested');`;
  
        connection.query(queryString, (err, result) => {
          if (err) {
            return reject(err + "->Database");
          }
          return resolve(result);
        });
      }
    );
  };



  static viewExtend(data){
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM Extend where lenderID = '${ data.lenderID}' AND status = 'Requested' ;`,
          (err, result) => {
            if (err) {
              return reject(err + "->Database");
            }
            var extendRequested = []
            for(let i=0;i<result.length;i++){
              const car = ExtendSchema.create(result[i]);
              extendRequested.push(car);
            }
            const payload = { msg: "Extend Request Found", extendRequests: extendRequested};
            return resolve(payload);
          });
         }
       );
    }

    static updateExtend(data){
        return new Promise((resolve, reject) => {

            if(data.status=='Granted')
            {
                connection.query(
                    `UPDATE Ride set endDate = '${data.requestDate}' WHERE rideID = '${data.rideID}' ;`,
                      (err, result) => {
                        if (err) {
                          return reject(err + "->Database");
                        }
                        
                        
                        const payload = { msg: "Ride ToDate Updated"};
                        return resolve(payload);
                      });

                connection.query(
                        `UPDATE Extend set status = '${data.status}' WHERE rideID = '${data.rideID}' ;`,
                          (err, result) => {
                            if (err) {
                              return reject(err + "->Database");
                            }
                            
                            
                            const payload = { msg: "Extend Status Updated"};
                            return resolve(payload);
                          });


            }

            if(data.status== 'Rejected')
            {
                connection.query(
                    `UPDATE Ride SET rideStatus = 'Completed', distance = '${data.distance}' WHERE rideID = '${data.rideID}';
                    ;`,
                      (err, result) => {
                        if (err) {
                          return reject(err + "->Database");
                        }
                        
                        
                        const payload = { msg: "Distance Added and Ride Completed"};
                        return resolve(payload);
                      }); 

                      connection.query(
                        `UPDATE Extend set status = '${data.status}' WHERE rideID = '${data.rideID}' ;`,
                          (err, result) => {
                          
                            }
                         );

            }

          
}
        );
}


}

export default Extend;