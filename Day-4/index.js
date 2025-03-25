const express =require ('express')

const app = express()

app.get("/",(req,res,next)=>{
  res.send([
    {
      "id": 101,
      "name": "Rahul Sharma",
      "age": 21,
      "email": "rahul.sharma@example.com",
      "course": "Computer Science",
      "grades": {
        "math": 85,
        "physics": 78,
        "computerScience": 92
      },
      "attendance": 90,
      "status": "active"
    },
    {
      "id": 102,
      "name": "Priya Verma",
      "age": 22,
      "email": "priya.verma@example.com",
      "course": "Electronics",
      "grades": {
        "math": 80,
        "physics": 85,
        "electronics": 88
      },
      "attendance": 95,
      "status": "active"
    },
    {
      "id": 103,
      "name": "Amit Singh",
      "age": 20,
      "email": "amit.singh@example.com",
      "course": "Mechanical Engineering",
      "grades": {
        "math": 75,
        "physics": 80,
        "mechanics": 82
      },
      "attendance": 85,
      "status": "active"
    },
    {
      "id": 104,
      "name": "Sana Khan",
      "age": 23,
      "email": "sana.khan@example.com",
      "course": "Information Technology",
      "grades": {
        "math": 88,
        "physics": 90,
        "computerScience": 95
      },
      "attendance": 92,
      "status": "active"
    },
    {
      "id": 105,
      "name": "Vikram Patel",
      "age": 21,
      "email": "vikram.patel@example.com",
      "course": "Civil Engineering",
      "grades": {
        "math": 78,
        "physics": 74,
        "civilDesign": 80
      },
      "attendance": 88,
      "status": "active"
    }
  ]
  )
})


app.listen(3000,()=>{
  console.log("Hello")
})