const express = require("express");

const {
  createChat,
  getChats,
} = require("../controllers/chatController");

const router = express.Router();

router.get("/", getChats);

router.post("/", createChat);

module.exports = router;