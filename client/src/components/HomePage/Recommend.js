import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Jet } from '../../../../ui/colors.js'
import { Thumbnail, BigThumbnail } from './styles.js';
import { Header, Paragraph } from '../styles.js';
import { IdContext } from '../IdContext.js';

const random = Math.floor(Math.random() * 10 + 1);

const Recommend = ({token}) => {
  const [data, setData] = useState([]);
  const { setId } = useContext(IdContext);


  const getUserTopPick = () => {
    const url = 'https://api.spotify.com/v1/me/top/artists';
    axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'Bearer '+ token
      },
      params: {limit: 3}
    })
      .then(result => {
        const infos = result.data.items;
        let artists = infos[0].id;
        let tracks = infos[1].id;
        let genres = infos[2].id;
        let params = {
          seed_artists: artists,
          seed_genres: genres,
          seed_tracks: tracks,
          min_popularity: 70
        }
        return params;
      })
      .then((params) => getMusic(params))
      .catch(err => {throw err});
  }

  const getMusic = (params) => {
    const url = 'https://api.spotify.com/v1/recommendations';
    axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'Bearer '+ token
      },
      params: params
    })
      .then(result => setData(result.data.tracks))
      .catch(err => {throw err});
  }

  useEffect(() => {
    if (data.length === 0 && token) {
      getUserTopPick();
    }
  })

  return (
    <React.Fragment>
      <div className='description'>
        <div className='thumbnail'>
          <BigThumbnail
            width={10}
            heigth={10}
            src={data.length > 0 ? data[random].album.images[0].url : null}
          />
        </div>
        <div className='info'>
          <Header color={Jet} size={2.5}>Top Pick Just For You</Header>
          <Paragraph size={1.1} color={Jet} weight={700}>Enjoy new music and deep cuts picked for you<br/>Update every week</Paragraph>
        </div>
      </div>
      <div className='images'>
        {data.map(track => {
          return (<Thumbnail
            onClick={()=>setId(track.album.id)}
            width={6.9}
            height={6.9}
            src={track.album.images[0].url}
            key={track.id}
          />)
        })}
      </div>
    </React.Fragment>
  )
}

export default Recommend;