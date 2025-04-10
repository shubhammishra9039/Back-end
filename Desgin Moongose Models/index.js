import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.status(201).json("Hello");
});

app.listen(5000, () => {
  console.log("Server Started.......");
});
