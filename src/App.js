import React from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    
    <Router>
        <Home/>
    </Router>
  );
}

export default App;