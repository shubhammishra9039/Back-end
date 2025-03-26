const express = require ('express')

const app =express()

app.get("/",(req,res,next)=>{
  res.status(200).json([
    {
      "id": 1,
      "name": "Ravi Sharma",
      "age": 20,
      "grade": "A",
      "subjects": ["Math", "Physics", "Computer Science"]
    },
    {
      "id": 2,
      "name": "Sneha Verma",
      "age": 21,
      "grade": "B+",
      "subjects": ["Biology", "Chemistry", "English"]
    },
    {
      "id": 3,
      "name": "Arjun Singh",
      "age": 22,
      "grade": "A+",
      "subjects": ["History", "Political Science", "Geography"]
    },
    {
      "id": 4,
      "name": "Pooja Mishra",
      "age": 19,
      "grade": "A",
      "subjects": ["Economics", "Business Studies", "Accountancy"]
    },
    {
      "id": 5,
      "name": "Amit Yadav",
      "age": 23,
      "grade": "B",
      "subjects": ["Physics", "Chemistry", "Mathematics"]
    }
  ]
  )
})

app.listen(4000,()=>{
  console.log("Server Started............")
})