const prisma = require("../db");

// Create Chat
const createChat = async (req, res) => {
  try {
    const { user1Id, user2Id } = req.body;

    const chat = await prisma.chat.create({
      data: {
        participants: {
          create: [
            {
              userId: user1Id, // String ID
            },
            {
              userId: user2Id, // String ID
            },
          ],
        },
      },
      include: {
        participants: {
          include: {
            user: true,
          },
        },
      },
    });

    res.json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get Chats
const getChats = async (req, res) => {
  try {
    const chats = await prisma.chat.findMany({
      include: {
        participants: {
          include: {
            user: true,
          },
        },
        messages: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

    const result = chats.map((chat) => ({
      id: chat.id,

      // Show all participant names
      name: chat.participants
        .map((p) => p.user.name)
        .join(" & "),

      lastMessage:
        chat.messages.length > 0
          ? chat.messages[0].text
          : "Start chatting",
    }));

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createChat,
  getChats,
};