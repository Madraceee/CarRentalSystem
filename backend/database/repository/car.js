import CarListingSchema from "../model/CarListingSchema.js";
import connection from "../index.js";

class Car extends CarListingSchema {
  static async showCarDetails(data) {
    try {
      const result = await new Promise((resolve, reject) => {
        connection.query(
          `SELECT * FROM CARS;`,
          (err, result) => {
            if (err) {
              reject(err + "->Database");
            }
            resolve(result);
          }
        );
      });
     
        const car = CarListingSchema.create(result[result.length-1]);
        const data = { msg: "Car Details Found", carDetails: car };
        return data;
      
      }
     catch (err) {
      const data = { err: "Database Error" };
      return data;
    }
  }

  static insertCarDetails(data) {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT MAX(CAST(listingID AS UNSIGNED)) AS maxListingID FROM CARS;`,
        (err, result) => {
          if (err) {
            return reject(err + "->Database");
          }
          
          const maxListingID = result[0].maxListingID;
          const newListingID = maxListingID + 1;
          data.listingID = newListingID.toString();
          
          const queryString = `INSERT INTO CARS(listingID, lenderID, carModel, carType, carCondition, location, imageURL) VALUES('${data.listingID}', '${data.lenderID}', '${data.carModel}', '${data.carType}', '${data.carCondition}', '${data.location}', '${data.imageURL}')`;
  
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
  
  



}

export default Car;
