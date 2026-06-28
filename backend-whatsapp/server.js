require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const messageRoutes = require("./routes/messageRoutes");
const socketHandler = require("./socket/socketHandler");

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");






const app = express();



app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Server Running");
});


app.use("/messages", messageRoutes);


app.use("/users", userRoutes);
app.use("/messages", messageRoutes);
app.use("/chats", chatRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


socketHandler(io);


app.get("/test-users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.get("/debug", async (req, res) => {
  const users = await prisma.user.findMany();
  const chats = await prisma.chat.findMany();

  res.json({
    users,
    chats,
  });
});


server.listen(5000, () => {
  console.log("Server running on 5000");
});