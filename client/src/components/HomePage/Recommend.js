import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Thumbnail } from './styles.js';
import NewRelease from './NewRelease.js';
import RecommendPlaylist from './RecommendPlaylist.js';

const url = {
  newRelease: 'https://api.spotify.com/v1/browse/new-releases',
  recommendPlaylist: 'https://api.spotify.com/v1/browse/featured-playlists',
  genre: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
  recommendMusic: 'https://api.spotify.com/v1/recommendations',
}


const Recommend = ({token, category}) => {
  // const [images, setImages] = useState([]);
  // const [data, setData] = useState([]);


  // const getMusic = () => {
  //   axios({
  //     method: 'get',
  //     url: url[category],
  //     headers: {
  //       Authorization: 'Bearer '+ token
  //     }
  //   })
  //     .then(result => setData(result.data))
  //     .catch(err => console.log(err));
  // }

  // useEffect(() => {
  //   getMusic();
  // }, [category])

  return (
    <div id='recommend'>
      {category === 'newRelease' ? <NewRelease token={token} /> : category === 'recommendPlaylist' ?
      <RecommendPlaylist token={token} /> : null}
    </div>
  )
}

export default Recommend;