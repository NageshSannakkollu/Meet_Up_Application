import {
  NotFoundContainer,
  NotFoundImage,
  Heading,
  Description,
} from './styledComponent'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      We are sorry, the page you requested could not be found
    </Description>
  </NotFoundContainer>
)

export default NotFound
