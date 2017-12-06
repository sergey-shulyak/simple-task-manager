import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Hello, React</h1>
    <Link to="/boards">
      View boards
    </Link>
  </div>
);

export default App;
