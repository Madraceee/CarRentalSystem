class CarListingSchema {
    constructor(listingID, lenderID, carModel, carType, carCondition, location,imageURL) {
      this.listingID = listingID;
      this.lenderID = lenderID;
      this.carModel = carModel;
      this.carType = carType;
      this.carCondition = carCondition;
      this.location = location;
      this.imageURL = imageURL;
    }
    
    static get carConditions() {
      return ['New', 'Used', 'Very Used'];
    }
    
    
    
    static create(data) {
      return new CarListingSchema(
        data.listingID,
        data.lenderID,
        data.carModel,
        data.carType,
        data.carCondition,
        data.location,
        data.imageURL
      );
    }
  }

export default CarListingSchema