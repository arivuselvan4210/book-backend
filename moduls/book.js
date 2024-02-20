const mongoose = require("mongoose");

const schmaa = mongoose.Schema;
const bookSchema = new schmaa({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  disc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avel: {
    type: Boolean,
  },
  img: {
    type: String,
  },
});
module.exports = mongoose.model("Book", bookSchema);
