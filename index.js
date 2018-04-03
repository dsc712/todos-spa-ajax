var express = require("express") ,
    app     = express(),
    port    = process.env.PORT || 3000 ,
    bodyParser = require("body-parser") ;
    
var todoRoutes = require("./routes/todos");

// these two statements written below should be written before routes
app.use(bodyParser.json()) ;   // basically tells the system that you want json to be used.
app.use(bodyParser.urlencoded({etended:true}) ) ;/*

basically tells the system whether you want to use a simple algorithm 
for shallow parsing (i.e. false) or complex algorithm for deep parsing
that can deal with nested objects (i.e. true).

*/

app.use(express.static(__dirname + "/views")) ;
app.use(express.static(__dirname + "/public")) ;
app.use("/api/todos" , todoRoutes) ;


app.get("/",function(req , res){
  res.sendFile("index.html") ;   
});

app.listen(port , function(){
    
     console.log("server is started on port " + port ) ;
}) ;