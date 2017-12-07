import React from 'react';
import { Link } from 'react-router-dom';

import './app.scss';

const App = () => (
  <div className="home-page">
    <h1 className="home-page__title">
      Yet another <span className="home-page__accent">Task manager</span>
    </h1>
    <Link to="/boards" className="link-button">
      View boards
    </Link>
  </div>
);

export default App;
