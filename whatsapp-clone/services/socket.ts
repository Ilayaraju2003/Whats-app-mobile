import { io } from "socket.io-client";

const socket = io(
  "http://192.168.1.3:5000",
  {
    transports: ["websocket"],
  }
);

export default socket;