const express =require("express")
const router =express.Router();
const mysqlConnection =require("../connection");

router.get("/",(request, response)=>{
    mysqlConnection.query(
      "select * from thecamp_cinema",
       function(err,result,fields){
          if (err) response.status(404).send(err)
          response.send(result);
       }
    );
  });


 router.post("/",(req,res)=>{
    mysqlConnection.query("insert into thecamp_cinema values (3,'jumanji',137,'lila')",
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
    mysqlConnection.query("insert into thecamp_cinema values (4,'me before you',130,'john')",
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
    mysqlConnection.query("update thecamp_cinema set movie_length=123 where id=1",
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
    mysqlConnection.query("update thecamp_cinema set movie_length=123 where id=1",
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
    mysqlConnection.query("delete from thecamp_cinema where id=2",
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