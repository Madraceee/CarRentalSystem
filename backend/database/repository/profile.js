
import ProfileSchema from "../model/ProfileSchema.js";
import connection from "../index.js";

import bcrypt from 'bcryptjs';

class Profile extends ProfileSchema {

    static login(data){
      return new Promise((resolve,reject)=>{
          connection.query(`SELECT * FROM PROFILE WHERE emailId='${data.emailId}';`,(err,result)=>{
              if(err){
                  return reject(err+"->Database");
              }                
                            
              if(typeof result !== undefined && result.length===1 && bcrypt.compareSync( data.password,result[0].password)  ){
                  const data = { msg: "Login Valid", emailId: result[0].emailId , role:result[0].role}
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

    static profile(data) {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM PROFILE WHERE emailId='${data.emailId}';`, (err, result) => {
          if (err) { 
            return reject(err + "->Database");
          }

          if (typeof result !== undefined && result.length === 1) {
            const data =  {
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

    static insertProfile(data) {
      return new Promise((resolve, reject) => {
      
            const queryString = `INSERT INTO PROFILE VALUES('${data.emailId}', '${data.name}', '${data.password}', '${data.city}', '${data.address}', '${data.role}', '${data.imageURL}')`;
    
            connection.query(queryString, (err, result) => {
              if (err) {
                return reject(err + "->Database");
              }
              return resolve(result);
            });
          }
        );
      };
    }

  
export default Profile