import React from 'react';
import { BigThumbnail } from './styles.js';
import { Header } from '../styles.js';
import { Jet } from '../../../../ui/colors.js';

const MusicContainer = ({track, info}) => {
  return (
    <div id='musicContainer'>
        <BigThumbnail
          className='image'
          width={28}
          height={28}
          src={track.image}
        />
        <div className='track'>
          <Header
            color={Jet}
            size={1.5}
          >
            {track.track}
          </Header>
          <Header
            color={Jet}
            size={1.2}
          >
            {track.artist}
          </Header>
        </div>
    </div>
  )
};

export default MusicContainer;