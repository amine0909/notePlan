const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const secret  = require("../config/secret")
const { check, validationResult } = require('express-validator/check');


router.post('/register', [
        // check the email
        check("email_adresse").custom(value => { 
            return User.findOne({"email":value}).then( (user) => {
                if(user) {
                    return Promise.reject("E-mail already in use")
                }

            })
        }),

    ], (req,res) => {
        console.log(req.body)
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(422).json({"errors": errors.array()})
        }

        let user = new User({
            _id: mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: User.hashingPassword(req.body.password)
        });


    user.save().then( (result) => {
        console.log(result)
        let token = jwt.sign({user: user}, secret,{expiresIn: 86400}); //24h


        res.status(201).json({
            "message": "Register successed....",
            "AuthData": user,
            "token": token
        })
    }, (err) => {
        res.status(500).json({
            "message": "There was a problem registering the user"
        })
    })
})


module.exports = router;
