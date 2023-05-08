import CarListingSchema from "../model/CarListingSchema.js";
import connection from "../index.js";

class Car extends CarListingSchema {
  static async showCarDetails(params) {
    try {
      const result = await new Promise((resolve, reject) => {
        connection.query(
          `SELECT * FROM CARS WHERE listingID NOT IN (SELECT listingID from Ride WHERE rideStatus='Pending' OR rideStatus='Active');`,
          (err, result) => {
            if (err) {
              reject(err + "->Database");
            }
            resolve(result);
          }
        );
      });
     
        var cars = []
        for(let i=0;i<result.length;i++){
          const car = CarListingSchema.create(result[i]);
          cars.push(car);
        }
        const data = { msg: "Car Details Found", carDetails: cars };
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
          
          const queryString = `INSERT INTO CARS(listingID, lenderID, carname, type, carCondition,imageURL,address,city,price) VALUES('${data.listingID}', '${data.lenderID}', '${data.carname}', '${data.type}', '${data.carCondition}','${data.imageURL}','${data.address}','${data.city}',${data.price})`;
  
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

  static getUserCars(data){
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM CARS where lenderID='${data.emailId}';`,
          (err, result) => {
            if (err) {
              return reject(err + "->Database");
            }
            var cars = []
            for(let i=0;i<result.length;i++){
              const car = CarListingSchema.create(result[i]);
              cars.push(car);
            }
            const payload = { msg: "Car Details Found", carDetails: cars };
            return resolve(payload);
          });
        }
      );
    }

    static getNameImgFromID(data){
      return new Promise((resolve, reject) => {
        connection.query(
          `SELECT * FROM CARS where listingID='${data.listingID}';`,
            (err, result) => {
              if (err) {
                return reject(err + "->Database");
              }
              const payload = { msg: "Car Details Found", carName: result[0].carname, carImgURL: result[0].imageURL, price: result[0].price };
              return resolve(payload);
            });
          }
        );
      }

}

export default Car;
