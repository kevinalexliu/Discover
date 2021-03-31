import React, { useEffect } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import config from '/config.env.js';

const redirect_uri = 'http://localhost:4000/home';
var TOKEN;

const Home = () => {

  const handleRedirect = () => {
    let code = getCode();
    getToken(code);
    window.history.pushState('','', redirect_uri)
  }
  const getCode = () => {
    let code = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      code = urlParams.get('code')
    }
    return code;
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
      .then(result => TOKEN = result.data.access_token)
      .catch(err => {throw err});
  }

  useEffect(() =>{
    handleRedirect();
  })
  return (
    <h1>Hello world</h1>
  )
}

export default Home;