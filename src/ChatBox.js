import React, { useState, useEffect } from 'react';

export default function ChatBox({ socket }) {
  const [chatItem, setChatItem] = useState([]);

  useEffect(() => {
    /**
     * Receive blob chunks from server and push it into the current state.
     * socket object can also be set at context so that we don't have to pass via props.
     */

    socket.on('audio_blob_to_client', (blob) => {
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
