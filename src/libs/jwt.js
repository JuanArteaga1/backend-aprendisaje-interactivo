const Token_Secreta = require("../config.js")
const jwt = require("jsonwebtoken");
module.exports = function CreateToken(payload){
    return new Promise((resolve,reject) => {
        jwt.sign({
                    payload
                },  Token_Secreta,
                {
                    expiresIn: "1d",
                },
                (err,token)=>{       
                    if(err) reject(err)
                    resolve(token)
                }       
                )
            }
    )
}


