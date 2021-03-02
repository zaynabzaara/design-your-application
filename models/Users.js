const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    Name : {
        type : String,
        required : true,
    },
    UserName:{
        type : String,
        required : true,
        unique : true,
        minlength : 3,
    },
    Country : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        required : true,
        unique :true,
    },
    Password : {
        type : String,
        unique : true,
    },
    Created_at: {
        type: Date,
        default: Date.now
    }
   
    })

   const User = mongoose.model("User" , UserSchema );
   module.exports = User;