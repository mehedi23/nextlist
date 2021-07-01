const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title : {
        type : String,
        require : [ true , "Please add a title" ],
        unique : true,
        trim : true ,
        maxlength : [ 40 , "Title can't be more than 40 charaacters" ]
    },
    description : {
        type : String , 
        require : true ,
        maxlength : [ 200 , "Description can't be more than 40 charaacters" ]
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note' , NoteSchema);