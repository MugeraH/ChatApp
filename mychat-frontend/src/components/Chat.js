import React from "react";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import { Button } from "react-bootstrap";
import ConnectesUsers from "./ConnectesUsers";

function Chat({ messages, sendMessage, closeConnection, users }) {
  return (
    <>
      <div className="leave-room">
        <Button variant="danger" onClick={() => closeConnection()}>
          Leave Room
        </Button>
      </div>

      <ConnectesUsers users={users} />
      <div className="chat">
        <MessageContainer messages={messages} />

        <SendMessageForm sendMessage={sendMessage} />
      </div>
    </>
  );
}

export default Chat;
