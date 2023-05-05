class CarListingSchema {
    constructor(listingID, lenderID, carname, type, carCondition,imageURL,address,city,price) {
      this.listingID = listingID;
      this.lenderID = lenderID;
      this.carname = carname;
      this.type = type;
      this.carCondition = carCondition;
      this.imageURL = imageURL;
      this.address = address;
      this.city = city;
      this.price = price;
    }
    
    static get carConditions() {
      return ['New', 'Used', 'Very Used'];
    }
    
    
    
    static create(data) {
      return new CarListingSchema(
        data.listingID,
        data.lenderID,
        data.carname,
        data.type,
        data.carCondition,
        data.imageURL,
        data.address,
        data.city,
        data.price
      );
    }
  }

export default CarListingSchema