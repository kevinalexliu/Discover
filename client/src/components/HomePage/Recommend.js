import React from 'react';
import axios from 'axios';

const newRelease = 'https://api.spotify.com/v1/browse/new-releases';
const randomPlaylist = 'https://api.spotify.com/v1/browse/featured-playlists';
const genre = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';

const Recommend = ({token, category}) => {
  return (
    <div id='recommend'></div>
  )
}

export default Recommend;