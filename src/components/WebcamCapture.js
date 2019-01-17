import React, {Component} from 'react'
import Webcam from "react-webcam";


class WebcamCapture extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenshot: ''
    }
  }
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ screenshot: imageSrc})
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
      </div>
    );
  }
}

export default WebcamCapture