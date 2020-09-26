const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const port = 3001;

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("connection established");

  socket.on("audio_blob_to_server", (blob) => {
    if (blob) socket.emit("audio_blob_to_client", { blob });
  });

  socket.on("disconnect", () => {
    console.log("connection disconnected");
  });
});

app.get("/", (req, res) => {
  res.send(
    "<h3>If you see this message, your node server is running successfully</h3><p>You can now keep this tab aside 😇 </p>"
  );
});

server.listen(port, () => console.log(`Listening on port ${port}`));
