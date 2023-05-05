class ProfileSchema {
    constructor(emailId,name,password, city, address, role,imageURL) {
      this.emailId = emailId;
      this.name = name ? name : null;
      this.password = password ? password : null;
      this.city = city? city : null;
      this.address = address? address : null;
      this.role = role? role : null;
      this.imageURL = imageURL? imageURL:null;
    }
  
    static create(data) {
      return new ProfileSchema(
        data.emailId,
        data.name,
        data.password,
        data.city,
        data.address,
        data.role,
        data.imageURL
      );
    }
  }
  
  export default ProfileSchema;
  