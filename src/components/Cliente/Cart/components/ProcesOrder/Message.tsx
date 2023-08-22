import React, { useEffect } from "react";

interface Prop {
  state: string;
  setResponse: React.Dispatch<React.SetStateAction<boolean>>;
  setStateDrawer: ({ noti, order }: { noti: boolean; order: boolean }) => void;
  typePayment: string;
  text: string;
}

const MessageRes = ({
  state,
  setResponse,
  setStateDrawer,
  typePayment,
  text,
}: Prop) => {
  const handleState = () => {
    setStateDrawer({ noti: false, order: false });
    setResponse(false);
  };

  const handleBack = () => {
    setResponse(false);
  };

  useEffect(() => {
    if (state === "aprobada" && typePayment === "mp") {
      setStateDrawer({ noti: false, order: false });
      setResponse(false);
    }
  }, []);
  return (
    <div>
      <img src="" alt="" />

      <p>{text}</p>

      {state === "aprobada" && typePayment === "ef" && (
        <button onClick={handleState}>Listo</button>
      )}
      {state === "error" && (
        <button onClick={handleBack}>Volver a intentarlo</button>
      )}
    </div>
  );
};

export default MessageRes;
