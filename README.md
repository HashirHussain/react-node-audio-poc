## Overview

This project has used react.js (CRA), Node.js, socket.io and javaScript native media API to take audio input from system's microphones and send/receive through socket programming.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the dependencies available in `package.json` file.
If you are facing problem while installation, try again after removing `node_modules` and `package.lock.json`.

### `npm start:frontend`

Runs the app in the development mode for frontend.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm start:backend`

`server/index.js`
Run the server and start the socket connectivity with frontend.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### React Components

#### App.js

Container component holds `Mic` and `ChatBox` component. Responsible to initiate socket connectivity.

#### Mic.js

The primary component that takes the responsibility to receive audio blob object from system's microphones and emit the received blob to the server via socket.
Socket listener: `audio_blob_to_server`

#### ChatBox.js

This component receives blob object from server via `audio_blob_to_client` listener.

### Node.js Component

`server/index.js` hold the `express.js` server as well as socket.io connection.

`For more details visit each component`.

### Browser Compatibility

Works well on edge(latest), chrome and firefox.
