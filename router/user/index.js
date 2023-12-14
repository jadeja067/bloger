const express = require("express");
const router = express.Router();
const user = require("../../controller/user");
router
  .get("/", user.getAllItems)
  .get("/:id", user.getOneItem)
  .post("/", user.createItem)
  .patch("/:id", user.updateItem)
  .delete("/:id", user.DeleteItem);

exports.router = router;
