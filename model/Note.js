const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title : {
        type : String,
        require : [ true , "Please add a title" ],
        unique : true,
        trim : true ,
        maxLength : [ 40 , "Title can't be more than 40 charaacters" ]
    },
    description : {
        type : String , 
        require : true ,
        maxLength : [ 200 , "Description can't be more than 40 charaacters" ]
    }
})

module.exports = mongoose.model.Note || mongoose.model('Note' , NoteSchema);