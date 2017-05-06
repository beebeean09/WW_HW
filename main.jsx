import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './components/store/store';
import Root from './components/root';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
// import {getSubreddits} from './components/reddit_api/reddit_api';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  // const root = document.getElementById('root');
  // ReactDOM.render(<Root />, root);
  // getSubreddits();

  const home = document.getElementById('home');
  ReactDOM.render(<Home/>, home);
  const navbar = document.getElementById('navbar');
  ReactDOM.render(<Navbar/>, navbar);

});
