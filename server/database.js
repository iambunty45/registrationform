const mysql =require("mysql");

const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"techerudite_task"
  });

  module.exports=database;