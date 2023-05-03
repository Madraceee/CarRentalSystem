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
}

export default Car;
