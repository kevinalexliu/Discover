import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Jet } from '../../../../ui/colors.js'
import { Thumbnail, BigThumbnail } from './styles.js';
import { Header, Paragraph } from '../styles.js';
import { IdContext } from '../IdContext.js';

const random = Math.floor(Math.random() * 10 + 1);

const NewRelease = ({token}) => {
  const [data, setData] = useState([]);
  const { setId } = useContext(IdContext);
  const url = 'https://api.spotify.com/v1/browse/new-releases';
  const getMusic = () => {
    axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(result => setData(result.data.albums.items))
      .catch(err => {throw err});
  }

  useEffect(() => {
    if (data.length === 0 && token) {
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
            src={data.length > 0 ? data[random].images[0].url : null}
          />
        </div>
        <div className='info'>
          <Header color={Jet} size={2.5}>New Release</Header>
          <Paragraph size={1.1} color={Jet} weight={700}>Catch all the latest music from top artists<br/>Update every week</Paragraph>
        </div>
      </div>
      <div className='images'>
        {data.map(album => {
          return (<Thumbnail
            onClick={()=>setId(album.id)}
            width={6.9}
            height={6.9}
            src={album.images[0].url}
            key={album.id}
          />)
        })}
      </div>
    </React.Fragment>
  )
}

export default NewRelease;