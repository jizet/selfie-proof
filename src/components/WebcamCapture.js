import React, {Component} from 'react'
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ConfirmationDialog from './ConfirmationDialog'

const Container = styled.div`

`
const Content = styled.div``

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

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <Container>
        <Content>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </Content>
        <Footer>
          <Button
            variant="contained"
            color="primary"
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
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </Footer>
        {/* <ConfirmationDialog
          Webcam={this.webcam}
          photo={this.state.screenshot}
        /> */}
      </Container>
    );
  }
}

export default WebcamCapture