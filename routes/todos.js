var express = require("express") ;
var router  = express.Router() ;
var helper = require("../helpers/todos") ;

router.route("/")
 .get(helper.getTodos) 
 .post(helper.createTodo) ;
 
router.route("/:todoId")
 .get(helper.getTodo) 
 .put(helper.putTodo)
 .delete(helper.deleteTodo)  ;

module.exports = router ;
