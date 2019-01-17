import React, {Component} from 'react'
import styled from 'styled-components'
import WebcamCapture from '../components/WebcamCapture'



const AppContainer = styled.div`
`
const ListContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 32px;
  height: 100%;
  width: 100%;
`

class Main extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render () {
    return (
      <div className='container'>
        <AppContainer>
          <ListContainer>
            <WebcamCapture />
          </ListContainer>
        </AppContainer>
      </div>
    )
  }
}

export default Main
