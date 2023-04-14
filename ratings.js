const express =require("express")
const router =express.Router();
const mysqlConnection =require("../connection");

router.get("/",(request, response)=>{
    mysqlConnection.query(
      "select * from thecamp_movies_ratings",
       function(err,result,fields){
          if (err) response.status(404).send(err)
          response.send(result);
       }
    );
  });


 router.post("/",(req,res)=>{
    mysqlConnection.query("insert into thecamp_movies_ratings values (1,1,'good',1/2/2021)",
    function(err,rows,fields){
        if(err)
        {
            res.send(rows);  
        }
        else
        {
           console.log(err);
        }
    }
    )
    mysqlConnection.query("insert into thecamp_movies_ratings values (2,2,'bad',22/5/2023)",
    function(err,rows,fields){
        if(err)
        {
            res.send(rows);  
        }
        else
        {
           console.log(err);
        }
    }
    )
});

router.patch("/:id",(req,res)=>{
    mysqlConnection.query("update thecamp_movies_ratings set movie_length=123 where id=1",
    function(err,rows,fields){
        if(err)
        {
            res.send(rows);  
        }
        else
        {
           console.log(err);
        }
    }
    )
});
router.patch("/:id",(req,res)=>{
    mysqlConnection.query("update thecamp_movies_ratings set movie_length=123 where id=1",
    function(err,rows,fields){
        if(err)
        {
            res.send(rows);  
        }
        else
        {
           console.log(err);
        }
    }
    )
});

router.delete("/:id",(req,res)=>{
    mysqlConnection.query("delete from thecamp_movies_ratings where id=2",
    function(err,rows,fields){
        if(err)
        {
            res.send(rows);  
        }
        else
        {
           console.log(err);
        }
    }
    )
});

module.exports=router;