class RideSchema {
    constructor(rideID,lenderID,renterID, listingID, distance, rideStatus,beginDate,endDate) {
        this.rideID = rideID;
        this.lenderID = lenderID;
        this.renterID = renterID;
        this.listingID = listingID;
        this.distance = distance;
        this.rideStatus = rideStatus;
        this.beginDate=beginDate;
        this.endDate=endDate;
        
    }
  
    static create(data) {
        return new RideSchema(
          data.rideID,
          data.lenderID,
          data.renterID,
          data.listingID,
          data.distance,
          data.rideStatus,
          data.beginDate,
          data.endDate
        );
      }
      
    
  }
  
  export default RideSchema;
  