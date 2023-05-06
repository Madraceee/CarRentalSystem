class RideSchema {
    constructor(rideID,lenderID,renterID, listingID, duration,distance, rideStatus) {
        this.rideID = rideID;
        this.lenderID = lenderID;
        this.renterID = renterID;
        this.listingID = listingID;
        this.duration = duration;
        this.distance = distance;
        this.rideStatus = rideStatus;
        
    }
  
    static create(data) {
        return new RideSchema(
          data.rideID,
          data.lenderID,
          data.renterID,
          data.listingID,
          data.duration,
          data.distance,
          data.rideStatus
        );
      }
      
    
  }
  
  export default RideSchema;
  