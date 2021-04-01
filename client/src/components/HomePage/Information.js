import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BigThumbnail, Thumbnail } from './styles.js';
import { Header, Paragraph } from '../styles.js';
import { Jet } from '../../../../ui/colors.js';

const Information = ({token, id, setTrack}) => {
  const [data, setData] = useState({
    artist: [],
    album:'',
    tracks: [],
    releaseDate: '',
    image: ''
  })

  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  const playMusic = (e) => {
    e.preventDefault();
    setTrack({
      image: data.image,
      track: e.target.getAttribute('data-name'),
      artist: data.artist.join(','),
      preview: e.target.getAttribute('data-preview')
    })
  }

  const getAlbum = () => {
    const url = `https://api.spotify.com/v1/albums/${id}`
    axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(result => {
        let info = result.data;
        setData({
          artist: info.artists.map(artist=>artist.name),
          album: info.name,
          releaseDate: formatDate(info.release_date),
          image: info.images[0].url,
          tracks: info.tracks.items
        })
      })
      .catch(err => {throw err});
  }

  useEffect(() => {
    if (id.length > 1) {
      getAlbum();
      setTrack(null);
    }
  }, [id])

  return (
    <div id='info'>
        <BigThumbnail className='cover' width={14} height={14} src={data.image} />
        <Header className='header' color={Jet} size={1.5}>{data.album}</Header>
        <div className='description'>
          <Paragraph size={1.1} color={Jet} weight={700}>Released {data.releaseDate}</Paragraph>
          <Paragraph size={1.1} color={Jet} weight={700}>Album by {data.artist.join(',')}</Paragraph>
        </div>
        <div className='tracks'>
          <Header size={1.1} color={Jet}>Tracks</Header>
          {data.tracks.map(track => {
            return (
                <Paragraph
                  onClick={playMusic}
                  data-name={track.name}
                  data-preview={track.preview_url}
                  className='track'
                  size={1.1}
                  color={Jet}
                  weight={400}
                  key={track.id}
                >{track.name}</Paragraph>
            )
          })}
        </div>
    </div>
  )
}

export default Information;