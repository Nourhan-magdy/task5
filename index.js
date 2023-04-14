const express=require("express");
const app = express();
const mysql=require("mysql")
const mysqlconnection=require("./connection");

 
 

app.listen(5000, ()=>{
    console.log("server running on localhost:5000...");
});

var mysqlConnection =mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"camp23_movies"
});

router.get("/",(request, response)=>{
    mysqlConnection.query(
      "select * from thecamp_cinema",
       function(err,result,fields){
          if (err) response.status(404).send(err)
          response.send(result);
       }
    );
});


 

const userRoute =require('./cinema/movies')
const myRouter =require('./cinema/ratings')
app.use('/cinema/movies',userRoute)
app.use('/cinema/ratings',myRouter)

 