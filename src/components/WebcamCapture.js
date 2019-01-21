import React, {Component} from 'react'
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Container = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 40%;
`
const Content = styled.div`
`

const Footer = styled.div``

class WebcamCapture extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenshot: '',
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
    this.setState({ screenshot: imageSrc})
    this.handleClickOpen();
  };

  submitImage = () => {
    var url = 'https://example.com/profile';
    const data = {image: this.state.screenshot}
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    this.setState({ open: false });
  }

  render() {
    const videoConstraints = {
      width: 535,
      height: 720,
      facingMode: "user"
    };

    return (
      <Container>
        <Content>
          <Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            // style={{objectFit: 'cover', overflow: 'auto'}}
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
              <DialogContentText id="alert-dialog-description">
                <img src={this.state.screenshot} />
              </DialogContentText>
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