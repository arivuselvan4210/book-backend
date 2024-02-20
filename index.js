const express = require("express");
const mongoss = require("mongoose");
const app = express();
const books = require("./router/bookRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", books);
mongoss
  .connect(
    "mongodb+srv://book:book0101@cluster0.sznltjj.mongodb.net/?retryWrites=true&w=majority"
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
