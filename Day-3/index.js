const express = require ("express")

const app = express()

app.get("/",(req,res,next)=>{
  console.log("Hello")
  res.send("Ok")
})

app.listen(5000,()=>{
  console.log("Server Start")
})