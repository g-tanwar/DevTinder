const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required : true,
        maxLength: 50,
    },
    lastName: {
        type: String,

    },
    emailId: { 
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        validate(value){
            if(!["Male","Female","others"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }

    },
   photoUrl:{
    type: String,
    default: "https://wallpapers-clan.com/pfp/default/"
   },
   about: {
    type: String,
    default : "Can't talk DevTinder Only"
   },
   skills: {
    type: [String],
   },
},
{
    timestamps: true,
})

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;

// module.exports =  mongoose.model("User",userSchema);