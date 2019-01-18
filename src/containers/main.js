import React, {Component} from 'react'
import styled from 'styled-components'
import WebcamCapture from '../components/WebcamCapture'

const AppContainer = styled.div`
`
const Content = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

class Main extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className='container'>
        <AppContainer>
          <Content>
            <WebcamCapture />
          </Content>
        </AppContainer>
      </div>
    )
  }
}

export default Main
