import React from 'react';
import { Thumbnail } from './styles.js';

const MusicContainer = ({thumbnail, info}) => {
  return (
    <div id='musicContainer'>
      <div className='thumbnail'>
        <Thumbnail
          width={3}
          height={3}
          // src={}
        />
      </div>
    </div>
  )
};

export default MusicContainer;