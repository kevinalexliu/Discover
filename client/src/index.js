import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/LoginPage/App.js';
import Home from './components/HomePage/Home.js';


ReactDOM.render(window.location.pathname === '/home' ? <Home/> :<App/>, document.getElementById('app'));
