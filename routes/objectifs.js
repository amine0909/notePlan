const express = require('express');
const router = express.Router();

const Note = require("../models/Note")
const mongoose = require("mongoose")

router.get("/list/:userId", function(req,res){
    let allNotes = []
    Note.find({user_id: req.params.userId}).sort([["createdAt","descending"]]).then((result) => {
        res.status(200).json({
            message: "Note fetched ....",
            notes: result
        })
    })


})


router.post("/add-note",function(req,res,next){
    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.userId,
        createdAt: new Date()
    })

    note.save().then((result) => {
        res.status(200).json({
            message: "Post NOTE SUCCESS",
            Note: note
        })        
    }).catch(err => {console.log(err)})
})

router.put("/update-post", function(req,res) {
    //find the note by id
     Note.findByIdAndUpdate(req.body.noteId, {
         "title": req.body.title,
         "description": req.body.description
     },(err, note) => {
        if(err) {
            return res.status(500).json({
                "error": "Server error"
            })
        }

        return res.status(200).json({
             message: "Update NOTE SUCCESS"
        })    
     })
})

router.delete("/delete-note/:noteId", function(req,res){
    Note.findByIdAndRemove({_id: req.params.noteId},(err, note) => {
        if(err) {
            return res.status(500).json({
                "error": "Server error"
            })
        }
        return res.status(200).json({
            message: "Delete NOTE SUCCESS",
            Note: note
       })  
    })
})
module.exports = router