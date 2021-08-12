import { Alert} from "react-bootstrap"

function Error({heading, message}) {
  
      return (
        <Alert variant="danger">
          <Alert.Heading>{heading}</Alert.Heading>
          <p>
           {message}
          </p>
        </Alert>
      );
    }

  export default Error
