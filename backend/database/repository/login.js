import LoginSchema from "../model/loginSchema.js";
import connection from "../index.js";

class Login extends LoginSchema{

    static login(data){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM LOGIN WHERE emailId='${data.emailId}' AND password='${data.password}';`,(err,result)=>{
                if(err){
                    return reject(err);
                }

                if(typeof result !== undefined && result.length===0){
                    const data = { msg : "Login Invalid"}
                    return resolve(data);
                }
                else if(typeof result !== undefined && result.length===1){
                    const data = { msg: "Login Valid",key: "1" }
                    return resolve(data);
                }
                else{
                    const data = {err:"Database Error"}
                    return reject(data);
                }
            })
        })
    
    }
}

export default Login;