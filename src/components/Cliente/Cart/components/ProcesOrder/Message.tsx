import React, { useEffect } from "react";

interface Prop {
  statu: string;
  setResponse: React.Dispatch<React.SetStateAction<boolean>>;
  setStateDrawer: ({ noti, order }: { noti: boolean; order: boolean }) => void;
  typePayment: string;
  text: string;
  title: string;
}

const MessageRes = ({
  statu,
  setResponse,
  setStateDrawer,
  typePayment,
  text,
  title,
}: Prop) => {
  const handleState = () => {
    setStateDrawer({ noti: false, order: false });
    setResponse(false);
  };

  const handleBack = () => {
    setResponse(false);
  };

  useEffect(() => {
    if (statu === "aprobada" && typePayment === "mp") {
      setStateDrawer({ noti: false, order: false });
      setResponse(false);
    }
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>

      {statu === "aprobada" && typePayment === "cash" && (
        <button onClick={handleState}>Listo</button>
      )}
      {statu === "error" && (
        <button onClick={handleBack}>Volver a intentarlo</button>
      )}
    </div>
  );
};

export default MessageRes;
