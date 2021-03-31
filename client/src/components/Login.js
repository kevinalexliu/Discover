import React from 'react';
import { Container, Header, Paragraph, Button } from './styles.js';
import axios from 'axios';

const Login = ({signIn}) => {

  // const login = () => {
  //   axios({
  //     method: 'get',
  //     url:'/login'
  //   })
  //     .then(result=>console.log(result))
  //     .catch(err=> console.log(err))
  // }

  return (
    <Container>
      <Header>Welcome to Discover !</Header>
      <Paragraph>Dicover new music everyday,<br/> powered by Spotify</Paragraph>
      <a href='http://localhost:4000/login'><Button>LOG IN WITH SPOTIFY</Button></a>
    </Container>
  )
}

export default Login;

{/* <a href='http://localhost:4000/login'></a> */}