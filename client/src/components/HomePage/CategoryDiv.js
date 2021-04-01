import React from 'react';
import Category from './Category.js';

const CategoryDiv = ({setCategory}) => {


  return (
    <div id='categoryDiv'>
      <Category setCategory={setCategory}category='Discover Weekly' name='discoverWeekly'/>
      <Category setCategory={setCategory} category='Recommend' name='recommendMusic' />
      <Category setCategory={setCategory} category='New Release' name='newRelease' />
      <Category setCategory={setCategory} category='Recommend Playlist' name='recommendPlaylist' />
      <Category setCategory={setCategory} category='Genre' name='genre' />
      <Category setCategory={setCategory} category='Chart' name='chart' />
    </div>
  )
};

export default CategoryDiv;