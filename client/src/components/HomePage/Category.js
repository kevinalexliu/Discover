import React from 'react';
import { Button } from './styles.js';

const Category = ({category}) => {
  return (
    <Button>{category}</Button>
  )
}

export default Category;