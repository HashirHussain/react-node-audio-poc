import React from "react";

const getDefaultState = () => {
  return { recording: false, src: null, dataChunks: [] };
};

export default class Mic extends React.Component {
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.recorder = null;
    this.state = getDefaultState();
  }
  componentWillMount() {
    this.bindNavigator();
  }
  componentWillUnmount() {
    this.recorder = null;
    this.setState(getDefaultState());
  }
  bindNavigator() {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    try {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        this.recorder = new MediaRecorder(stream);
        this.recorder.onStop = this.onStop;
        this.recorder.addEventListener(
          "dataavailable",
          this.onRecording.bind(this)
        );
      });
    } catch (e) {
      console.log(e);
    }
  }
  onRecording(e) {
    if (this.props.onRecordingReceive) {
      this.props.onRecordingReceive(e.data);
    }

    const dataChunks = this.state.dataChunks;
    dataChunks.push(e.data);

    this.setState({
      dataChunks,
    });
  }
  onStart(e) {
    if (this.recorder && this.recorder.state === "inactive") {
      this.recorder.start(100);
      this.setState({ recording: true });
    }
  }
  onStop(e) {
    if (this.recorder && this.recorder.state !== "inactive") {
      this.setState({ recording: false });
      this.recorder.stop();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.onStart} disabled={this.state.recording === true}>
          Start
        </button>
        <button onClick={this.onStop} disabled={this.state.recording === false}>
          Stop
        </button>
      </div>
    );
  }
}
