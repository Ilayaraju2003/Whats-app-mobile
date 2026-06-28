const prisma = require("../db");

const createMessage = async (req, res) => {
  try {
    const { text, senderId, chatId } = req.body;

    console.log("BODY:", req.body);

    const user = await prisma.user.findUnique({
      where: { id: senderId },
    });

    const chat = await prisma.chat.findUnique({
      where: { id: chatId },
    });

    console.log("USER:", user);
    console.log("CHAT:", chat);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (!chat) {
      return res.status(404).json({
        error: "Chat not found",
      });
    }

    const message = await prisma.message.create({
      data: {
        text,
        senderId,
        chatId,
      },
      include: {
        sender: true,
      },
    });

    console.log("MESSAGE SAVED:", message);

    res.json(message);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await prisma.message.findMany({
      where: {
        chatId,
      },
      include: {
        sender: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    res.json(messages);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createMessage,
  getMessages,
};