import React, { useState } from 'react';
import { GlobalStyles } from '../styles.js'
import Login from './Login.js';


const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Login/>
    </div>
  )
}

export default App;