class LoginSchema{
    constructor(emailId,password){
        this.emailId = emailId;
        this.password = password;
    }
    
    static create(data){
        return new LoginSchema(
            data.emailId,
            data.password
        );
    }
}

export default LoginSchema