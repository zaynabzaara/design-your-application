const express=require('express');
const router = express.Router();
const User =require('../models/Users');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();




router.post('/',[ 
   
    body('Name', 'This field is mandatory').notEmpty(),
    body('UserName').isString().notEmpty(),
    body('Country').isAlpha().notEmpty(),
    body('Email','Please enter a valid email').isEmail().notEmpty(),
    body('Password','Password must have more than 4 caracters').isLength({ min: 5 }).notEmpty()
], (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json( errors.array() );
    }

User.find({Email:req.body.Email})
.then(user=>{
    if (user.length){
        return res.status(400).send( [{msg:"User already exists"}])
    }

    let newUser= new User(req.body)
bcrypt.genSalt(10, (err,salt)=> {
    if(err){
    throw err
};
    bcrypt.hash(req.body.Password,salt, (err,hashedPwd)=>{
        if (err) {throw err}
        newUser.Password = hashedPwd;
        newUser.save();

        let payload ={
            userId : newUser._id
        };
        jwt.sign(payload, process.env.S_KEY, (err,token)=>{
            if (err){
                throw err
            }
            res.send({token,userName:newUser.UserName})
        })
    });

});

});
});
   









module.exports=router;