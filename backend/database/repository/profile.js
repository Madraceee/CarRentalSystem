
import ProfileSchema from "../model/profileSchema.js";
import connection from "../index.js";

import bcrypt from 'bcryptjs';

class Login extends ProfileSchema{

    static login(data){
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM LOGIN WHERE emailId='${data.emailId}';`,(err,result)=>{
                if(err){
                    return reject(err+"->Database");
                }                
                              
                if(typeof result !== undefined && result.length===1 && bcrypt.compareSync( data.password,result[0].password)  ){
                    const data = { msg: "Login Valid", userId: result[0].userId }
                    return resolve(data);
                }
                else if(typeof result !== undefined){
                    const data = { msg : "Login Invalid"}
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

class Profile extends ProfileSchema {
    static profile(data) {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM LOGIN WHERE emailId='${data.emailId}';`, (err, result) => {
          if (err) { return reject(err + "->Database");
        }
        if (typeof result !== undefined && result.length === 1) {
          const data = {
            msg: "Profile Listing Details Found",
          profileDetails: ProfileSchema.create(result[0]),
          };
          return resolve(data);
        } else if (typeof result !== undefined) {
          const data = { msg: "Profile Not Found" };
          return resolve(data);
        } else {
          const data = { err: "Database Error" };
          return reject(data);
          }
        });
      });
    }
  }
  
module.exports={Login,Profile}