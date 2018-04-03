/* global $*/

$(document).ready(function(){
    
    $.getJSON("/api/todos")
    .then(addTodos)
    .catch(function(err){
        console.log(err) ;
    }) ;
    
    $("#todoInput").keypress(function(){
	
	  if( event.which == 13){
	      createTodo() ;
	   }
	
	}) ;

    $(".list").on("click" , "span" , function(event){
        event.stopPropagation() ;
        removeTodo($(this).parent()) ;
    }) ;
    
    $(".list").on("click" , "li" , function(){
       updateTodo($(this)) ;
    });
}) ;

function addTodos(todos){
    // code for adding todos
    
    todos.forEach(function(todo){
        addTodo(todo) ;
    }) ;
}

function addTodo(todo){
    // code to add visible affects on adding new todo
        var newTodo = $("<li class='task' >"+ todo.name + "<span>X</span></li>") ;
        newTodo.data('id',todo._id) ;
        newTodo.data('completed',todo.completed) ;
        if(todo.completed){
            newTodo.addClass("done") ;
        }
        $(".list").append(newTodo) ;   
}

function createTodo(){
    var usrInput = $("#todoInput").val() ;
    $.post("/api/todos",{name : usrInput })  // for posting new todo in our database through our api 
    .then(function(newTodo){
        addTodo(newTodo);
         $("#todoInput").val("") ;
    }).catch(function(err){
        console.log(err) ;
    }) ;
   
}
function removeTodo(todo){
        var clickedTodo =  todo.data('id') ;
        var deleteURL = "/api/todos/" + clickedTodo ;
        $.ajax({
            method : "delete" ,
            url : deleteURL 
        }).then(function(msg){
            todo.remove() ;
            console.log(msg) ;
        }).catch(function(err){
            console.log(err) ;
        }) ;
}
function updateTodo(todo){
    var updatedUrl = "/api/todos/" + todo.data('id') ;
    var isDone = !todo.data('completed') ;
    var updateData = { completed : isDone };
    
    $.ajax({
        method : "put" ,
        url : updatedUrl , 
        data : updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass("done") ;
        todo.data("completed" , isDone) ;
    }).catch(function(err){
        console.log(err) ;
    });
}




