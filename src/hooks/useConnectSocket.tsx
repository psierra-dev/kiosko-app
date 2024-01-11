import socket from "@lib/socket";
import React, { useEffect } from "react";

const useConnectSocket = (id) => {
  useEffect(() => {
    if (id) {
      socket.auth = { username: id };
      socket.connect();
    }

    return () => {
      socket.disconnect();
    };
  }, [id]);

  return <div></div>;
};

export default useConnectSocket;
