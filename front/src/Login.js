import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '16rem' }}>
        <Card.Body>
        
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in */}
          <LoginButton/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
