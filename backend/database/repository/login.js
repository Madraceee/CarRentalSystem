import LoginSchema from "../model/loginSchema.js";
import connection from "../index.js";

class Login extends LoginSchema{

    static login(data){
        connection.query(`SELECT * FROM LOGIN WHERE emailId='${data.emailId}' AND password='${data.password}';`,function(err,result){
            if(err){
                return { error: "SQL Error"};
            }

            if(result.length === 0)
                return { msg : "Login Invalid"}
            else{
                return  { msg: "Login Valid",
                          key: "1"
                        }
            }
            
        }
    )}
}

export default Login;