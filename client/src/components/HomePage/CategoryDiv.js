import React from 'react';
import Category from './Category.js';

const CategoryDiv = () => {
  return (
    <div id='categoryDiv'>
      <Category category='Genre'/>
      <Category category='Chart'/>
      <Category category='Discover Weekly'/>
      <Category category='New Release'/>
      <Category category='Random Artist'/>
      <Category category='Random Playlist'/>
    </div>
  )
};

export default CategoryDiv;