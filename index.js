const express = require("express");
const mongoss = require("mongoose");
const app = express();
const books = require("./router/bookRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://book-forntend-rho.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use("/", books);
mongoss
  .connect(
     "mongodb+srv://arivuselvan4210:Arivu0707@cluster0.qvdusye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected");
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("lanched");
    });
  })
  .catch((err) => {
    console.log(err);
  });
