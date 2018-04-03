var db = require("../models") ;

exports.getTodos = function(req,res){
    
    db.Todo.find().
    then(function(todos){
        res.json(todos) ;
    }).catch(function(err){
        res.send(err) ;
    });
    
} ;

exports.createTodo = function(req,res){
    
  console.log(req.body) ;
  db.Todo.create(req.body).
  then(function(newTodo){
      res.json(newTodo) ;
  }).catch(function(err){
      res.send(err) ;
  }) ;
   
} ;

exports.getTodo = function(req,res){
   
   db.Todo.findById(req.params.todoId). 
   then(function(foundTodo){
       res.json(foundTodo) ;
   }).catch(function(err){
       res.send(err) ;
   }) ;
   
} ;

exports.putTodo = function(req , res){
    
    db.Todo.findOneAndUpdate({ _id: req.params.todoId } , req.body , {new : true}).   // { new : true } is responsible for responding with new updated data
    then(function(updatedTodo){
        res.json(updatedTodo) ;
    }).catch(function(err){
       res.send(err) ; 
    });
    
} ;

exports.deleteTodo = function(req,res){
   db.Todo.remove({_id: req.params.todoId})
   .then(function(){
       res.json({ msg : "we deleted it!!"}) ;
   })
   .catch(function(err){
       res.send(err) ;
   });
} ;


module.exports = exports ;