const express = require('express');

const app = express()

app.get("/",(req,res,next)=>{
  res.status(200).json("Ok ji")
})


app.listen(5000,()=>{
  console.log("server Start")
})