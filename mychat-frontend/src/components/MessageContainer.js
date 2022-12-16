import React, { useEffect, useRef } from "react";

function MessageContainer({ messages }) {
  const messageRef = useRef();
  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div ref={messageRef} className="message-container">
      {messages.map((m, index) => (
        <div key={index} className="user-message">
          {console.log(m)}
          <div className="message bg-primary">{m.message}</div>
          {m.color}
          <div className="from-user">{m.user}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageContainer;
