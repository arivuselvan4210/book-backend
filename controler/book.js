const book = require("../moduls/book");

const getallBook =
  ("/",
  async (req, res, next) => {
    try {
      const books = await book.find();
      if (!books) {
        res.status(404).json("product not fount");
      } else {
        res.status(200).json({ books });
      }
    } catch (error) {
      console.log(err);
    }
  });
const addBook =
  ("/",
  async (req, res, next) => {
    try {
      const books = new book({ ...req.body });
      await books.save();
      if (!books) {
        res.status(401).json("pleac add book");
      }
      res.status(201).json({ books });
    } catch (error) {
      console.log(error);
    }
  });
const getBook =
  ("/",
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const books = await book.findById({ _id: id });

      if (!books) {
        res.status(402).json("pleac enter velue id");
      }
      res.status(200).json({ books });
    } catch (error) {
      console.log(error);
    }
  });
const updatebook =
  ("/",
  async (req, res, next) => {
    try {
      const { name, author, disc, price, avel, img } = req.body;
      const id = req.params.id;
      const books = await book.findByIdAndUpdate(id, {
        name,
        author,
        disc,
        price,
        avel,
        img,
      });

      if (!books) {
        res.status(403).json("pleac enter velue update");
      }
      res.status(200).json("update succe");
    } catch (error) {
      next(error);
    }
  });
const deletBook =
  ("/",
  async (req, res, next) => {
    try {
      const id = req.params.id;

      const books = await book.findByIdAndDelete(id);
      const bookss = await book.find();
      // console.log(bookss);
      if (!books) {
        return res.status(402).json("pleac enter velue book");
      }
      res.status(200).json(bookss);
    } catch (error) {
      next(error);
    }
  });

exports.getallBook = getallBook;
exports.addBook = addBook;
exports.getBook = getBook;
exports.updatebook = updatebook;
exports.deletBook = deletBook;
