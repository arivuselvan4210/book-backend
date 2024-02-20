const express = require("express");
const router = express.Router();
const allbooks = require("../controler/book");

router.get("/", allbooks.getallBook);
router.post("/", allbooks.addBook);
router.get("/:id", allbooks.getBook);
router.put("/:id", allbooks.updatebook);
router.delete("/:id", allbooks.deletBook);
module.exports = router;
