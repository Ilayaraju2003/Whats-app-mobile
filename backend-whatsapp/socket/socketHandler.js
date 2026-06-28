module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("join_chat", (chatId) => {
      socket.join(chatId);

      console.log(
        `${socket.id} joined ${chatId}`
      );
    });

    socket.on("send_message", (message) => {
      io.to(message.chatId).emit(
        "receive_message",
        message
      );
    });

    socket.on("disconnect", () => {
      console.log("User Disconnected");
    });
  });
};