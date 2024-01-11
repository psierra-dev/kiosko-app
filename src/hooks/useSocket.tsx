import React, { useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  useEffect(() => {
    const socket = io("http://localhost:3001", {
      auth: {
        userId: 0,
      },
    });
    console.log("useffe");
    socket.auth = { userId: 1 };
    socket.on("connect", () => {
      console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
    });

    socket.on("notification", (msg) => {
      console.log(msg, "msg");
    });
  }, []);
  return [];
};

export default useSocket;
