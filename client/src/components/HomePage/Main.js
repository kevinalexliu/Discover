import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Thumbnail } from './styles.js';
import NewRelease from './NewRelease.js';
import RecommendPlaylist from './RecommendPlaylist.js';
import Recommend from './Recommend.js';

const url = {
  newRelease: 'https://api.spotify.com/v1/browse/new-releases',
  recommendPlaylist: 'https://api.spotify.com/v1/browse/featured-playlists',
  genre: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
  recommendMusic: 'https://api.spotify.com/v1/recommendations',
}


const Main = ({token, category}) => {

  return (
    <div id='recommend'>
      {category === 'newRelease' ? <NewRelease token={token} /> : category === 'recommendPlaylist' ?
      <RecommendPlaylist token={token} /> : category === 'recommendMusic' ? <Recommend token={token} /> : null}
    </div>
  )
}

export default Main;