import React, { useRef, useState, useEffect } from 'react';
import { BigThumbnail } from './styles.js';
import { Header } from '../styles.js';
import { Jet } from '../../../../ui/colors.js';

const MusicContainer = ({track}) => {
  const audioRef = useRef();

  const updateSong = () => {
    if(audioRef.current){
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
    }
  }

  useEffect(() => {
    if (track.preview) {
      updateSong();
    }
  });

  return (
    <div id='musicContainer'>
        <BigThumbnail
          className='image'
          width={25}
          height={25}
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
        <div className='audio'>
        <audio autoPlay ref={audioRef}>
          <source src={track.preview} type="audio/mpeg"/>
        </audio>
        </div>
    </div>
  )
};

export default MusicContainer;