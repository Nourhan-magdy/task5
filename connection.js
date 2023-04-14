var mysqlConnection =mysql.createconnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"camp23_movies"
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("connection not failed");
    }
    else
    {
       console.log("connection failed");
    }
}
)

module.exports = mysqlConnection;