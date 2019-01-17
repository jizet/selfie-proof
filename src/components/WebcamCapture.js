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
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          // height={1280}
          ref={this.setRef}
          screenshotQuality={1}
          screenshotFormat="image/jpeg"
          // width={720}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
      </div>
    );
  }
}

export default WebcamCapture