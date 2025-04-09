const express = require( "express") 
const cors = require("cors")
const app = express()
app.use(cors());
app.get("/shubham",(req,res)=>{
    res.json([
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Johndon Doe",
      age: 21,
      city: "New York",
      profession: "Software Engineer",
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "John Emma Smith",
      age: 32,
      city: "Los Angeles",
      profession: "Graphic Designer",
    },

    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Michael Johnson",
      age: 40,
      city: "Chicago",
      profession: "Marketing Manager",
    },

    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sophia Brown",
      age: 26,
      city: "San Francisco",
      profession: "Data Scientist",
    },

    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "David Wilson",
      age: 35,
      city: "Houston",
      profession: "Financial Analyst",
    },
  ])
})


app.listen(3000,()=>{
    console.log("Server started......");
})

