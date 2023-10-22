import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

import {
  MainContainer,
  WelcomeHeading,
  Description,
  RegisterButton,
  MeetingImage,
} from './styledComponents'

class Home extends Component {
  state = {
    registered: false,
  }

  render() {
    const {registered} = this.state
    console.log(registered)
    return (
      <>
        <Header />
        <MainContainer>
          <WelcomeHeading className="welcome-heading">
            Welcome to Meetup
          </WelcomeHeading>
          <Description>Please register for the topic</Description>
          <Link to="/register">
            <RegisterButton type="button" onClick={this.onClickRegister}>
              Register
            </RegisterButton>
          </Link>

          <MeetingImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </MainContainer>
      </>
    )
  }
}

export default Home
