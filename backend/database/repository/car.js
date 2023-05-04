import CarListingSchema from "../model/CarListingSchema.js";
import connection from "../index.js";

class Car extends CarListingSchema {
  static async showCarDetails(data) {
    try {
      const result = await new Promise((resolve, reject) => {
        connection.query(
          `SELECT * FROM CARS WHERE listingID='${data.listingID}';`,
          (err, result) => {
            if (err) {
              reject(err + "->Database");
            }
            resolve(result);
          }
        );
      });
      if (result.length === 1) {
        const car = CarListingSchema.create(result[0]);
        const data = { msg: "Car Details Found", carDetails: car };
        return data;
      } else if (result.length === 0) {
        const data = { msg: "Car Listing Not Found" };
        return data;
      }
    } catch (err) {
      const data = { err: "Database Error" };
      return data;
    }
  }

  static insertCarDetails(data) {
    return new Promise((resolve, reject) => {
      const queryString = `INSERT INTO CARS(listingID, lenderID, carModel, carType, carCondition, listingStatus, isElectric) VALUES('${data.listingID}', '${data.lenderID}', '${data.carModel}', '${data.carType}', '${data.carCondition}', '${data.listingStatus}', ${data.isElectric})`;
  
      connection.query(queryString, (err, result) => {
        if (err) {
          return reject(err + "->Database");
        }
        return resolve(result);
      });
    });
  }
  



}

export default Car;
