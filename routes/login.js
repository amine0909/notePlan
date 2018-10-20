const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret  = require("../config/secret")

router.post('/login', function(req,res,next){
    User.findOne({"email": req.body.email}, null, function(err, user){
        console.log(user)
        if(err) return res.json(500, {'message':'Error on the server'})
        if(!user) {
            return res.json(401, {
                "message": "Wrong credentials"
            })
        }

        let verifyPassword = bcrypt.compareSync(req.body.password, user.password )
        if(verifyPassword == false) {
            return res.json(401,{'message': 'Wrong credentials'})
        }

        let token = jwt.sign({user: user}, secret,{expiresIn: 86400}); //24h
        return res.json(201, {
            "auth": true,
            "token": token,
            "user_id": user._id
        })
    })
})



module.exports = router;