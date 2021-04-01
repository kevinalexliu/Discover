import React from 'react';
import { Container, Header, Paragraph, Button } from '../styles.js';
import { Melon } from '../../../../ui/colors.js'
import axios from 'axios';

const Login = ({signIn}) => {

  return (
    <Container>
      <Header color={Melon} size={5}>Welcome to Discover !</Header>
      <Paragraph size={1.5}>Dicover new music everyday,<br/> powered by Spotify</Paragraph>
      <a href='http://localhost:4000/login'><Button>LOG IN WITH SPOTIFY</Button></a>
    </Container>
  )
}

export default Login;
