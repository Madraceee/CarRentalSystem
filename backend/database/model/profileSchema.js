class ProfileSchema {
    constructor(emailId, password, city, address, role) {
      this.emailId = emailId;
      this.password = password;
      this.city = city;
      this.address = address;
      this.role = role;
    }
  
    static create(data) {
      return new ProfileSchema(
        data.emailId,
        data.password,
        data.city,
        data.address,
        data.role
      );
    }
  }
  
  export default ProfileSchema;
  