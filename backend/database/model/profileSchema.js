class ProfileSchema {
    constructor(emailId,name,password, city, address, role) {
      this.emailId = emailId;
      this.name = name;
      this.password = password ? password : null;
      this.city = city? city : null;
      this.address = address? address : null;
      this.role = role? role : null;
    }
  
    static create(data) {
      return new ProfileSchema(
        data.emailId,
        data.name,
        data.password,
        data.city,
        data.address,
        data.role
      );
    }
  }
  
  export default ProfileSchema;
  