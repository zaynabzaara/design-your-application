const jwt = require('jsonwebtoken');
require('dotenv').config();


const authMiddleware = (req, res, next) => {
    let token = req.header('auth-token')
    if (!token){
        return res.status(401).json({msg: "Please Register Before "})
    }
    jwt.verify(token,process.env.S_KEY,(err,payload)=>{
        if (err){
            throw err
        }
        req.userId= payload.userId
        next()
    })
}

module.exports = authMiddleware;

