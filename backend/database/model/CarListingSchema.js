class CarListingSchema {
    constructor(listingID, lenderID, carModel, carType, carCondition, listingStatus, isElectric) {
      this.listingID = listingID;
      this.lenderID = lenderID;
      this.carModel = carModel;
      this.carType = carType;
      this.carCondition = carCondition;
      this.listingStatus = listingStatus || 'Active';
      this.isElectric = isElectric || false;
    }
    
    static get carConditions() {
      return ['New', 'Used', 'Very Used'];
    }
    
    static get listingStatuses() {
      return ['Active', 'Inactive'];
    }
    
    static create(data) {
      return new CarListing(
        data.listingID,
        data.lenderID,
        data.carModel,
        data.carType,
        data.carCondition,
        data.listingStatus,
        data.isElectric
      );
    }
  }

export default CarListingSchema