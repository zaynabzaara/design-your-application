const express=require('express');
const router = express.Router();
const authMiddleware = require('../config/authMiddleware');
const User =require('../models/Users');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();



// call connected user
router.get('/', authMiddleware, (req,res)=> {
    User.findById(req.userId).select('-Password -__v')
    .then((user)=> {
        if (!user){
            return res.status(404).json({msg: "User not Found"});
        }
        res.status(200).json(user);
    })
    .catch ((err)=> {
        console.error(err.message);
        res.status(500).send({msg: 'Server Error'})
    })
})

//login in
router.post('/',[ 
    body('UserName','Please write your UserName').isString(),
    body('Password','Please write your Password').notEmpty().isLength({ min: 5 }),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json( [{msg: errors.array() }]);
    }
    User.findOne({UserName: req.body.UserName})
    .then(user => {
        if(!user){
return res.status(404).json([{ msg:"Please Register Before"}] )
        }
        bcrypt.compare(req.body.Password, user.Password, (err,isMatch)=>{
            if(err){
                throw (err)
            }else if(!isMatch){
                return res.json([{msg: "Wrong Password!"}])
            }else{

                
        let payload ={
            userId : user._id
        };
        jwt.sign(payload, process.env.S_KEY, (err,token)=>{
            if (err){
                throw err
            }
            res.send({token,userName:req.body.UserName})
        })
            }
        })
    })
})

module.exports = router;