import {Component} from 'react'
import Header from '../Header'
import {
  RegisterContainer,
  RegisterImage,
  InsideContainer,
  RegistrationContainer,
  LetUsJoinHeading,
  NameAndTopicContainer,
  Label,
  Input,
  SelectOptions,
  Options,
  Button,
  Error,
} from './styledComponent'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    inputError: false,
    errorMessage: '',
    userName: '',
    topicName: topicsList[0].id,
  }

  onClickRegisterNow = () => {
    const {userName} = this.state
    if (userName !== '') {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({inputError: true, errorMessage: 'Please enter your name'})
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topicName: event.target.value})
  }

  render() {
    const {userName, inputError, errorMessage, topicName} = this.state
    console.log(userName, topicName)

    return (
      <>
        <Header />
        <RegisterContainer>
          <InsideContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegistrationContainer onSubmit={this.onClickRegisterNow}>
              <LetUsJoinHeading>Let us join</LetUsJoinHeading>
              <NameAndTopicContainer>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={userName}
                  onChange={this.onChangeUserName}
                />
              </NameAndTopicContainer>
              <NameAndTopicContainer>
                <Label id="topic">TOPICS</Label>
                <SelectOptions
                  id="topic"
                  value={topicName}
                  onChange={this.onChangeTopic}
                  selected
                >
                  {topicsList.map(eachTopic => (
                    <Options key={eachTopic.id} value={eachTopic.id}>
                      {eachTopic.displayText}
                    </Options>
                  ))}
                </SelectOptions>
              </NameAndTopicContainer>
              <Button type="submit">Register Now</Button>
              {inputError && <Error>{errorMessage}</Error>}
            </RegistrationContainer>
          </InsideContainer>
        </RegisterContainer>
      </>
    )
  }
}

export default Register
