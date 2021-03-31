import React, { useEffect, useState } from 'react';
import { GlobalStyles, Container } from './styles.js';
import CategoryDiv from './CategoryDiv.js';
import MusicContainer from './MusicContainer.js';
import Recommend from './Recommend.js';
import Info from './Info.js';
import axios from 'axios';
import querystring from 'querystring';
import config from '/config.env.js';

const redirect_uri = 'http://localhost:4000/home';
var CODE;

const Home = () => {
  const [category, setCategory] = useState('discoverWeekly');
  const [token, setToken] = useState('');

  const handleRedirect = () => {
    let code = getCode();
    getToken(code);
    window.history.pushState('','', redirect_uri)
  }
  const getCode = () => {
    const queryString = window.location.search;
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      CODE = urlParams.get('code')
    }
    return CODE;
  };

  const getToken = (code) => {
    const url = "https://accounts.spotify.com/api/token";
    axios({
      method: 'post',
      url: url,
      headers: {
        "Content-Type":"application/x-www-form-urlencoded",
        Authorization: 'Basic ' + btoa(`${config.CLIENT_ID}:${config.CLIENT_SECRET}`)
      },
      data: querystring.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: encodeURI(redirect_uri),
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET
      })
    })
      .then(result => setToken(result.data.access_token))
      .catch(err => {throw err});
  }

  useEffect(() =>{
    handleRedirect();
  })
  return (
    <div>
      <GlobalStyles />
      <Container>
        <CategoryDiv setCategory={setCategory} />
        <MusicContainer token={token} category={category} />
        <Recommend token={token} category={category} />
        <Info token={token} category={category} />
      </Container>
    </div>
  )
}

export default Home;