import React, { useState, useEffect } from "react";

export default function ChatBox({ socket }) {
  const [chatItem, setChatItem] = useState([]);

  useEffect(() => {
    socket.on("audio_blob_to_client", (blob) => {
      setChatItem((prevValue) => [...prevValue, blob]);
    });
  }, []);

  return (
    <React.Fragment>
      <h1>Chat UI</h1>
      <ul>
        {chatItem.map((item, index) => {
          return <li key={index}>Dummy text</li>;
        })}
      </ul>
    </React.Fragment>
  );
}
