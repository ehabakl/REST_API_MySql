require('dotenv').config()
const mysql = require("mysql2")

const pool = mysql.createPool({
  host:process.env.DB_HOST ,  
  user:process.env.DB_USER,  
  database: process.env.DB_NAME,  
  password:process.env.DB_PASSWORD,  
})

let sql1 = "SELECT * FROM entities_table"
let sql2 = "SELECT * FROM members_table"
let sql3 = "SELECT * FROM entities_members_table"

pool.execute(sql1,function(err,results){
    if(err) throw err;

    console.log(results)
})
pool.execute(sql2,function(err,results){
    if(err) throw err;

    console.log(results)
})
pool.execute(sql3,function(err,results){
    if(err) throw err;

    console.log(results)
})

module.exports = pool.promise()