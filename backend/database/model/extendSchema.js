class ExtendSchema {
    constructor(rideID, renterID, lenderID,requestDate, status) {
      this.rideID = rideID;
      this.renterID = renterID;
      this.lenderID=lenderID;
      this.requestDate = requestDate;
      this.status = status;
    }
  
    static create(data) {
      return new ExtendSchema(
        data.rideID,
        data.renterID,
        data.lenderID,
        data.requestDate,
        data.status
      );
    }
  }
  
  export default ExtendSchema;
  