var mongoose = require('mongoose') ;

// creating schema
var todoSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : "Name cannot be blank"
    } , 
    
    completed : {
        type : Boolean ,
        default : false 
    } ,
    created_date : {
        type : Date , 
        default : Date.now
    }
    
}) ;

// compiling schema into a model
var Todo = mongoose.model("Todo" , todoSchema) ;
module.exports = Todo ;