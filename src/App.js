import React from "react";
import socketIOClient from "socket.io-client";
import Mic from "./Mic";
import ChatBox from "./ChatBox";
import "./App.css";
const ENDPOINT = process.env.REACT_APP_SOCKET_ENDPOINT;

let socket = null;
export default class App extends React.Component {
  constructor(props) {
    console.log("ENDPOINT", ENDPOINT);
    super(props);
    socket = socketIOClient(ENDPOINT);
    this.onRecordingReceive = this.onRecordingReceive.bind(this);
    this.state = {
      record: false,
    };
  }

  onRecordingReceive(blob) {
    if (socket) socket.emit("audio_blob_to_server", blob);
  }

  render() {
    return (
      <div className="App">
        <h1>Audio listener</h1>
        <p>
          allow access to your system's mic and hit play button. Hit stop button
          to stop the socket events.
        </p>
        <Mic onRecordingReceive={this.onRecordingReceive}></Mic>
        <ChatBox socket={socket}></ChatBox>
      </div>
    );
  }
}
