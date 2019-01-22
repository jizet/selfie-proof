import React, {Component} from 'react'
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const Content = styled.div`
`

const Footer = styled.div``

class WebcamCapture extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenshot: '',
      rawImage: '',
      open: false
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ screenshot: ''})
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    var strImage = imageSrc.replace(/^data:image\/[a-z]+;base64,/, "");
    this.setState({ rawImage: strImage})
    this.setState({ screenshot: imageSrc})
    this.handleClickOpen();
  };

  submitImage = () => {
    fetch('https://adico.westeurope.cloudapp.azure.com/api/demo/selfie', {
      method: 'POST',
      body: JSON.stringify({
        ContentType: 'image/jpeg',
        Content: this.state.rawImage
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( res => console.log(res))
    .catch( error => console.log(error))
    this.setState({ open: false });
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
      screenshotQuality: 1,
      imageSmoothing: true
    };

    return (
      <Container>
        <Content>
          <Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </Content>
        <Footer>
          <Button
            variant="contained"
            color="primary"
            style={{marginTop: '10px'}}
            onClick={this.capture}
          >
            Capture photo
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to upload and share and do you give concent?"}</DialogTitle>
            <DialogContent>
                <img style={{width: '95%'}} src={this.state.screenshot} />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.submitImage} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </Footer>
      </Container>
    );
  }
}

export default WebcamCapture