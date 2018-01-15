import React from 'react';
import { Link } from 'react-router-dom';

import { BOARDS_URL } from '../../utils/urlCreators';

import './homePage.scss';

const Home = () => (
  <div className="home-page">
    <h1 className="home-page__title">
      Yet another <span className="home-page__accent">Task manager</span>
    </h1>
    <Link to={BOARDS_URL} className="home-page__view-boards">
      View boards
    </Link>
  </div>
);

export default Home;
