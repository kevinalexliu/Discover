import React from 'react';
import { Button } from './styles.js';

const Category = ({category, name, setCategory}) => {

  const select = (e) => {
    e.preventDefault();
    setCategory(e.target.name);
  }

  return (
    <Button
     name={name}
     onClick={select}
    >
      {category}
    </Button>
  )
}

export default Category;