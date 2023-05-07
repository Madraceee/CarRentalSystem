class ExtendSchema {
    constructor(rideID, renterID, requestDate, status) {
      this.rideID = rideID;
      this.renterID = renterID;
      this.requestDate = requestDate;
      this.status = status;
    }
  
    static create(data) {
      return new ExtendSchema(
        data.rideID,
        data.renterID,
        data.requestDate,
        data.status
      );
    }
  }
  
  export default ExtendSchema;
  