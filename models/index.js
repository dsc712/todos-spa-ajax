var mongoose = require("mongoose") ;
mongoose.set('debug' , true) ;  // it sets the dbugging mode to true - which allows us to see what's happening when our database is failing

// mongoose.connect('mongodb://localhost/myapp');
mongoose.connect("mongodb://localhost/todo_api") ;

mongoose.Promise = global.Promise ; // It allows us to use promise syntax , instead of using ugly and complex nested callbacks

module.exports.Todo = require("./todo") ;