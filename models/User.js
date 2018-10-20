const express = require("express")
const mongoose = require("mongoose")
require('mongoose-type-email');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: [mongoose.SchemaTypes.Email, String]    
    },
    password: String
})

userSchema.statics.hashingPassword = function (password){
    let hash = bcrypt.hashSync(password, 10);
    return hash;    
}

userSchema.statics.verifyPassword = function(enterPassword, hashedPassword) {
    if(bcrypt.compare(enterPassword, hashedPassword )) {
        return true
    } 
       return false;
}


module.exports = mongoose.model("User", userSchema);