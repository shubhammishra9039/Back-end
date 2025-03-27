const express = require ('express')

const app= express()

app.get ("/",(req,res,next)=>{

  res.status(200).json({
    "students": [
      {
        "name": "Rahul Sharma",
        "age": 21,
        "grade": "A",
        "subjects": ["Math", "Physics", "Chemistry"]
      },
      {
        "name": "Priya Verma",
        "age": 22,
        "grade": "B",
        "subjects": ["Biology", "Chemistry", "English"]
      },
      {
        "name": "Amit Kumar",
        "age": 20,
        "grade": "A+",
        "subjects": ["Computer Science", "Math", "English"]
      },
      {
        "name": "Neha Singh",
        "age": 23,
        "grade": "B+",
        "subjects": ["History", "Political Science", "Economics"]
      },
      {
        "name": "Vikram Patil",
        "age": 21,
        "grade": "A",
        "subjects": ["Physics", "Math", "Computer Science"]
      }
    ]
  }
  )
})

app.listen(5000,()=>{
  console.log("server Strated.............")
})