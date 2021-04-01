const axios = require('axios');

const redirect_uri = 'http://localhost:4000/home';

exports.authorizationController = (req, res) => {
  var scopes = 'user-read-private user-read-email streaming user-top-read';
  const url = 'https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + process.env.CLIENT_ID +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri);
  res.redirect(url);
};

const getCode = () => {
  const queryString = window.location.search;
  console.log(queryString)
}