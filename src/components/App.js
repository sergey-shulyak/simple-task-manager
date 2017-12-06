import React from 'react';
import { Link } from 'react-router-dom';

import './app.scss';

const App = () => (
  <div id="home-page">
    <h1 id="title">Yet another <span className="bolder">Task manager</span></h1>
    <Link to="/boards" className="link-button">
      View boards
    </Link>
  </div>
);

export default App;
