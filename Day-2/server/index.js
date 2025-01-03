const express = require("express");
const cors= require('cors')

const app = express();
app.use(cors(
))

const port = 3000;

app.get("/shubham", (req, res) => {
  res.json({
    firstName: "John",
    lastName: "Doe",
    age: 21,
    grade: "A",
    subjects: ["Math", "Science", "History"],
  });
});

app.listen(port, () => {
  console.log("app start port 3000");
});
