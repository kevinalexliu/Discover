import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Jet } from '../../../../ui/colors.js'
import { Thumbnail, BigThumbnail } from './styles.js';
import { Header, Paragraph } from '../styles.js';

const RecommendPlaylist = ({token}) => {
  const [data, setData] = useState([])
  const url = 'https://api.spotify.com/v1/browse/featured-playlists';

  const getMusic = () => {
    axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(result => setData(result.data.playlists.items))
      .catch(err => {throw err});
  }

  useEffect(() => {
    if (data.length === 0) {
      getMusic();
    }
  })

  return (
    <React.Fragment>
      <div className='description'>
        <div className='thumbnail'>
          <BigThumbnail
            width={10}
            heigth={10}
            src={data.length > 0 ? data[0].images[0].url : null}
          />
        </div>
        <div className='info'>
          <Header color={Jet} size={2.5}>Featured Playlists</Header>
          <Paragraph size={1.1} color={Jet} weight={700}>Our featured playlists. Enjoy new music base on your mood<br/>Update every week</Paragraph>
        </div>
      </div>
      <div className='images'>
        {data.map(playlist => {
          return (<Thumbnail
            width={7.2}
            height={7.2}
            src={playlist.images[0].url}
            key={playlist.id}
          />)
        })}
      </div>
    </React.Fragment>
  )
}

export default RecommendPlaylist;