import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto';
`

export const WelcomeHeading = styled.h1`
  font-weight: 600;
  font-size: 35px;
`

export const Description = styled.p`
  font-size: 15px;
`

export const RegisterButton = styled.button`
  padding: 15px 25px;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 10px;
  border: 0;
  font-size: 15px;
`

export const MeetingImage = styled.img`
  height: 300px;
  width: 90%;
  margin-top: 20px;
`
