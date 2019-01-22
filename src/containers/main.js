import React, {Component} from 'react'
import styled from 'styled-components'
import WebcamCapture from '../components/WebcamCapture'

const AppContainer = styled.div`
`
const Content = styled.div`
`

class Main extends Component {

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
