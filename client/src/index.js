import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Home from './components/Home.js';


ReactDOM.render(window.location.pathname === '/home' ? <Home/> :<App/>, document.getElementById('app'));

// window.location.pathname === '/home' ? <Home/> :